let bigpicture = document.querySelector('.big-picture');
let socialComments = document.querySelector('.social__comments');

let socialComment = socialComments.querySelector('.social__comment');
let closeButton = bigpicture.querySelector('.big-picture__cancel');

let openPhoto = (arr) => {
    document.querySelector('body').classList.add('modal-open');
    bigpicture.querySelector('img').src = arr.url;
    bigpicture.querySelector('.likes-count').textContent  = arr.likes;
    bigpicture.querySelector('.comments-count').textContent = arr.comments.length;
    bigpicture.querySelector('.social__caption').textContent = arr.description;
    bigpicture.querySelector('.social__comment-count').classList.add('hidden');
    bigpicture.querySelector('.comments-loader').classList.add('hidden');
    renderComments(arr.comments);
    bigpicture.classList.remove('hidden');
    closeButton.addEventListener('click', closePhoto);
    document.addEventListener('keydown', isEscDown);
}
let renderComent = (comment) => {
  let commentPicture = socialComment.cloneNode(true);
  socialComment.querySelector('.social__picture').src = comment.avatar;
  socialComment.querySelector('.social__picture').alt = comment.name;
  socialComment.querySelector('.social__text').textContent = comment.message;
  return commentPicture;
};

let renderComments = (comments) => {
  socialComments.innerHTML = '';
  let commentDocumentFragment = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++){
      commentDocumentFragment.append(renderComent(comments[i]));
  }
  socialComments.append(commentDocumentFragment);
};

let closePhoto = () => {
  document.querySelector('body').classList.remove('modal-open');
  bigpicture.classList.add('hidden');
  bigpicture.querySelector('.social__comment-count').classList.remove('hidden');
  bigpicture.querySelector('.comments-loader').classList.remove('hidden');
  closeButton.removeEventListener('click', closePhoto);
  document.removeEventListener('keydown', isEscDown);
};

let isEscDown = (evt) => {
  if(evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closePhoto();
  }
};



export {openPhoto};
