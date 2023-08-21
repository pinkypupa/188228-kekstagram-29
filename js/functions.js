/* eslint-disable no-console */
/* eslint-disable indent */
// /* eslint-disable no-console */
// // Функция проверки количества символов строки

// const checkString = function (someData, symbols) {
//   if (typeof someData === 'string') {
//     return (someData.length <= symbols);
//   } else {
//     console.log('Входные данные не являются строкой!');
//   }
// };

// checkString('Лягушька', 4);


// // Функция проверки полиндрома

// function reverseString(textToChange) {
//   let symbAdd;

//   const textPrepared = textToChange.replaceAll(' ', '').toUpperCase();
//   let textNew = '';
//   for (let i = (textPrepared.length - 1); i >= 0; i--) {
//     symbAdd = textPrepared[i];
//     textNew += symbAdd;
//   }
//   return (textNew === textPrepared);
// }

// reverseString('У О О оо у ');

// // Функция получения положительного числа

// const getNumber = function (anyString) {
//   let resultNumber = '';
//   if (typeof anyString !== 'string') {
//     anyString = anyString.toString();
//   }
//   for (let i = 0; i < anyString.length; i++) {
//     const newNumber = parseInt(anyString[i], 10);
//     if (!Number.isNaN(newNumber)) {
//       resultNumber += newNumber;
//     }
//   }
//   let finalResults = parseInt(resultNumber, 10);
//   // eslint-disable-next-line no-unused-vars
//   finalResults = Number.isNaN(finalResults) ? console.log('NaN') : console.log(`Итоговое число из строки: ${finalResults}`);
// };

// getNumber('2023 год');
// getNumber('ECMAScript 2022');
// getNumber('1 кефир, 0.5 батона');
// getNumber('агент 007');
// getNumber('а я томат');
// getNumber(2023);
// getNumber(-1);
// getNumber(1.5);


// функция для проверки рабочего времени (модуль 5, ч2)
// привести всё к минутам или часам, смотря что проще. потом проверять, после сложения число находится
// в диапазоне или нет. надо написать функцию, которая выделить часть до двоеточия и после?
// 08:15

// 08:15
// 01234 ну допустим мы получили индекс 2. что потом? в цикле перебрать

const getHour = function (anyTime) {
  return anyTime.split(':');
};

const checkMeetingTime = function (startTime, endTime, meetingStart, duration) {
  const startTimeArray = getHour(startTime);
  const hoursStart = startTimeArray[0];
  const minutesStart = +startTimeArray[1] + (+hoursStart * 60);
  // console.log('начало рабочего дня в минутах: ' + minutesStart);
  const endTimeArray = getHour(endTime);
  const hoursEnd = endTimeArray[0];
  const minutesEnd = +endTimeArray[1] + (+hoursEnd * 60);
  // console.log('конец рабочего дня в минутах: ' + minutesEnd);
  const meetingStartArray = getHour(meetingStart);
  const hoursMeeting = meetingStartArray[0];
  const minutesMeetingStart = +meetingStartArray[1] + (+hoursMeeting * 60);
  // console.log('начало совещания в минутах: ' + minutesMeetingStart);
  const endingMeeting = minutesMeetingStart + duration;
  // console.log('конец совещания в минутах:' + endingMeeting);
  if (minutesMeetingStart >= minutesStart && endingMeeting <= minutesEnd) {
    return true;
  } else {
    return false;
  }
};

console.log(checkMeetingTime('08:00', '14:30', '14:00', 90));
console.log(checkMeetingTime('14:00', '17:30', '08:0', 90));
console.log(checkMeetingTime('8:00', '17:30', '08:00', 900));


