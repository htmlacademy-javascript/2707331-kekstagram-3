export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomArrayElement = (elements) =>
  elements[getRandomInt(0, elements.length - 1)];
