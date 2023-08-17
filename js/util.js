/* eslint-disable no-console */

// Функция для получения случайного числа из диапазона a, b
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для получения массива неповторяющихся случайных чисел в диапазоне до count
function getUniqId(countFrom, countTo) {
  const previousValues = [];

  return function () {
    let ident = getRandomInteger(countFrom, countTo);
    if (previousValues.length >= (countTo - countFrom + 1)) {
      console.error('Все числа уже перебраны и сохранены в массив предыдущих значений');
      return null;
    }
    while (previousValues.includes(ident)) {
      ident = getRandomInteger(countFrom, countTo);
    }
    previousValues.push(ident);
    return ident;
  };
}

// Функция для получения случайного элемента из массива arr
const getRandomElement = function (arr) {
  return arr[getRandomInteger(0, arr.length - 1)];
};

export {getRandomInteger, getUniqId, getRandomElement};
