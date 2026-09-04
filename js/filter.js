const RANDOM_PHOTOS_COUNT = 10;

const getRandomPhotos = (photos) => {
  const shuffledPhotos = [...photos].sort(() => Math.random() - 0.5);

  return shuffledPhotos.slice(0, RANDOM_PHOTOS_COUNT);
};

const getDiscussedPhotos = (photos) => [...photos].sort(
  (a, b) => b.comments.length - a.comments.length
);

export { getRandomPhotos, getDiscussedPhotos };
