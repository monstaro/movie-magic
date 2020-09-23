let movies;

fetch('https://api.themoviedb.org/3/movie/popular?api_key=7a2a1fc0d574e246e11bd2878076ca24&language=en-US&page=1')
  .then(response => response.json())
  .then(data => movies = data)
  .catch(err => console.error(err));


