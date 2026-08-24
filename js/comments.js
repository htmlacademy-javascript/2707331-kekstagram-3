import {
  POSITIVE_MESSAGES,
  NEGATIVE_MESSAGES,
  NAMES
} from './data.js';

import {
  getRandomInt,
  getRandomArrayElement
} from './util.js';

let commentId = 1;

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

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

export { createComment };
