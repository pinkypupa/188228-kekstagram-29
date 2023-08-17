/* eslint-disable no-console */

import { getRandomInteger, getUniqId, getRandomElement } from './util.js';
import {PHOTOCOUNT, FROMLIKES, TOLIKES, COMMENTCOUNT, descriptionSet, commentMessageSet, commentUserNames} from './userData.js';

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

export { photoDescriptionArray };
