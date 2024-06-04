const API_KEY = '9ec663c4';

document.getElementById('search-button').addEventListener('click', function() {
  const query = document.getElementById('search-input').value;
  if (query.length > 2) {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const results = data.Search || [];
        displayResults(results);
      });
  }
});

function displayResults(movies) {
  const resultsDiv = document.getElementById('search-results');
  resultsDiv.innerHTML = '';
  movies.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');
    movieDiv.innerHTML = `
      <h3>${movie.Title} (${movie.Year})</h3>
      <img src="${movie.Poster}" alt="${movie.Title}">
      <button onclick="addToList('${movie.imdbID}')">Add to List</button>
    `;
    resultsDiv.appendChild(movieDiv);
  });
}

function addToList(movieId) {
  let lists = JSON.parse(localStorage.getItem('lists')) || [];
  const listName = prompt('Enter the name of the list:');
  let list = lists.find(l => l.name === listName);
  if (!list) {
    list = { name: listName, movies: [] };
    lists.push(list);
  }
  list.movies.push(movieId);
  localStorage.setItem('lists', JSON.stringify(lists));
  displayLists();
}
