import {renderError, renderSuccess} from './sample.js'
import {closeImg} from './uploadImg.js'
let hashTagInput = document.querySelector('.text__hashtags');
let form = document.querySelector('.img-upload__form');

let validationHashtags = () =>{

    hashTagInput.setCustomValidity(' ');

    let text = hashTagInput.value.toLowerCase().trim();
    let words = text.split(/\s+/);

    let findSymbols = /[^0-9a-z# *]/.test(text);
    if (findSymbols){
        hashTagInput.setCustomValidity("Хеш-тег состоит только из букв и цифр!")
    }

    let isFirstHashTag = words.some((item) => {
        return item[0] !== '#';
    });

    if(isFirstHashTag) {
        hashTagInput.setCustomValidity("Хеш-тег начинается с #.");
    }

    let isOnlyHashTag = words.some((item) => {
        return item === '#';
    });

    if(isOnlyHashTag){
        hashTagInput.setCustomValidity('Хеш-тег не может состоять только из #.')
    }

    let isHashTagsSpace = words.some((item) =>{
        return item.indexOf('#', 1) >= 1;
    });

    if (isHashTagsSpace){
        hashTagInput.setCustomValidity('Хеш-теги должны разделяться пробелами.')
    }

    let isHashTageRepeat = words.some((item, i, arr) => {
        return arr.indexOf(item, i + 1) >= i + 1; 
    });

    if(isHashTageRepeat){
        hashTagInput.setCustomValidity('Хеш-тег повторяется!');
    }

    let isHashTags = () => {
        let n = 1;
        for (let i = 0 ; i < words.length; i++) {
            if (words[i].includes('#')){
                n++;
            } 
            if (n > 6){
                hashTagInput.setCustomValidity("Хеш-тегов не может быть больше 5!")
            } 
        }
    };
    isHashTags();
    hashTagInput.addEventListener('keydown', (evt)=>{
        if(evt.key === 'Escape' || evt.key === 'Esc') {
            evt.preventDefault();
            evt.stopPropagation();
            hashTagInput.value = "";
            hashTagInput.blur();
        }   
    });
};

const validationForm = (evt) =>{
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch('https://23.javascript.pages.academy/kekstagram',{
        method: 'POST',
        body: formData,
    },)
    .then((response) => {
        if (response.ok){
            console.log(response.ok);
            renderSuccess();
            closeImg();
        } else {(
            renderError('Фотография не загрузилась!', 'ОК'),
            closeImg()); 
        }
    })
    .catch(() => {
        renderError('Фотография не загрузилась!', 'ОК')
        closeImg();
    }) 
};

export {validationHashtags, hashTagInput, validationForm, form};