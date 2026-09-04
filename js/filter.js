import { renderPictures, clearPictures } from './pictures.js';

const RANDOM_PHOTOS_COUNT = 10;

const defaultFilterButton = document.querySelector('#filter-default');
const randomFilterButton = document.querySelector('#filter-random');
const discussedFilterButton = document.querySelector('#filter-discussed');

const setActiveFilter = (button) => {
  document
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');

  button.classList.add('img-filters__button--active');
};

const getRandomPhotos = (photos) => {
  const shuffledPhotos = [...photos].sort(() => Math.random() - 0.5);

  return shuffledPhotos.slice(0, RANDOM_PHOTOS_COUNT);
};

const getDiscussedPhotos = (photos) => [...photos].sort(
  (a, b) => b.comments.length - a.comments.length
);

const initFilters = (photos) => {
  defaultFilterButton.addEventListener('click', () => {
    setActiveFilter(defaultFilterButton);
    clearPictures();
    renderPictures(photos);
  });

  randomFilterButton.addEventListener('click', () => {
    setActiveFilter(randomFilterButton);
    clearPictures();
    renderPictures(getRandomPhotos(photos));
  });

  discussedFilterButton.addEventListener('click', () => {
    setActiveFilter(discussedFilterButton);
    clearPictures();
    renderPictures(getDiscussedPhotos(photos));
  });
};

export { getRandomPhotos, getDiscussedPhotos, initFilters };
