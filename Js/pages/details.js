import { apiDeleteMovie } from "../api/apiDeleteCinema.js";
import { apiGetMovieDetails } from "../api/apiGetMovieDetails.js";

const getHash = () => {
    const getId = window.location.hash.replace( "#", "" );
    return Number( getId );
}

const deleteData = () => {
    return `<h1>Data deleted successfully </h1>
    <p><a href="/index.html">Go Home<a></p>
    `
}

const removeHandler = async () => {
    const id = getHash();
    const { data } = await apiDeleteMovie( id );
    // if ( error ) {
    // }
    document.getElementById( "app" ).innerHTML = deleteData();

}

const removeClickHandler = () => {
    const removeDetails = document.getElementById( "remove-details" );
    removeDetails.addEventListener( "click", removeHandler )
}

const cinegoDetails = ( data ) => {
    const date = data.dateWatched;
    const properDate = date.split("T")[0]
    return `<article>
        <header>
            <h2>${ data.title }</h2>
        </header>
        <body>
            <p><strong>Director:</strong> ${ data.director }</p>
            <p><strong>Genre:</strong> ${ data.genre }</p>
            <p><strong>Date Watched:</strong> ${ properDate }</p>
            <p><strong>Review:</strong> ${ data.review }</p>
        </body>
        <footer>
            <button class='outline secondary' id="remove-details">Remove</button>
        </footer>
    </article>`
}
const ErrorBanner = ( error ) => {
    return `<hgroup>
    <h2>Error Occured</h2>
    <p>${ error.message }</p>
    </hgroup>`;
}

export default async function render() {
    const id = getHash();
    const { error, data } = await apiGetMovieDetails( id );
    if ( !error ) {
        document.getElementById( "app" ).innerHTML = cinegoDetails( data );
    } else {
        document.getElementById( "app" ).innerHTML = ErrorBanner( error );
    }
    removeClickHandler();
}