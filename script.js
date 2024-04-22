function Movie(title, rating, year) {
  this.title = title;
  this.rating = rating;
  this.year = year;
}

var movies = [];

function addMovie() {
  var titleInput = document.getElementById('title').value;
  var ratingInput = document.getElementById('rating').value;
  var yearInput = document.getElementById('year').value;

  if (!titleInput || !ratingInput || !yearInput) {
    alert('Error: All fields must be filled. Input not saved.');
    return;
  }

  var movie = new Movie(titleInput, parseInt(ratingInput), parseInt(yearInput));

  movies.push(movie);

  document.getElementById('title').value = '';
  document.getElementById('rating').value = '';
  document.getElementById('year').value = '';
}

function showMovies() {
  var movieList = document.getElementById('movieList');
  movieList.innerHTML = '';

  movies.forEach(function(movie) {
    var li = document.createElement('li');
    li.textContent = 'Title: ' + movie.title + ', Rating: ' + movie.rating + ', Year: ' + movie.year;
    movieList.appendChild(li);
  });
}
