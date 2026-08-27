const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const shownCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const totalCommentsCount = bigPicture.querySelector('.social__comment-total-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const caption = bigPicture.querySelector('.social__caption');

const closeButton = bigPicture.querySelector('.big-picture__cancel');

const renderComments = (comments) => {
  commentsContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();

  comments.forEach(({ avatar, name, message }) => {
    const comment = document.createElement('li');

    comment.classList.add('social__comment');

    comment.innerHTML = `
      <img
        class="social__picture"
        src="${avatar}"
        alt="${name}"
        width="35"
        height="35">
      <p class="social__text">${message}</p>
    `;

    fragment.append(comment);
  });

  commentsContainer.append(fragment);
};

const openBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');

  document.body.classList.add('modal-open');

  bigPictureImage.src = picture.url;
  likesCount.textContent = picture.likes;

  shownCommentsCount.textContent = picture.comments.length;
  totalCommentsCount.textContent = picture.comments.length;

  caption.textContent = picture.description;

  renderComments(picture.comments);

  bigPicture
    .querySelector('.social__comment-count')
    .classList.add('hidden');

  bigPicture
    .querySelector('.comments-loader')
    .classList.add('hidden');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');

  document.body.classList.remove('modal-open');
};

closeButton.addEventListener('click', closeBigPicture);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    closeBigPicture();
  }
});

export { openBigPicture };
