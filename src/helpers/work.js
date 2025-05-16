// Потрібно встановити: npm install modbus-serial
const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();

// Константи процесу Варіант 77
const TARGET_PRESSURE_MPA = 0.12;
const PRESSURE_SENSOR_MAX_MPA = 0.25;
const PRESSURE_SENSOR_RAW_MAX = 10000; // Припущення для датчика 0-0.25МПа -> 0-10000
const STEAM_VALVE_OPEN_PERCENT = 80.0;
const HOLD_TIME_TOTAL_SECONDS = 12 * 60 + 25; // 745 секунд

// Стани для Варіанту 77
const states_v77 = {
  IDLE: 0, // Очікування "Пуск" + порожній апарат
  FILLING: 1, // Наповнення рідиною (Клапан 2 відкритий)
  PRESSURIZING: 2, // Нагрів/тиск (Клапан 4 відкритий на 80%)
  HOLDING: 3, // Витримка часу
  DRAINING: 4, // Злив рідини (Клапани 1 і 5 відкриті)
  POST_DRAIN_VENTING: 5, // Вентиляція після зливу (Клапан 3 відкритий), підготовка до нового циклу
};
let currentState_v77 = states_v77.IDLE;
let cycleActive_v77 = false; // Чи активний автоматичний цикл

// Об'єкт для вхідних/вихідних даних та стану Варіанту 77
let io_v77 = {
  msg: "System Initializing...", // Поточне повідомлення для виводу

  // Входи з Modbus (будуть оновлюватися з Modbus)
  sbStart: false, // Кнопка "Пуск"
  sbStop: false, // Кнопка "Стоп"
  sensorLevelB_isLiquid: false, // Датчик рівня "b" (true, якщо є рідина)
  sensorLevelA_isLiquid: false, // Датчик рівня "a" (true, якщо є рідина)
  pressurePI_raw: 0, // Сире значення з датчика тиску
  currentPressure_MPa: 0.0, // Поточний тиск в МПа

  // Виходи Modbus (стан клапанів)
  valve1_Air: false, // Клапан 1 (повітря)
  valve2_LiquidIn: false, // Клапан 2 (рідина вхід)
  valve3_Vent: false, // Клапан 3 (вентиляція)
  valve4_Steam_percent: 0.0, // Клапан 4 (пара, 0-100%)
  valve5_Drain: false, // Клапан 5 (злив)

  // Таймер
  holdTimerSecondsRemaining: 0, // Залишок часу для витримки в секундах
};

// Підключення до Modbus та запуск задач
client.connectTCP("192.168.0.101", { port: 502 }, setupModbusCommunication_v77);

function setupModbusCommunication_v77() {
  client.setID(1);
  console.log("Successfully connected to Modbus TCP Server for Variant 77.");
  io_v77.msg = "Connected. System Idle. Waiting for Start and empty apparatus.";

  // Інтервал для читання дискретних входів (кнопки, датчики рівня)
  setInterval(function () {
    // Читаємо 4 дискретних входи, починаючи з адреси 0 (di,0 до di,3)
    client.readDiscreteInputs(0, 4, function (err, data) {
      if (err) {
        console.error("Error reading discrete inputs (V77):", err);
        io_v77.msg = "Error reading discrete inputs!";
        return;
      }
      if (data && data.data) {
        io_v77.sbStart = data.data[0]; // di,0
        io_v77.sbStop = data.data[1]; // di,1
        io_v77.sensorLevelB_isLiquid = data.data[2]; // di,2
        io_v77.sensorLevelA_isLiquid = data.data[3]; // di,3
      }
    });
  }, 200); // Читаємо кожні 200 мс

  // Інтервал для читання аналогових входів (датчик тиску) та виклику логіки
  setInterval(function () {
    // Читаємо 1 аналоговий вхід, починаючи з адреси 0 (ai,0)
    client.readInputRegisters(0, 1, function (err, data) {
      if (err) {
        console.error("Error reading analog inputs (V77):", err);
        io_v77.msg = "Error reading analog inputs!";
        return;
      }
      if (data && data.data) {
        io_v77.pressurePI_raw = data.data[0];
        // Конвертація сирого значення в МПа
        io_v77.currentPressure_MPa =
          (io_v77.pressurePI_raw / PRESSURE_SENSOR_RAW_MAX) *
          PRESSURE_SENSOR_MAX_MPA;
      }
      // Викликаємо основну логіку після оновлення даних
      logic_v77();
    });
  }, 500); // Оновлюємо та викликаємо логіку кожні 500 мс

  // Інтервал для секундного таймера та виводу повідомлень
  setInterval(function () {
    // Логування для діагностики таймера
    if (currentState_v77 === states_v77.HOLDING) {
      // Логуємо тільки коли ми в стані HOLDING
      console.log(
        `[TIMER DEBUG] In HOLDING state. cycleActive_v77: ${cycleActive_v77}, currentState_v77 (raw): ${currentState_v77}, expected HOLDING state: ${states_v77.HOLDING}, holdTimerSecondsRemaining: ${io_v77.holdTimerSecondsRemaining}`
      );
    }

    if (cycleActive_v77 && currentState_v77 === states_v77.HOLDING) {
      if (io_v77.holdTimerSecondsRemaining > 0) {
        io_v77.holdTimerSecondsRemaining--;
        console.log(
          `[TIMER DEBUG] Timer decremented to: ${io_v77.holdTimerSecondsRemaining}`
        ); // Лог успішного зменшення
      } else {
        // Якщо таймер досяг нуля або менше, але ми все ще в цьому блоці
        if (currentState_v77 === states_v77.HOLDING) {
          // Перевіряємо, чи ми все ще тут
          console.log(
            `[TIMER DEBUG] Timer is <= 0 (${io_v77.holdTimerSecondsRemaining}), not decrementing. Preparing to transition from HOLDING.`
          );
        }
      }
    } else {
      // Якщо умова для зменшення не виконана, але ми очікували (наприклад, в HOLDING стані)
      if (currentState_v77 === states_v77.HOLDING) {
        console.log(
          `[TIMER DEBUG] In HOLDING, but NOT decrementing. cycleActive: ${cycleActive_v77}, timer: ${io_v77.holdTimerSecondsRemaining}`
        );
      }
    }

    // Виводимо поточний стан та повідомлення (заміна для послідовного порту)
    console.log(
      `LOG TICK --- State: ${Object.keys(states_v77).find(
        (key) => states_v77[key] === currentState_v77
      )}, Active: ${cycleActive_v77}, Msg: ${
        io_v77.msg
      }, P: ${io_v77.currentPressure_MPa.toFixed(3)}MPa, LvlB: ${
        io_v77.sensorLevelB_isLiquid
      }, LvlA: ${io_v77.sensorLevelA_isLiquid}, Timer: ${
        io_v77.holdTimerSecondsRemaining
      }s`
    );
  }, 500); // Кожну секунду
}

// Основна логіка керування процесом Варіант 77
function logic_v77() {
  let isApparatusEmpty = !io_v77.sensorLevelB_isLiquid;

  // Обробка кнопки СТОП (має найвищий пріоритет)
  if (io_v77.sbStop) {
    currentState_v77 = states_v77.IDLE;
    cycleActive_v77 = false;
    io_v77.msg = "STOP pressed. Process halted. All valves closed.";

    io_v77.valve1_Air = false;
    io_v77.valve2_LiquidIn = false;
    io_v77.valve3_Vent = false; // Закриваємо вентиляцію при аварійній зупинці
    io_v77.valve4_Steam_percent = 0.0;
    io_v77.valve5_Drain = false;
    io_v77.holdTimerSecondsRemaining = 0;

    writeOutputs_v77();
    return; // Негайно вийти з логіки
  }

  // Автомат станів
  switch (currentState_v77) {
    case states_v77.IDLE:
      io_v77.valve1_Air = false;
      io_v77.valve2_LiquidIn = false;
      // io_v77.valve3_Vent = true; // Може бути відкритим після попереднього циклу, або закритим.
      // Якщо цикл починається з V3 закритого, то тут false.
      // Текст "закриваються клапани 2 та 3" на наступному кроці передбачає, що V3 міг бути відкритим.
      // Якщо V3 відкривається в POST_DRAIN_VENTING і залишається відкритим, то тут true.
      // Для безпеки почнемо з усіх закритих, крім V3, якщо він потрібен для вентиляції перед стартом.
      // Але логічніше, що V3 закривається перед тиском.
      io_v77.valve3_Vent = false; // Почнемо з закритого V3 для чистоти
      io_v77.valve4_Steam_percent = 0.0;
      io_v77.valve5_Drain = false;
      cycleActive_v77 = false;

      if (io_v77.sbStart && !cycleActive_v77) {
        // Реагуємо на "Пуск" тільки якщо цикл не активний
        if (isApparatusEmpty) {
          currentState_v77 = states_v77.FILLING;
          cycleActive_v77 = true;
          io_v77.msg =
            "START pressed, apparatus empty. Filling liquid (V2 open).";
        } else {
          io_v77.msg = "START pressed, but apparatus is not empty. Waiting.";
        }
      } else if (!cycleActive_v77) {
        io_v77.msg = "System Idle. Waiting for Start and empty apparatus.";
      }
      break;

    case states_v77.FILLING:
      // "Коли апарат порожній і натискається кнопка «Пуск» клапан 2 відкривається"
      io_v77.valve2_LiquidIn = true;
      io_v77.valve3_Vent = false; // Переконуємось, що вентиляція закрита під час наповнення, якщо вона була відкрита

      // "Після досягнення рівня “а” закриваються клапани 2 та 3 і відкривається на 80% клапан подачі пари 4."
      if (io_v77.sensorLevelA_isLiquid) {
        io_v77.valve2_LiquidIn = false;
        // io_v77.valve3_Vent = false; // Вже false, але для ясності
        io_v77.valve4_Steam_percent = STEAM_VALVE_OPEN_PERCENT;
        currentState_v77 = states_v77.PRESSURIZING;
        io_v77.msg =
          "Level 'a' reached. V2, V3 closed. Pressurizing (V4 80% open).";
      } else {
        io_v77.msg = `Filling to level 'a'. Current P: ${io_v77.currentPressure_MPa.toFixed(
          3
        )}MPa. V2 Open.`;
      }
      break;

    case states_v77.PRESSURIZING:
      // "Після досягнення тиску 0,12МПа ... закрити клапан 4 і включити таймер"
      if (io_v77.currentPressure_MPa >= TARGET_PRESSURE_MPA) {
        io_v77.valve4_Steam_percent = 0.0; // Закрити клапан пари
        io_v77.holdTimerSecondsRemaining = HOLD_TIME_TOTAL_SECONDS;
        currentState_v77 = states_v77.HOLDING;
        console.log(
          `[STATE TRANSITION] Initialized timer for HOLDING state to ${io_v77.holdTimerSecondsRemaining} seconds.`
        );
        io_v77.msg = `Target pressure ${TARGET_PRESSURE_MPA}MPa reached. V4 closed. Starting hold timer for ${HOLD_TIME_TOTAL_SECONDS}s.`;
      } else {
        io_v77.msg = `Pressurizing. Target ${TARGET_PRESSURE_MPA}MPa. Current P: ${io_v77.currentPressure_MPa.toFixed(
          3
        )}MPa. V4 at ${STEAM_VALVE_OPEN_PERCENT}%.`;
      }
      break;

    case states_v77.HOLDING:
      // "Після того, як термін часу вичерпався, відкривається клапан 1 та 5"
      if (io_v77.holdTimerSecondsRemaining <= 0) {
        io_v77.valve1_Air = true; // Відкрити клапан 1 (повітря)
        io_v77.valve5_Drain = true; // Відкрити клапан 5 (злив)
        currentState_v77 = states_v77.DRAINING;
        io_v77.msg = "Hold time elapsed. Draining liquid (V1, V5 open).";
      } else {
        // Повідомлення оновлюється в секундному інтервалі
      }
      break;

    case states_v77.DRAINING:
      // "...рідина, стиснутого повітря, виливається з апарату."
      // Чекаємо, поки апарат стане порожнім (датчик рівня "b" покаже false)
      if (isApparatusEmpty) {
        io_v77.valve1_Air = false; // Закрити клапан 1
        io_v77.valve5_Drain = false; // Закрити клапан 5
        io_v77.valve3_Vent = true; // Відкрити клапан 3 (вентиляція)
        currentState_v77 = states_v77.POST_DRAIN_VENTING;
        io_v77.msg = "Apparatus empty. V1, V5 closed. Venting (V3 open).";
      } else {
        io_v77.msg = `Draining. Waiting for apparatus to be empty. V1, V5 Open.`;
      }
      break;

    case states_v77.POST_DRAIN_VENTING:
      // "Після цього клапан 1 і 5 закривається, а клапан 3 відкривається. Цикл повторюється."
      // Клапани 1 і 5 вже закриті, клапан 3 відкритий на попередньому кроці.
      // Тут можна додати невелику затримку для вентиляції, якщо потрібно, або одразу переходити.
      // Для автоматичного повторення циклу:
      if (isApparatusEmpty) {
        // Перевірка, чи все ще порожньо для початку нового циклу
        currentState_v77 = states_v77.FILLING; // Одразу на наповнення для наступного циклу
        io_v77.msg = "Venting complete. Starting next cycle: Filling.";
      } else {
        // Якщо раптом не порожньо, що малоймовірно, але для безпеки
        currentState_v77 = states_v77.IDLE;
        cycleActive_v77 = false;
        io_v77.msg =
          "Venting complete. Apparatus not confirmed empty. Returning to IDLE.";
      }
      // Якщо "Пуск" потрібен для кожного циклу, то:
      // currentState_v77 = states_v77.IDLE;
      // cycleActive_v77 = false;
      // io_v77.msg = "Venting complete. Cycle finished. Ready for new start.";
      break;

    default:
      currentState_v77 = states_v77.IDLE;
      cycleActive_v77 = false;
      io_v77.msg = "Undefined state. Resetting to IDLE.";
  }

  writeOutputs_v77();
}

// Функція для запису вихідних сигналів в Modbus
function writeOutputs_v77() {
  // Клапани 1, 2, 3, 5 - це coils. Припустимо, вони йдуть підряд:
  // coil 0: valve1_Air
  // coil 1: valve2_LiquidIn
  // coil 2: valve3_Vent
  // coil 3: valve5_Drain
  let coilValues = [
    io_v77.valve1_Air,
    io_v77.valve2_LiquidIn,
    io_v77.valve3_Vent,
    io_v77.valve5_Drain,
  ];
  client.writeCoils(0, coilValues, function (err) {
    if (err) console.error("Error writing coils (V77):", err);
  });

  // Клапан 4 (пара) - це analog output (holding register). Припустимо, адреса 0.
  // Значення 0-10000 для 0-100%.
  let steamValveModbusValue = Math.round(io_v77.valve4_Steam_percent * 100.0);
  client.writeRegister(0, steamValveModbusValue, function (err) {
    if (err) console.error("Error writing register for V4 (V77):", err);
  });
}

// Обробка помилок підключення (опціонально)
client.on("error", function (err) {
  console.error("Modbus Client Error (V77): ", err);
  io_v77.msg = "MODBUS CLIENT ERROR!";
  // Тут можна спробувати перепідключитися або зупинити логіку
  // client_v77.close(setupModbusCommunication_v77); // спроба закрити та відкрити знову
});

console.log("Starting Modbus client for Variant 77...");
