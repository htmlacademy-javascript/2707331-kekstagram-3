const previewImage = document.querySelector('.img-upload__preview img');
const effects = document.querySelectorAll('.effects__radio');
const effectLevel = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const EFFECTS = {
  none: {
    min: 0,
    max: 0,
    step: 0,
    filter: null,
  },
  chrome: {
    min: 0,
    max: 1,
    step: 0.1,
    filter: 'grayscale',
  },
  sepia: {
    min: 0,
    max: 1,
    step: 0.1,
    filter: 'sepia',
  },
  marvin: {
    min: 0,
    max: 100,
    step: 1,
    filter: 'invert',
  },
  phobos: {
    min: 0,
    max: 3,
    step: 0.1,
    filter: 'blur',
  },
  heat: {
    min: 1,
    max: 3,
    step: 0.1,
    filter: 'brightness',
  },
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

effectLevel.classList.add('hidden');

const applyEffect = (effect, value) => {
  if (effect.filter === null) {
    previewImage.style.removeProperty('filter');
    return;
  }

  let filterValue = value;

  if (effect.filter === 'invert') {
    filterValue = `${value}%`;
  }

  if (effect.filter === 'blur') {
    filterValue = `${value}px`;
  }

  previewImage.style.filter = `${effect.filter}(${filterValue})`;
};

effectLevelSlider.noUiSlider.on('update', (values) => {
  const value = Number(values[0]);

  effectLevelValue.value = value;

  const activeEffect = document.querySelector('.effects__radio:checked');
  const effect = EFFECTS[activeEffect.value];

  applyEffect(effect, value);
});

const onEffectChange = (evt) => {
  const effect = EFFECTS[evt.target.value];

  if (effect.filter === null) {
    effectLevel.classList.add('hidden');
    effectLevelValue.value = '';
    previewImage.style.removeProperty('filter');
    return;
  }

  effectLevel.classList.remove('hidden');

  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    start: effect.max,
    step: effect.step,
  });

  effectLevelValue.value = effect.max;
  applyEffect(effect, effect.max);
};

effects.forEach((effect) => {
  effect.addEventListener('change', onEffectChange);
});
