// enum states {
//     idle,
//     load,
//     press,
//     waiting,
//     dwnld
// };

// let ioInfo = {
//     le1: DigitalPin.P13,
//     le2: DigitalPin.P14,
//     p1: AnalogPin.P0,
//     k1: DigitalPin.P8,
//     k2: DigitalPin.P9,
//     k3: DigitalPin.P16,
//     k4: AnalogPin.P1,
//     k5: DigitalPin.P8,
//     sb1: DigitalPin.P5,
//     sb2: DigitalPin.P11
// };

// let state = states.idle;
// let waitTime = 12 * 60 + 25 // 12 хв 25 сек у секундах;
// serial.writeLine('Program started');

// basic.forever(function () {
//     let sb1Strt = (pins.digitalReadPin(ioInfo.sb1) === 1) || input.buttonIsPressed(Button.A);
//     let sb2Stop = (pins.digitalReadPin(ioInfo.sb1) === 1) || input.buttonIsPressed(Button.B);
//     let le1Lo = pins.digitalReadPin(ioInfo.le1);
//     let le2Hi = pins.digitalReadPin(ioInfo.le2);
//     let p1 = pins.analogReadPin(ioInfo.p1);
//     switch (state) {
//         case states.idle:
//             pins.digitalWritePin(ioInfo.le1, 0);
//             pins.digitalWritePin(ioInfo.le2, 0);
//             pins.analogWritePin(ioInfo.p1, 0);
//             if (sb1Strt) {
//                 if (le1Lo === 1) {
//                     state = states.dwnld;
//                     serial.writeLine('Downloading');
//                 } else {
//                     state = states.load;
//                     serial.writeLine('Loading');
//                 }
//             };
//             break;
//         case states.load:
//             pins.digitalWritePin(ioInfo.k2, 1);
//             if (le2Hi) {
//                 state = states.presse;
//                 serial.writeLine('Pressing');
//             };
//             break;
//         case states.press:
//             pins.digitalWritePin(ioInfo.k2, 0);
//             pins.digitalWritePin(ioInfo.k3, 0);
//             pins.analogWritePin(ioInfo.k4, Math.round(1023 * 0.8));
//             if (p1 > 516) {
//                 state = states.waiting;
//                 serial.writeLine('Waiting');
//             };
//             break;
//         case states.waiting:
//             pins.analogWritePin(ioInfo.k4, 0);
//             basic.pause(waitTime);
//             serial.writeValue("waitTime", waitTime)
//             state = states.dwnld;
//             serial.writeLine('Downloading');
//             break;
//         case states.dwnld:
//             pins.digitalWritePin(ioInfo.k1, 1);
//             pins.digitalWritePin(ioInfo.k5, 1);
//             if (le1Lo === 0) {
//                 pins.digitalWritePin(ioInfo.k1, 0);
//                 pins.digitalWritePin(ioInfo.k5, 0);
//                 pins.digitalWritePin(ioInfo.k3, 1);
//                 if (sb2Stop) {
//                     state = states.idle;
//                     serial.writeLine('Program stopped');
//                 } else {
//                     state = states.load;
//                     serial.writeLine('Next cycle');
//                 }
//             } break
//         default:
//             state = states.idle;
//     }
//     basic.pause(200);
// })
