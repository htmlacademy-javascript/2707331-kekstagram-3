import './form.js';
import { renderPictures } from './pictures.js';
import { getData } from './api.js';
import { showDataError } from './data-error.js';

getData()
  .then((photos) => {
    renderPictures(photos);
  })
  .catch(() => {
    showDataError();
  });
