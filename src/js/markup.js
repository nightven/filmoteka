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
      ({ id, title, vote_average, overview, poster_path, release_date, budget, original_language, runtime, tagline, comment = ""}) => `
      
    <div class="card mb-3 text-start border-warning js-card" style="--bs-bg-opacity: 0.5" data-id="${id}">
  <div class="row g-0" >
    <div class="col-md-4" >
      <img src="https://image.tmdb.org/t/p/w300${poster_path}" class="img-fluid rounded-start" alt="${title}">      
    </div>    
    <div class="col-md-8">
      <div class="card-body">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" class="btn btn-outline-warning js-btn-delete">Delete</button>
      </div>
        <h6 class="card-title">${title}</h6>
        <p class="card-text"> Release date : ${release_date}</p>
        <p class="card-text">Rating : ${vote_average}</p>
        <p class="card-text">Budget : ${budget}</p>
        <p class="card-text">Runtime : ${runtime}</p>
        <p class="card-text">Original language : ${original_language}</p>
        <p class="card-text">Overwiew: ${overview}</p>
         <p class="card-text"><small class="text-body-secondary">Tagline: ${tagline}</small></p>
         <p class="card-text"><small class="text-body-secondary">Comment: <span class="comment">${comment}</span></small></p>
         
         <button type="button" class="btn btn-outline-warning js-add-comment">Add comment</button>
         <button type="button" class="btn btn-outline-warning js-delete-comment">Delete comment</button>
      </div>
      
    </div>
  </div>
</div>
    `
    )
    .join('');
}


function createMurkupCommentForm(comment="") {
  return `    
    <form class="form" id="form">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button type="button" class="btn-close" aria-label="Close" id="btnClose"></button>
    </div>    
    
    <div class="mb-3">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="comment">${comment}</textarea>
    <label for="floatingTextarea">Comment</label>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
     <button class="btn btn-secondary me-md-2 js-btn" type="submit" id="btnAdd">Add comment</button  
    </div>
    </form>
 `
};

export { createMarkup, createMarkupFavorite, createMurkupCommentForm };
