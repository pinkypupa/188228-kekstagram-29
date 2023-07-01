// Функция проверки количества символов строки

const checkString = function (someData, symbols) {
  if (typeof someData === 'string') {
    return (someData.length <= symbols);
  }
  else console.log('Входные данные не являются строкой!');
}

checkString('Лягушька', 4);


// Функция проверки полиндрома

function reverseString(textToChange) {
  let symbAdd;

  const textPrepared = textToChange.replaceAll(' ', '').toUpperCase();
  let textNew = '';
  for (let i = (textPrepared.length - 1); i >= 0; i--) {
    symbAdd = textPrepared[i];
    textNew += symbAdd;
  }
  return (textNew === textPrepared);
}

reverseString('У О О оо у ');

// Функция получения положительного числа

const getNumber = function (anyString) {
  let resultNumber = '';
  if (typeof anyString !== 'string') {
    anyString = anyString.toString();
  }
  for (let i = 0; i < anyString.length; i++) {
    const newNumber = parseInt(anyString[i], 10);
    if (!Number.isNaN(newNumber)) {
      resultNumber += newNumber;
    }
  }
  let finalResults = parseInt(resultNumber, 10);
  finalResults = Number.isNaN(finalResults) ? console.log('NaN') : console.log('Итоговое число из строки: ' + finalResults);
};

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);
