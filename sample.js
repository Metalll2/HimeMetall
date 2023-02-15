import {openPhoto} from './bigpicture.js';

const picture = document.querySelector('#picture').content;
const hrefPicture = picture.querySelector('.picture');
const albom = document.querySelector('.pictures');
const error = document.querySelector('#error').content;
const errorDiv = error.querySelector('.error');
const succsess = document.querySelector('#success').content;
const succsessDiv = succsess.querySelector('.success');

const addPhoto = (arr) => {
  const pathImg = hrefPicture.querySelector('.picture__img');
  pathImg.src = arr.url;
  const pictureLikes = hrefPicture.querySelector('.picture__likes');
  pictureLikes.textContent = arr.likes;
  const pictureComments = hrefPicture.querySelector('.picture__comments');
  pictureComments.textContent = arr.comments.length;
  const picture = hrefPicture.cloneNode(true);
  picture.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPhoto(arr);
  });

  return picture;
};

const renderPhoto = (photos) => {
  const pictureDocumentFragment = document.createDocumentFragment();
  for (let i = 0; i < photos.length; i++) {
    pictureDocumentFragment.append(addPhoto(photos[i]));
   };
  albom.append(pictureDocumentFragment);
};

const renderError = (text, buttonText) =>{
  const err = document.createDocumentFragment();
  errorDiv.querySelector('.error__title').textContent = `${text}`;
  errorDiv.querySelector('.error__button').textContent = `${buttonText}`;
  err.append(errorDiv);
  errorDiv.querySelector('.error__button').addEventListener('click', (evt)=>{
    evt.preventDefault();
    document.querySelector('body').classList.remove('modal-open');
    errorDiv.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      document.querySelector('body').classList.remove('modal-open');
      errorDiv.remove();
    };
  });
  document.querySelector('body').append(err);
  document.querySelector('body').classList.add('modal-open');
}

const renderSuccess = () =>{
  const succes = document.createDocumentFragment();
  succes.append(succsessDiv);
  succsessDiv.querySelector('.success__button').addEventListener('click', (evt)=>{
    evt.preventDefault();
    document.querySelector('body').classList.remove('modal-open');
    succsessDiv.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      document.querySelector('body').classList.remove('modal-open');
      succsessDiv.remove();
    };
  });
  document.querySelector('body').append(succes);
  document.querySelector('body').classList.add('modal-open');
}
export {renderPhoto, renderError, renderSuccess};
