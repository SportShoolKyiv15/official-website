// const mqtt = require("mqtt");
// const modbusModule = require("./modbusmodule.js");
// const client = mqtt.connect("mqtt://industrial.api.ubidots.com", {
//   username: "BBUS-GqSRE5Jx91bd3RmmGZMwbf4e4350z0",
// });
// let msg;
// client.on("connect", function () {
//   client.subscribe("/v1.6/devices/plant/cmdstart/lv", function (err) {
//     console.log("Subscribed to cmdstart");
//   });
//   client.subscribe("/v1.6/devices/plant/cmdstop/lv", function (err) {
//     console.log("Subscribed to cmdstop");
//   });
//   setInterval(function () {
//     modbusModule.logic();
//     modbusModule.io.tstep++;
//     if (modbusModule.io.msg.startsWith("Holding")) {
//       modbusModule.updateCounter();
//     }
//     msg = {
//       pe1: {
//         value: modbusModule.io.pe1,
//         context: { msg: modbusModule.io.msg },
//       },
//       pv4: modbusModule.io.pv4,
//       tstep: modbusModule.io.tstep,
//       ls1lo: modbusModule.io.ls1Lo ? 1 : 0,
//       ls2hi: modbusModule.io.ls2Hi ? 1 : 0,
//     };
//     if (!msg.cmdStart) {
//       cmdstart = modbusModule.io.cmdstart;
//       cmdstop = modbusModule.io.cmdstop;
//     }
//     console.log(msg);
//     client.publish("/v1.6/devices/plant", JSON.stringify(msg));
//   }, 5000);
// });

// client.on("message", function (topic, message) {
//   let varname = topic.split("/")[4];
//   modbusModule.io[varname] = message;
//   console.log(varname + " " + message);
// });
