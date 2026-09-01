import './form.js';
import { renderPictures } from './pictures.js';
import { getData } from './api.js';

getData()
  .then((photos) => {
    renderPictures(photos);
  });
