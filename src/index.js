import 'bootstrap/dist/css/bootstrap.min.css';
// Імпорт скриптів Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { getMovies, getFavoriteMovie } from './js/films-api';
import { createMarkup } from './js/markup';
import { setToLocal, getStatus, saveNewData } from './js/local-storage';
import Notiflix from 'notiflix';


const refs = {
  containerEl: document.querySelector('.js-container'),
  
}; 


getMovies().then(resp => {
  console.log(resp.data.results);
  refs.containerEl.innerHTML = createMarkup(resp.data.results);
  refs.containerEl.addEventListener("click", onAddToFavorite);
  
});


function onAddToFavorite(event) {    
  
  if (!event.target.classList.contains("js-btn-favorite")) return; 
  
  const parentEl = event.target.parentNode.querySelector(".js-btn-favorite");

  let card = event.target.closest(".js-card");
  let cardId = card.dataset.id; 
  
  getFavoriteMovie(cardId).then(resp => { 

    setToLocal(resp.data, resp.data.id); 
    Notiflix.Report.success("Done");
    parentEl.textContent = "Added";
    parentEl.setAttribute("disabled", "disabled");

  })
};


