import './form.js';
import './scale.js';
import './effects.js';
import { renderPictures } from './pictures.js';
import { createPhotos } from './photos.js';

const photos = createPhotos();

renderPictures(photos);
