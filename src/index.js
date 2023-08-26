import 'bootstrap/dist/css/bootstrap.min.css';
// Імпорт скриптів Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { getMovies } from './js/films-api';
import { createMarkup } from './js/markup';

const refs = {
  containerEl: document.querySelector('.js-container'),
};
console.log(refs.containerEl);
getMovies().then(resp => {
  console.log(resp.data.results);
  refs.containerEl.innerHTML = createMarkup(resp.data.results);
});
