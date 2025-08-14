import { apiAddCinema } from "../api/apiAddCinema.js"
const AddMovies = () => {
    return `<h1>What movie did you watch recently?</h1><hr/>
<form id="formHandler">
<input type="text" id="inputTitle" placeholder="Title"}/>
<input type="text" id="inputDirector" placeholder="Director"}/>
<input type="text" id="inputGenre" placeholder="Genre"}/>
<input type="datetime-local" id="inputDate"}/>
<input type="textarea" id="inputReview" placeholder="Your Review"/>
<button type="submit">Add Movie</button>
</form>
<p id="result"></p>`
}

const dataClickHandler = async (event) => {
    event.preventDefault();
    const payload = {
        title: document.getElementById( "inputTitle" ).value,
        director: document.getElementById( "inputDirector" ).value,
        genre: document.getElementById( "inputGenre" ).value,
        dateWatched: document.getElementById( "inputDate" ).value,
        review: document.getElementById( "inputReview" ).value
    }
    const { error, data } = await apiAddCinema( payload );
    const resultElement = document.getElementById( "result" );
    if ( !error ) {
        resultElement.innerText = '🔥 Add Data successFully';
        resultElement.style.color = "green"
        document.getElementById( "formHandler" ).reset();
    } else {
        resultElement.innerText = `Error Occured`
        resultElement.style.color = "red";
    }
}

export default function render() {
    document.getElementById( "app" ).innerHTML = AddMovies();
    document.getElementById( "formHandler" ).addEventListener( "click", dataClickHandler )
}