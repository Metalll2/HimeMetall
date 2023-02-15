import { sliderCreate, sliderEffect } from './slider.js';
import {hashTagInput, validationHashtags, form, validationForm} from './examination.js';


let buttonUploadImg = document.querySelector('#upload-file');
let buttonCloseImg = document.querySelector('#upload-cancel');
let buttonScaleBigger = document.querySelector('.scale__control--bigger');
let buttonScaleSmallerr = document.querySelector('.scale__control--smaller');
let scaleControlValue = document.querySelector('.scale__control--value');
let effectItems = document.querySelectorAll('.effects__item');
let prewValue = 'none';

let loadImg = () => {
  buttonUploadImg.addEventListener('change', function(){
  document.querySelector('body').classList.add('modal-open');
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  let standartScale = scaleControlValue.value.split('%');
  standartScale[0] = 100;
  scaleControlValue.value = standartScale[0] + '%';
  document.querySelector('.img-upload__preview > img').style.transform = `scale(${standartScale[0]/100})`;
  document.querySelector('.img-upload__preview > img').classList.add('effects__preview--none');
});
  buttonCloseImg.addEventListener('click', closeImg);
  document.addEventListener('keydown',isEscDown);
  buttonScaleBigger.addEventListener('click', scaleBigger);
  buttonScaleSmallerr.addEventListener('click', scaleSmaller);
  for(let i = 0; i < effectItems.length; i++){
    effectItems[i].addEventListener('click', effectsChoise);
  };
  sliderCreate();
  hashTagInput.addEventListener('input',validationHashtags);
  form.addEventListener('submit', validationForm);
};

let isEscDown = (evt) => {
  if(evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    evt.stopPropagation();
    closeImg();
  }
};

let closeImg = () => {
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('.img-upload__preview > img').classList.remove(`effects__preview--${prewValue}`);
  sliderEffect('none');
};

let scaleBigger = () => {
  let step = 25;
  let minScale = 25;
  let maxScale = 100;
  let value = scaleControlValue.value.split('%');

  if (Number(value[0]) >= minScale && Number(value[0]) < maxScale){
      value[0] = Number(value[0]) + step;
      if (Number(value[0]) > maxScale){
        value[0] = maxScale;
      };
      scaleControlValue.value = value[0]+'%';
  };

  document.querySelector('.img-upload__preview > img').style.transform = `scale(${value[0]/100})`;
};

let scaleSmaller = () => {
  let step = 25;
  let minScale = 25;
  let maxScale = 100;
  let value = scaleControlValue.value.split('%');

  if (Number(value[0]) >= minScale && Number(value[0]) <= maxScale){
      value[0] = Number(value[0])-step;
      if (Number(value[0]) < minScale){
        value[0] = minScale;
      };
      scaleControlValue.value = value[0] + '%';
  };

  document.querySelector('.img-upload__preview > img').style.transform = `scale(${value[0]/100})`;
};
let effectItem = (effect) =>{
  let input = effect.querySelector('input');
  let imgUpload = document.querySelector('.img-upload__preview > img');
  imgUpload.classList.remove(`effects__preview--${prewValue}`);
  imgUpload.classList.add(`effects__preview--${input.value}`);
  prewValue = input.value;
  sliderEffect(input.value);
};

let effectsChoise = () => {
  for (let i = 0; i < effectItems.length; i++){
      if(effectItems[i].querySelector('input').checked){
        effectItems[i].querySelector('input').addEventListener('click', effectItem(effectItems[i]));
        }
      }
};


export {loadImg , closeImg};
