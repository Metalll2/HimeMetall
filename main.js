import { renderPhoto, renderError } from './sample.js';
import { loadImg } from './uploadImg.js';

fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((responce) => responce.json())
    .then((photos) => {
        renderPhoto(photos)})
    .catch(() => {
        renderError('Ошибка при загрузке данных!', 'ок');
    })
loadImg();

