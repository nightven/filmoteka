function createMarkup(arr) {
  return arr
    .map(
      ({ id, title, vote_average, overview, poster_path, release_date }) => `
      
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 js-card" data-id="${id}">
    <div class="card mb-3 " style="width: 18rem; ">
    <img src="https://image.tmdb.org/t/p/w300${poster_path}" class="card-img-top" alt="${title}">
    <div class="card-body ">
      <h5 class="card-title">${title}</h5>
      <span>Rating:${vote_average}</span>
      <p class="card-text">Releases date:${release_date}</p>
      <button type="button" class="btn btn-outline-warning js-btn-favorite">Add to favorite</button>
    </div>
  </div>
    </div>   
 
    `
    )
    .join('');
}


function createMarkupFavorite(arr) {
  return arr
    .map(
      ({ id, title, vote_average, overview, poster_path, release_date }) => `
      
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 js-card" data-id="${id}">
    <div class="card mb-3 " style="width: 18rem; ">
    <img src="https://image.tmdb.org/t/p/w300${poster_path}" class="card-img-top" alt="${title}">
    <div class="card-body ">
      <h5 class="card-title">${title}</h5>
      <span>Rating:${vote_average}</span>
      <p class="card-text">Releases date:${release_date}</p>
      <p class="card-text">Overview: ${overview}</p>
      <button type="button" class="btn btn-outline-warning js-btn-delete">Delete</button>
    </div>
  </div>
    </div>   
 
    `
    )
    .join('');
}

export { createMarkup, createMarkupFavorite};
