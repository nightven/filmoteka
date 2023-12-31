import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const SEARCH_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '05fecd37f4938abe676372f3977174d8';

function getMovies() {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios(BASE_URL);
}

function getFavoriteMovie(id) {
  
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios(`${SEARCH_URL}/${id}`);
}

export { getMovies, getFavoriteMovie };
