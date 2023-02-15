import {getRandomNumber} from './util.js'

const MESSAGES = {
  1:'Всё отлично!',
  2:'В целом всё неплохо. Но не всё.',
  3:'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  4:'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  5:'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  6:'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
};

const NAMES = {
  1:'Artem',
  2:'Den',
  3:'Ivan',
  4:'Viktor',
  5:'Alexsey',
  6:'Alexsandr',
  7:'Venera'
};

const DESCRIPTIONS = {
  1: 'I am in the New York!',
  2: 'I am in the York',
  3: 'Hi mom!',
  4: 'Hi, daddy!',
};

let Photo = function (id, url, description, likes) {
  this.id = id;
  this.url = url;
  this.description = description;
  this.likes = likes;
};

let CommentPhoto = function (id, avatar, message, name) {
  this.id = id;
  this.avatar = avatar;
  this.message = message;
  this.name = name;
};

let randomComments = () => {
  let id = getRandomNumber(1, 100);
  let avatar = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  let message = MESSAGES[getRandomNumber(1, 6)];
  let name = NAMES[getRandomNumber(1, 7)];
  return new CommentPhoto(id, avatar, message, name);
};

let photos = [];

let randomPhoto = () => {
  for (let i = 0; i <= 24 ; i++) {
    let id = i + 1;
    let url = `photos/${id}.jpg`;
    let description = DESCRIPTIONS[getRandomNumber(1, 4)];
    let likes = getRandomNumber(15, 200);
    let comments = [];
    let numberComments = getRandomNumber(0,7);
    for (let j = 0; j <= numberComments; j++) {
      comments[j] = randomComments();
    }
    photos[i] = new Photo(id, url, description, likes);
    photos[i].comments = comments;
  }
};

randomPhoto();
export {photos};
