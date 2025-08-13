import { apiGetCinema } from "../api/apiGetCinema.js"

const displayData = ( { id, title, director, genre } ) => {
    return `<tr> 
       <td>${ id }</td>
       <td>${ title }</td>
       <td>${ director }</td>
       <td>${ genre }</td>
       <td><a href="details#${ id }">View</a></td>
      </tr>`
}

const RenderMovieTable = ( data ) => {
    const movieTable = data.map( displayData );
    const movieRowHtml = movieTable.join( "" );
    return `<table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Director</th>
                <th>Genre</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        ${ movieRowHtml }
        </tbody>
    </table>`
}

export default async function home() {
    const { error, data } = await apiGetCinema()
    document.getElementById( "app" ).innerHTML = RenderMovieTable( data )
}