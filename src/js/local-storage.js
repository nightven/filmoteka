import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

const STORAGE_KEY = "Favorite-Film";

function setToLocal(data, id) {
    const arr = getStatus();
    
  for (const item of arr) {
      if (item.id === id) {
          Notiflix.Report.warning("This film you've already add");
          return;
      }
}  
  arr.push(data);
  saveNewData(arr)
}

function getStatus() {
try {
 const item = localStorage.getItem(STORAGE_KEY);
 return item ? JSON.parse(item) : [];
 } catch (err) {
 console.log(err.message);
 }
}

function saveNewData(arr) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

export { setToLocal, getStatus, saveNewData };
