import { DESCRIPTIONS } from './data.js';

import {
  getRandomInt,
  getRandomArrayElement
} from './util.js';

import { createComment } from './comments.js';

const PHOTO_COUNT = 25;

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: Array.from(
    { length: getRandomInt(0, 30) },
    createComment
  ),
});

const createPhotos = () =>
  Array.from(
    { length: PHOTO_COUNT },
    (_, index) => createPhoto(index + 1)
  );

export { createPhotos };
