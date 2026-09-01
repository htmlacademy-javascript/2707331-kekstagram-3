import './form.js';
import { renderPictures } from './pictures.js';
import { getData } from './api.js';

const dataErrorTemplate = document
  .querySelector('#data-error')
  .content
  .querySelector('.data-error');

const showDataError = () => {
  const dataError = dataErrorTemplate.cloneNode(true);

  document.body.append(dataError);

  setTimeout(() => {
    dataError.remove();
  }, 5000);
};

getData()
  .then((photos) => {
    renderPictures(photos);
  })
  .catch(() => {
    showDataError();
  });
