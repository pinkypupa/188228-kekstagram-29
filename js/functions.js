// Функция проверки количества символов строки

let symbNum;

function stringLength(stringCheck, maxSymb) {
  symbNum = length(stringCheck);
  if (symbNum <= maxSymb) {
    return true;
  }
  return false;
}

stringLength();

// Функция проверки полиндрома

let textPrepared;
let textNew;
let symbAdd;

function reverseString(textToChange) {
  textToChange.replaceAll(' ', '');
  textToChange.toUpperCase();
  textPrepared = textToChange;
  textNew = '';
  for (let i = (length(textPrepared) - 1); i > 0; i--) {
    symbAdd = textPrepared[i];
    textNew = textNew + symbAdd;
  }
  return (textNew === textPrepared);
}

reverseString();
