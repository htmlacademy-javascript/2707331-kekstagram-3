import { renderPictures } from './pictures.js';

import {
  DESCRIPTIONS,
  POSITIVE_MESSAGES,
  NEGATIVE_MESSAGES,
  NAMES
} from './data.js';

import {
  getRandomInt,
  getRandomArrayElement
} from './util.js';

const PHOTO_COUNT = 25;

const createMessage = () => {
  const messages = Math.random() < 0.5
    ? POSITIVE_MESSAGES
    : NEGATIVE_MESSAGES;

  const firstMessage = getRandomArrayElement(messages);

  if (Math.random() < 0.5) {
    return firstMessage;
  }

  const secondMessage = getRandomArrayElement(
    messages.filter((message) => message !== firstMessage)
  );

  return `${firstMessage} ${secondMessage}`;
};

let commentId = 1;

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

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

const photos = Array.from(
  { length: PHOTO_COUNT },
  (_, index) => createPhoto(index + 1)
);

renderPictures(photos);
