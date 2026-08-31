const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

const onScaleChange = (value) => {
  scaleValue.value = `${value}%`;
  previewImage.style.transform = `scale(${value / 100})`;
};

const resetScale = () => {
  onScaleChange(MAX_SCALE);
};

const onScaleSmallerButtonClick = () => {
  const currentScale = parseInt(scaleValue.value, 10);
  const newScale = Math.max(currentScale - SCALE_STEP, MIN_SCALE);

  onScaleChange(newScale);
};

const onScaleBiggerButtonClick = () => {
  const currentScale = parseInt(scaleValue.value, 10);
  const newScale = Math.min(currentScale + SCALE_STEP, MAX_SCALE);

  onScaleChange(newScale);
};

scaleSmallerButton.addEventListener('click', onScaleSmallerButtonClick);
scaleBiggerButton.addEventListener('click', onScaleBiggerButtonClick);

export { resetScale };
