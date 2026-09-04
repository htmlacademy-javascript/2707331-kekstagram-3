export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomArrayElement = (elements) =>
  elements[getRandomInt(0, elements.length - 1)];

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...rest);
    }, timeoutDelay);
  };
};
