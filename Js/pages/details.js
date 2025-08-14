const getHash = () => {
    const getId = window.location.hash.replace( "#", "" );
    return Number( getId );
}
export default function render() {
    const id = getHash();
    
    document.getElementById( "app" ).innerHTML = cinegoDetails()
}