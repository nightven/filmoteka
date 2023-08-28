import 'bootstrap/dist/css/bootstrap.min.css';
// Імпорт скриптів Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Імпорт скриптів Basiclightbox
import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

import {setToLocal, getStatus, saveNewData } from './js/local-storage';
import { createMarkupFavorite, createMurkupCommentForm } from './js/markup';


let instance = 0;
let spanEl = 0;
let idToFind = 0;

const containerFavEl = document.querySelector('.js-container-favorite');
containerFavEl.addEventListener("click", onDeleteFavorite);
containerFavEl.addEventListener("click", onShowCommentForm);
containerFavEl.addEventListener("click", onDeleteComment);

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


function onShowCommentForm(event) {

   if (!event.target.classList.contains("js-add-comment")) return;

  spanEl = event.target.parentNode.querySelector(".comment"); 
  
  idToFind = findIdCard(event.target);

  instance = basicLightbox.create(createMurkupCommentForm());    
  instance.show();

  const btnElClose = document.getElementById("btnClose");
  btnElClose.addEventListener("click", onCloseForm);
    
  form.addEventListener("submit", onAddComment);

}

function onCloseForm() {
  instance.close();
}

function onAddComment(event) {

  event.preventDefault();   
  
  const commentEl = event.target.elements.comment.value;   
  
  spanEl.textContent = commentEl;
  
  instance.close();
  
  console.log(idToFind);

  setNewComment(idToFind, commentEl);      
 
}
  
function onDeleteComment(event) {

   if (!event.target.classList.contains("js-delete-comment")) return;

  event.target.parentNode.querySelector(".comment").textContent = "";    
 
  idToFind = findIdCard(event.target);

  setNewComment(idToFind);

}
 
function findIdCard(element) {

  return Number(element.parentNode.closest(".js-card").dataset.id);  

}

function setNewComment(id, comment="") {   

  const arr = getStatus();

  for (const item of arr) {
    if (item.id === id) {
      item.comment = comment;
    }
  }

  saveNewData(arr);
}