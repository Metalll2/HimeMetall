let getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  } if(min > max) {
    [min, max] = [max, min];
  } return Math.floor(Math.random() * (max - min + 1)) + min;
};

let checkedLengthComments = (comments, size) => {
  return comments.length <= size;
};

const fetchData = (onSucces, onError) =>fetch('https://23.javascript.pages.academy/kekstagram/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  }
)
  .then((responce) => {
    if (responce.ok) {
      return responce.json();
    }
    throw new Error(`${responce.status} ${responce.statusText}`);
  })
  .then((json) => {
    onSucces(json);
  })
  .catch((err) => {
    onError(err);
  });

export { getRandomNumber, fetchData};