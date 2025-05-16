// Потрібно встановити: npm install modbus-serial
const ModbusRTU = require("modbus-serial");
const client_v77 = new ModbusRTU();

// IP та порт Modbus TCP сервера (замініть, якщо потрібно)
const MODBUS_IP = "192.168.2.103"; // Такий самий, як у вашому прикладі
const MODBUS_PORT = 502;
const MODBUS_SLAVE_ID = 1;

// Константи процесу Варіант 77
const TARGET_PRESSURE_MPA = 0.12;
const PRESSURE_SENSOR_MAX_MPA = 0.25;
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
client_v77.connectTCP(
  MODBUS_IP,
  { port: MODBUS_PORT },
  setupModbusCommunication_v77
);

function setupModbusCommunication_v77() {
  client_v77.setID(MODBUS_SLAVE_ID);
  console.log("Successfully connected to Modbus TCP Server for Variant 77.");
  io_v77.msg = "Connected. System Idle. Waiting for Start and empty apparatus.";

  // Інтервал для читання дискретних входів (кнопки, датчики рівня)
  setInterval(function () {
    // Читаємо 4 дискретних входи, починаючи з адреси 0 (di,0 до di,3)
    client_v77.readDiscreteInputs(0, 4, function (err, data) {
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
    client_v77.readInputRegisters(0, 1, function (err, data) {
      if (err) {
        console.error("Error reading analog inputs (V77):", err);
        io_v77.msg = "Error reading analog inputs!";
        return;
      }
      if (data && data.data) {
        // Конвертація сирого значення в МПа
        io_v77.currentPressure_MPa = (data.data[0] / 10000) * 0.25;
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
  }, 1000); // Кожну секунду
}

// Основна логіка керування процесом Варіант 77
function logic_v77() {
  let isApparatusEmpty = !io_v77.sensorLevelB_isLiquid; // sensorLevelB_isLiquid це io.ls1Lo з Програми Y (DI 100003)

  // Обробка кнопки СТОП (залишається без змін)
  if (io_v77.sbStop) {
    currentState_v77 = states_v77.IDLE;
    cycleActive_v77 = false;
    io_v77.msg = "STOP pressed. Process halted. All valves closed.";
    io_v77.valve1_Air = false;
    io_v77.valve2_LiquidIn = false;
    io_v77.valve3_Vent = false;
    io_v77.valve4_Steam_percent = 0.0;
    io_v77.valve5_Drain = false;
    io_v77.holdTimerSecondsRemaining = 0;
    writeOutputs_v77();
    return;
  }

  // Автомат станів
  switch (currentState_v77) {
    case states_v77.IDLE:
      io_v77.valve1_Air = false;
      io_v77.valve2_LiquidIn = false;
      io_v77.valve3_Vent = false; // Вентиляційний закритий на старті
      io_v77.valve4_Steam_percent = 0.0;
      io_v77.valve5_Drain = false;
      cycleActive_v77 = false;
      io_v77.holdTimerSecondsRemaining = 0; // Скидання таймера

      if (io_v77.sbStart && !cycleActive_v77) {
        if (isApparatusEmpty) {
          // Використовуємо isApparatusEmpty, визначений на початку функції
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
      io_v77.valve2_LiquidIn = true; // Відкриваємо клапан подачі рідини
      io_v77.valve3_Vent = false; // Вентиляційний клапан закритий під час наповнення

      // Чекаємо, поки симулятор "автоматично" змінить sensorLevelA_isLiquid на true
      if (io_v77.sensorLevelA_isLiquid) {
        io_v77.valve2_LiquidIn = false; // Закриваємо клапан подачі рідини
        // io_v77.valve3_Vent залишається false (за логікою завдання В77: "закриваються клапани 2 та 3")
        io_v77.valve4_Steam_percent = STEAM_VALVE_OPEN_PERCENT; // Відкриваємо клапан пари
        currentState_v77 = states_v77.PRESSURIZING;
        io_v77.msg =
          "Level 'a' reached. V2,V3 closed. Pressurizing (V4 80% open).";
      } else {
        io_v77.msg = `Filling to level 'a'. V2 Open.`;
      }
      break;

    case states_v77.PRESSURIZING:
      // Клапани V2 та V3 мають бути закриті
      io_v77.valve2_LiquidIn = false;
      io_v77.valve3_Vent = false;
      // Клапан V4 (пара) керується через io_v77.valve4_Steam_percent

      // Чекаємо, поки симулятор оновить тиск
      if (io_v77.currentPressure_MPa >= TARGET_PRESSURE_MPA) {
        io_v77.valve4_Steam_percent = 0.0; // Закриваємо клапан пари
        io_v77.holdTimerSecondsRemaining = HOLD_TIME_TOTAL_SECONDS; // Встановлюємо час витримки
        currentState_v77 = states_v77.HOLDING;
        io_v77.msg = `Target pressure ${TARGET_PRESSURE_MPA}MPa reached. V4 closed. Starting hold timer for ${HOLD_TIME_TOTAL_SECONDS}s.`;
      } else {
        // Якщо тиск ще не досягнуто, io_v77.valve4_Steam_percent має залишатися STEAM_VALVE_OPEN_PERCENT
        // Це значення встановлюється при переході в PRESSURIZING, тому тут його не змінюємо, якщо умова не виконана
        io_v77.msg = `Pressurizing. Target ${TARGET_PRESSURE_MPA}MPa. Current P: ${io_v77.currentPressure_MPa.toFixed(
          3
        )}MPa. V4 at ${io_v77.valve4_Steam_percent}%.`;
      }
      break;

    case states_v77.HOLDING:
      // Всі основні клапани процесу мають бути закриті під час витримки
      io_v77.valve1_Air = false;
      io_v77.valve2_LiquidIn = false;
      io_v77.valve3_Vent = false;
      io_v77.valve4_Steam_percent = 0.0; // Клапан пари точно закритий
      io_v77.valve5_Drain = false;

      if (io_v77.holdTimerSecondsRemaining <= 0) {
        // Час витримки вийшов, починаємо злив
        io_v77.valve1_Air = true; // Відкриваємо клапан 1 (повітря для Варіанту 77)
        io_v77.valve5_Drain = true; // Відкриваємо клапан 5 (злив для Варіанту 77)
        io_v77.valve3_Vent = true; // <<== ВІДКРИВАЄМО КЛАПАН 3 (ВЕНТИЛЯЦІЙНИЙ, COIL 2)
        //      Сподіваємося, що це спрацює як "магічний" тригер для симулятора,
        //      аналогічно lvs3 у Програмі Y.
        currentState_v77 = states_v77.DRAINING;
        io_v77.msg =
          "Hold time elapsed. Draining (V1, V3, V5 open). Waiting for simulator's sensor change.";
      } else {
        // Повідомлення про залишок часу таймера оновлюється в окремому setInterval
      }
      break;

    case states_v77.DRAINING:
      // Клапани V1, V3, V5 мають залишатися відкритими, як встановлено при переході сюди
      io_v77.valve1_Air = true;
      io_v77.valve3_Vent = true; // Залишаємо відкритим "магічний" клапан
      io_v77.valve5_Drain = true;

      // Чекаємо, поки симулятор "автоматично" змінить sensorLevelB_isLiquid на false
      // завдяки тому, що valve3_Vent (coil 2) активний.
      if (isApparatusEmpty) {
        // isApparatusEmpty це !io_v77.sensorLevelB_isLiquid
        // Симулятор показав, що апарат порожній
        io_v77.valve1_Air = false; // Закриваємо клапан 1 (повітря)
        io_v77.valve5_Drain = false; // Закриваємо клапан 5 (злив)
        // Клапан 3 (valve3_Vent) залишається відкритим для вентиляції, як у логіці "POST_DRAIN_VENTING"

        currentState_v77 = states_v77.POST_DRAIN_VENTING;
        io_v77.msg =
          "Apparatus empty (sensor by V3 activation). V1,V5 closed. V3 (Vent) remains open.";
      } else {
        io_v77.msg = `Draining (V1,V3,V5 open). Waiting for empty (LvlB sensor: ${io_v77.sensorLevelB_isLiquid}).`;
      }
      break;

    case states_v77.POST_DRAIN_VENTING:
      // На цьому етапі V1, V5 закриті. V3 (вентиляційний) відкритий.
      io_v77.valve1_Air = false;
      io_v77.valve2_LiquidIn = false; // Готуємося до можливого нового циклу
      io_v77.valve3_Vent = true; // Переконуємося, що вентиляційний відкритий
      io_v77.valve4_Steam_percent = 0.0;
      io_v77.valve5_Drain = false;

      // Логіка автоматичного повторення циклу (якщо не натиснуто СТОП)
      // Після вентиляції, якщо не стоп, переходимо до IDLE, щоб чекати Пуск + порожньо (якщо "Пуск" для кожного циклу)
      // Або до FILLING, якщо цикл має повторюватися повністю автоматично після першого "Пуск".
      // Завдання В77: "Цикл повторюється". Оригінальна Програма Y повторювала цикл.
      // Давайте зробимо автоматичне повторення, якщо не натиснуто СТОП.
      // Перед переходом до FILLING, стан IDLE має встановити valve3_Vent = false.
      // Краще перейти в IDLE, а IDLE вже перевірить умови для FILLING.
      // Або, якщо цикл активний, і апарат порожній (що має бути так, бо ми сюди потрапили), то можна одразу в FILLING.
      // Зробимо перехід до FILLING, якщо цикл активний, це буде ближче до "цикл повторюється".
      // У стані FILLING io_v77.valve3_Vent буде встановлено в false.

      if (cycleActive_v77) {
        // Якщо цикл був активний
        // Перевіряємо ще раз, чи порожньо, перш ніж почати нове заповнення
        // isApparatusEmpty має бути true тут, якщо ми прийшли з DRAINING -> POST_DRAIN_VENTING
        // Але для надійності можна перечитати або використати поточне значення.
        // Для простоти, припустимо, що якщо ми тут, то апарат порожній.
        currentState_v77 = states_v77.FILLING;
        io_v77.msg = "Venting complete. Auto-restarting cycle: Filling.";
      } else {
        // Якщо цикл був деактивований (наприклад, через СТОП раніше)
        currentState_v77 = states_v77.IDLE;
        io_v77.msg = "Venting complete. Cycle not active. Returning to IDLE.";
      }
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
  client_v77.writeCoils(0, coilValues, function (err) {
    if (err) console.error("Error writing coils (V77):", err);
  });

  // Клапан 4 (пара) - це analog output (holding register). Припустимо, адреса 0.
  // Значення 0-10000 для 0-100%.
  let steamValveModbusValue = Math.round(io_v77.valve4_Steam_percent * 100.0);
  client_v77.writeRegister(0, steamValveModbusValue, function (err) {
    if (err) console.error("Error writing register for V4 (V77):", err);
  });
}

// Обробка помилок підключення (опціонально)
client_v77.on("error", function (err) {
  console.error("Modbus Client Error (V77): ", err);
  io_v77.msg = "MODBUS CLIENT ERROR!";
  // Тут можна спробувати перепідключитися або зупинити логіку
  // client_v77.close(setupModbusCommunication_v77); // спроба закрити та відкрити знову
});

console.log("Starting Modbus client for Variant 77...");
