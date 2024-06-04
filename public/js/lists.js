function displayLists() {
  const listsDiv = document.getElementById('movie-lists');
  const lists = JSON.parse(localStorage.getItem('lists')) || [];
  listsDiv.innerHTML = '';
  lists.forEach(list => {
    const listDiv = document.createElement('div');
    listDiv.classList.add('list');
    listDiv.innerHTML = `<h3>${list.name}</h3>`;
    list.movies.forEach(movieId => {
      fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(movie => {
          const movieDiv = document.createElement('div');
          movieDiv.classList.add('movie');
          movieDiv.innerHTML = `
            <h4>${movie.Title}</h4>
            <img src="${movie.Poster}" alt="${movie.Title}">
          `;
          listDiv.appendChild(movieDiv);
        });
    });
    listsDiv.appendChild(listDiv);
  });
}

document.addEventListener('DOMContentLoaded', displayLists);
