// let states = {
//   init: 0,
//   idle: 1,
//   load1: 2,
//   load2: 3,
//   hea1: 4,
//   hea2: 5,
//   dwnld: 6,
// };
// let state = states.idle;
// let io = {
//   msg: "",
//   tstep: 0,
//   sb1Strt: false,
//   sb2Stop: false,
//   ls1Lo: false,
//   ls2Mdl: false,
//   ls3Hi: false,
//   lvs1: false,
//   lvs2: false,
//   lvs3: false,
//   te1: 0.0,
//   tv1: 0.0,
//   cmdstart: 0,
//   cmdstop: 0,
// };
// let ModbusRTU = require("modbus-serial");
// let client = new ModbusRTU();
// client.connectTCP("192.168.0.101", { port: 502 }, task);
// function task() {
//   client.setID(1);
//   console.log("Task started");
//   setInterval(function () {
//     client.readInputRegisters(0, 1, function (err, data) {
//       io.te1 = data.data[0] * 0.01;
//       logic();
//     });
//   }, 500);
//   setInterval(function () {
//     client.readDiscreteInputs(0, 5, function (err, data) {
//       let bools = data.data;
//       io.sb1Strt = bools[0];
//       io.sb2Stop = bools[1];
//       io.ls1Lo = bools[2];
//       io.ls2Mdl = bools[3];
//       io.ls3Hi = bools[4];
//     });
//   }, 500);
//   setInterval(function () {
//     io.tstep++;
//     // console.log(io);
//   }, 1000);
// }

// function logic() {
//   switch (state) {
//     case states.idle:
//       io.lvs1 = false;
//       io.lvs2 = false;
//       io.lvs3 = false;
//       io.tv1 = 0.0;
//       io.msg = "idle";
//       if (io.sb1Strt === true || io.cmdstart > 0) {
//         if (io.ls1Lo === true) {
//           state = states.dwnld;
//           io.msg = "Downloading";
//           io.tstep = 0;
//         } else {
//           state = states.load1;
//           io.msg = "Loading 1";
//           io.tstep = 0;
//         }
//       }
//       break;
//     case states.load1:
//       io.lvs3 = false;
//       io.lvs1 = true;
//       if (io.ls2Mdl === true) {
//         state = states.load2;
//         io.msg = "Loading 2";
//         io.tstep = 0;
//       }
//       break;
//     case states.load2:
//       io.lvs1 = false;
//       io.lvs2 = true;
//       if (io.ls3Hi === true) {
//         state = states.hea1;
//         io.msg = "Heating1";
//         io.tstep = 0;
//       }
//       break;
//     case states.hea1:
//       io.lvs2 = false;
//       io.tv1 = 100.0;
//       if (io.te1 > 50.0) {
//         state = states.hea2;
//         io.msg = "Heating2";
//         io.tstep = 0;
//       }
//       break;
//     case states.hea2:
//       io.tv1 = 50.0;
//       if (io.te1 > 55.0) {
//         state = states.dwnld;
//         io.msg = "Downloading";
//         io.tstep = 0;
//       }
//       break;
//     case states.dwnld:
//       io.tv1 = 0.0;
//       io.lvs3 = true;
//       if (io.ls1Lo === false) {
//         if (io.sb2Stop || io.cmdstop > 0) {
//           state = states.idle;
//           io.msg = "Program stopped";
//           io.tstep = 0;
//         } else {
//           state = states.load1;
//           io.msg = "Next cycle: Loading1";
//           io.tstep = 0;
//         }
//       }
//       break;
//     default:
//       state = states.idle;
//   }
//   client.writeCoils(0, [io.lvs1, io.lvs2, io.lvs3]);
//   client.writeRegister(0, Math.round(io.tv1 * 100.0));
// }

// module.exports = io;
