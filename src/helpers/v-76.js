let seconds = 630;
let counter = seconds;
let states = {
  init: 0,
  idle: 1,
  load1: 2,
  load2: 3,
  mix: 4,
  dwnld: 5,
};
let state = states.idle;
let io = {
  msg: "",
  tstep: 0,
  sb1Strt: false,
  sb2Stop: false,
  ls1Lo: false,
  ls2Mdl: false,
  ls3Hi: false,
  lvs1: false,
  lvs2: 0.0,
  lvs3: false,
  mixr: false,
};
let ModbusRTU = require("modbus-serial");

let client = new ModbusRTU();

client.connectTCP("192.168.0.101", { port: 502 }, task);

function task() {
  client.setID(1);
  setInterval(function () {
    client.readInputRegisters(0, 1, function (err, data) {
      io.lvs2 = data.data[0] * 0.01;
      logic();
    });
  }, 500);
  setInterval(function () {
    client.readDiscreteInputs(0, 5, function (err, data) {
      let bools = data.data;
      io.sb1Strt = bools[0];
      io.sb2Stop = bools[1];
      io.ls1Lo = bools[2];
      io.ls2Mdl = bools[3];
      io.ls3Hi = bools[4];
    });
  }, 500);
  setInterval(function () {
    io.tstep++;
    console.log(io);
  }, 1000);
}

function logic() {
  switch (state) {
    case states.idle:
      io.lvs1 = false;
      io.lvs3 = false;
      io.lvs2 = 0.0;
      io.msg = "idle";
      if (io.sb1Strt === true) {
        if (io.ls1Lo === true) {
          state = states.dwnld;
          io.msg = "Downloading";
          io.tstep = 0;
        } else {
          state = states.load1;
          io.msg = "Loading 1";
          io.tstep = 0;
        }
      }
      break;
    case states.load1:
      io.lvs3 = false;
      io.lvs1 = true;
      if (io.ls2Mdl === true) {
        state = states.load2;
        io.msg = "Loading 2";
        io.tstep = 0;
      }
      break;
    case states.load2:
      io.lvs1 = false;
      io.lvs2 = 0.6;
      if (io.ls3Hi === true) {
        state = states.mix;
        io.msg = "Mixing";
        io.tstep = 0;
      }
      break;
    case states.mix:
      io.lvs2 = 0.0;
      io.mixr = true;
      io.msg =
        "Mixer turned ON for " +
        seconds +
        " seconds; Left " +
        counter +
        " seconds";
      counter--;
      if (counter <= 0) {
        io.msg = "Mixer OFF; Downloading";
        state = states.dwnld;
        io.tstep = 0;
      }
      break;
    case states.dwnld:
      io.mixr = true;
      io.lvs3 = true;
      if (io.ls1Lo === false) {
        if (io.sb2Stop) {
          state = states.idle;
          io.msg = "Program stopped";
          io.tstep = 0;
        } else {
          state = states.load1;
          io.msg = "Next cycle: Loading1";
          io.tstep = 0;
        }
      }
      break;
    default:
      state = states.idle;
  }
  client.writeCoils(0, [io.lvs1, io.lvs2, io.lvs3]);
  client.writeRegister(0, Math.round(io.lvs2 * 100.0));
}
