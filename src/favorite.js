import 'bootstrap/dist/css/bootstrap.min.css';
// Імпорт скриптів Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {setToLocal, getStatus, saveNewData } from './js/local-storage';
import { createMarkupFavorite } from './js/markup';



const containerFavEl = document.querySelector('.js-container-favorite');
containerFavEl.addEventListener("click", onDeleteFavorite);

  const array = getStatus();
  if (!array.length) return;
  
  containerFavEl.innerHTML = createMarkupFavorite(array); 


function onDeleteFavorite(event) {
  if (!event.target.classList.contains("js-btn-delete")) return;

  const parentEl = event.target.closest(".js-card");
  const idToFind = Number(parentEl.dataset.id);
  
  parentEl.remove();

  const filteredArr = getStatus().filter(({ id }) => id !== idToFind);
  
  saveNewData(filteredArr);
}




  
 
 