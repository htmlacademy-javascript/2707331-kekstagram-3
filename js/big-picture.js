const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const shownCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const totalCommentsCount = bigPicture.querySelector('.social__comment-total-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const caption = bigPicture.querySelector('.social__caption');
const commentItem = bigPicture.querySelector('.social__comment');

const closeButton = bigPicture.querySelector('.big-picture__cancel');

const renderComments = (comments) => {
  commentsContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();

  comments.forEach(({ avatar, name, message }) => {
    const comment = commentItem.cloneNode(true);

    const commentAvatar = comment.querySelector('.social__picture');
    const commentText = comment.querySelector('.social__text');

    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentText.textContent = message;

    fragment.append(comment);
  });

  commentsContainer.append(fragment);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');

  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentEscapeKeydown);
};

function onDocumentEscapeKeydown(evt) {
  if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    closeBigPicture();
  }
}

const openBigPicture = (picture) => {
  document.addEventListener('keydown', onDocumentEscapeKeydown);

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

closeButton.addEventListener('click', closeBigPicture);

export { openBigPicture };
