import { apiGetCinema } from "../api/apiGetCinema.js"

const RenderMovieTable = (data)=>{
    console.log(data)
}

export default async function home() {
    const { error, data } = await apiGetCinema()
    document.getElementById( "app" ).innerHTML = RenderMovieTable( data )
}