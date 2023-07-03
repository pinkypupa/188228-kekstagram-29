/* eslint-disable no-console */

// Перечислим константы
const PHOTOCOUNT = 25;
const FROMLIKES = 15;
const TOLIKES = 200;
const COMMENTCOUNT = 30;

// Объявим все массивы и входные данные
const descriptionSet = [
  'Моя новая лошадка', 'Гостил у бабушки на даче', 'Прекрасное лето', 'Я на море',
  'Смотрите какая классная фотка', 'Брат сказал, что я плохой фотограф',
  'Вот купила новое полотенце, зацените', 'У меня новая причёска', 'Поехали в лес за грибами',
  'Урожай в этом году отличный!', 'Иду на работу', 'Всем доброе утро', 'Переезжаю в новую квартиру',
  'Кому ещё нравится крыжовник?', 'Это мой любимый фильм!', 'Фотография для памяти',
  'Здесь пробегала ящерица', 'Это мой самый любимый питомец', 'Дети разнесли всю квартиру, вот фото',
  'Смотрите какой у меня красивый новый купальник', 'Приготовила блины, нямням',
  'Купили новую машину!', 'Я в Тибете', 'Мой любимый супчик', 'Фото без описания. Просто красиво',
];

const commentMessageSet = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentUserNames = [
  'Василий', 'Олег', 'Михаил', 'Надежда Петровна', 'Люда', 'Александр Третий',
  'Степан', 'Нина', 'Соник', 'Саб-зиро', 'Пётр', 'Алексей Алексеевич',
  'Кристина', 'Паша', 'Азамат', 'Элина', 'Анастасия', 'Курт Кобейн', 'Михаил Джекович', 'Любовь Игоревна',
  'Лана Банана', 'Вера', 'Ева', 'Смирнов Анатолий Владимирович', 'Владик',
];


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

// Получаем message в количестве от 1 до 2х
const messageFunc = function () {
  const messageElement = [];
  for (let i = 0; i <= getRandomInteger(0, 1); i++) {
    messageElement[i] = getRandomElement(commentMessageSet);
  }
  return messageElement.join(' ');
};

// Функция для создания объекта-комментария
const createComment = () => ({
  id: getUniqId(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: messageFunc(),
  name: getRandomElement(commentUserNames),
});

const uniqId = getUniqId(1, PHOTOCOUNT);
const uniqUrl = getUniqId(1, PHOTOCOUNT);

// Функция для создания объекта - описания фотографии
const createPhotoDescription = () => {
  const descriptionId = uniqId(1, PHOTOCOUNT);
  const descriptionUrl = uniqUrl(1, PHOTOCOUNT);
  return {
    id: descriptionId,
    url: `photos/${descriptionUrl}.jpg`,
    description: getRandomElement(descriptionSet),
    likes: getRandomInteger(FROMLIKES, TOLIKES),
    comments: Array.from({ length: getRandomInteger(0, COMMENTCOUNT) }, createComment),
  };
};

// Создание массива объектов в количестве photoCount
const photoDescriptionArray = () => Array.from({ length: PHOTOCOUNT }, createPhotoDescription);

console.log(photoDescriptionArray());
