import './form.js';
import { renderPictures } from './pictures.js';
import { initFilters } from './filter.js';
import { getData } from './api.js';
import { showDataError } from './data-error.js';

const imgFilters = document.querySelector('.img-filters');

getData()
  .then((photos) => {
    renderPictures(photos);
    imgFilters.classList.remove('img-filters--inactive');
    initFilters(photos);
  })
  .catch(() => {
    showDataError();
  });
