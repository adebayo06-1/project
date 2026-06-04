//Get required items
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

// 🔑 Your OMDb API key here
const API_KEY = "5e00c483";

searchBtn.addEventListener("click", getMovie);

function getMovie() {
  const movieName = searchInput.value.trim();

  if (movieName === "") {
    result.innerHTML = `<p class="error">Please enter a movie name</p>`;
    return;
  }

  fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {

      if (data.Response === "False") {
        result.innerHTML = `<p class="error">Movie not found</p>`;
        return;
      }

      result.innerHTML = `
        <div class="movie">
          <img src="${data.Poster}" alt="${data.Title}">

          <div>
            <h2>${data.Title}</h2>
            <p><strong>Year:</strong> ${data.Year}</p>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>IMDb:</strong> ${data.imdbRating}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
          </div>
        </div>
      `;
    })
    .catch(err => {
      result.innerHTML = `<p class="error">Something went wrong</p>`;
      console.log(err);
    });
}