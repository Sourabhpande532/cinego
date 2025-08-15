import { apiAddCinema } from "../api/apiAddCinema.js";

function addMovie() {
  return `
       <h2>What movie did you watch recently?</h2>
       <hr />
      <form id="add-movie">
      <input type="text" placeholder="Title" id="movie-title" />
      <input type="text" placeholder="director" id="movie-director" />
      <select id="movie-category">
      <option value="" disabled selected>Genre</option>
      <option value="Action">Action</option>
      <option value="Comedy">Comedy</option>
      <option value="Drama">Drama</option>
      <option value="Thriller">Thriller</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Documentary">Documentary</option>
      <option value="Other">Other</option>
      </select>
      <input type="datetime-local" id="movie-date"/>
      <textarea id="movie-review" placeholder="Your Review"></textarea>
      <button type="submit" class="primary">Add Movie</button>
      </form>
      <div id="result"></div>
      `;
}

async function handleFormDetails(event) {
  event.preventDefault();
  const payload = {
    title: document.getElementById("movie-title").value,
    director: document.getElementById("movie-director").value,
    genre: document.getElementById("movie-category").value,
    dateWatched: document.getElementById("movie-date").value,
    review: document.getElementById("movie-review").value,
  };
  const results = document.getElementById("result");
  const forms = document.getElementById("add-movie");

  const { error, data } = await apiAddCinema(payload);

  if (!error) {
    results.innerText = "✅Movie added successfully";
    results.style.color = "green";
    forms.reset();
  } else {
    results.innerText = "Error Occured,Please One one time";
    results.style.color = "red";
  }
}

export default function render() {
  document.getElementById("app").innerHTML = addMovie();
  const form = document.getElementById("add-movie");
  form.addEventListener("submit", handleFormDetails);
}

// Auto Generate Id don't need to add..
