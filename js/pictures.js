// import { photoDescriptionArray } from './data.js';
// import { PHOTOCOUNT } from './userData.js';
// const photoArray = photoDescriptionArray();

// это шаблон в документе html
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// создаём фрагмент, куда будем добавлять изображения с помощью append

const picturesContainer = document.querySelector('.pictures');

//может тут и не нужна функция
// const createPictures = function () {

//заменить на photocount из userdata
// for (let i = 0; i <= PHOTOCOUNT; i++) {
//   const elementOfArray = photoArray[i];

//   //создаём копию шаблона каждый раз для нового объекта
//   const picture = pictureTemplate.cloneNode(true);
//   const comments = picture.querySelector('.picture__comments');
//   const likes = picture.querySelector('.picture__likes');

//   //находим img в копии шаблона
//   const pictureImg = picture.querySelector('.picture__img');
//   pictureImg.src = elementOfArray.url;
//   pictureImg.alt = photoArray[i].description;

//   // добавляем лайки и комменты
//   comments.textContent = photoArray[i].comments.length;
//   likes.textContent = photoArray[i].likes;

//   //добавляем каждый объект фотографии во фрагмент
//   pictureListFragment.append(picture);
// }
// };
// const pictureListFragment = document.createDocumentFragment();

const createPhotoBlock = function (photoBlock) {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = photoBlock.url;
  picture.querySelector('.picture__img').alt = photoBlock.description;
  picture.querySelector('.picture__comments').textContent = photoBlock.comments.length;
  picture.querySelector('.picture__likes').textContent = photoBlock.likes;

  //добавляем каждый объект фотографии во фрагмент
  // pictureListFragment.append(picture);

  return picture;
};

// здесь мы создаём фрагмент и добавляем в контейнер в функции, чтобы экспортировать функцию
// это важно для того, чтобы мы могли её переиспользовать множество раз. иначе был бы 1 фрагмент
// с определённым наполнением
const createPictures = (pictureData) => {
  const pictureListFragment = document.createDocumentFragment();

  pictureData.forEach((elementOfArray) => {
    const picture = createPhotoBlock(elementOfArray);
    // добавляем каждый объект фотографии во фрагмент
    pictureListFragment.append(picture);
  });

  picturesContainer.append(pictureListFragment);
};


export { createPictures };

