// let states = {
//   init: 0,
//   idle: 1,
//   load: 2,
//   press: 4,
//   hold: 5,
//   dwnld: 6,
// };
// let state = states.idle;
// let io = {
//   msg: "",
//   tstep: 0,
//   sb1Strt: false,
//   sb2Stop: false,
//   ls1Lo: false,
//   ls2Hi: false,
//   lvs1: false,
//   lvs2: false,
//   lvs3: false,
//   lvs5: true,
//   pe1: 0.0,
//   pv4: 0.0,
//   cmdstart: 0,
//   cmdstop: 0,
// };
// const seconds = 745;
// let counter;
// let ModbusRTU = require("modbus-serial");
// let client = new ModbusRTU();

// function connectModbus() {
//   client.connectTCP("192.168.0.101", { port: 502 }, task);
// }

// function task() {
//   client.setID(1);
//   console.log("Task started");
//   setInterval(function () {
//     client.readInputRegisters(0, 1, function (err, data) {
//       io.pe1 = (data.data[0] / 10000) * 0.25;
//       // logic();
//     });
//   }, 250);
//   setInterval(function () {
//     client.readDiscreteInputs(0, 4, function (err, data) {
//       let bools = data.data;
//       io.sb1Strt = bools[0];
//       io.sb2Stop = bools[1];
//       io.ls1Lo = bools[2];
//       io.ls2Hi = bools[3];
//     });
//   }, 250);
//   setInterval(function () {
//     io.tstep++;
//     // console.log(io);
//   }, 500);
// }

// function logic() {
//   switch (state) {
//     case states.idle:
//       lvs1 = false;
//       lvs2 = false;
//       lvs3 = false;
//       lvs5 = true;
//       pv4 = 0.0;
//       io.msg = "idle";
//       if (io.sb1Strt === true || io.cmdstart > 0) {
//         if (io.ls1Lo === true) {
//           state = states.dwnld;
//           io.msg = "Downloading";
//           io.tstep = 0;
//         } else {
//           state = states.load;
//           io.msg = "Loading";
//           io.tstep = 0;
//         }
//       }
//       break;
//     case states.load:
//       counter = seconds;
//       io.lvs2 = true;
//       if (io.ls2Hi === true) {
//         state = states.press;
//         io.msg = "Pressurizing";
//         io.tstep = 0;
//       }
//       break;
//     case states.press:
//       io.lvs5 = false;
//       io.lvs2 = false;
//       io.pv4 = 80.0;
//       if (io.pe1 > 0.12) {
//         state = states.hold;
//       }
//       break;
//     case states.hold:
//       io.pv4 = 0.0;
//       io.msg =
//         "Holding started for " +
//         seconds +
//         " seconds; Left " +
//         counter +
//         " seconds";
//       // counter--;
//       if (counter <= 0) {
//         state = states.dwnld;
//         io.msg = "Downloading";
//         io.tstep = 0;
//       }
//       break;
//     case states.dwnld:
//       io.lvs3 = true;
//       if (io.ls1Lo === false) {
//         io.lvs1 = false;
//         io.lvs3 = false;
//         io.lvs5 = true;
//         if (io.sb2Stop || io.cmdstop > 0) {
//           state = states.idle;
//           io.msg = "Program stopped";
//           io.tstep = 0;
//         } else {
//           state = states.load;
//           io.msg = "Next cycle: Loading";
//           io.tstep = 0;
//         }
//       }
//       break;
//     default:
//       state = states.idle;
//   }
//   client.writeCoils(0, [io.lvs1, io.lvs2, io.lvs3, io.lvs5]);
//   client.writeRegister(0, Math.round(io.pv4 * 100.0));
// }

// function updateCounter() {
//   if (state === states.hold && counter > 0) {
//     counter--;
//     io.msg = `Holding started for ${seconds} seconds; Left ${counter} seconds`;
//   }
// }

// connectModbus();

// module.exports = { io, updateCounter, logic };
