const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');

const onUploadInputChange = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeUploadForm = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    const activeElement = document.activeElement;

    if (
      activeElement === document.querySelector('.text__hashtags') ||
      activeElement === document.querySelector('.text__description')
    ) {
      return;
    }

    closeUploadForm();
  }
};

uploadInput.addEventListener('change', onUploadInputChange);
closeButton.addEventListener('click', closeUploadForm);
document.addEventListener('keydown', onDocumentKeydown);
