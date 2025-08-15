const toggleTheme = document.getElementById( "toggle-theme" );

const setTheme = ( name ) => {
    document.querySelector( "html" ).setAttribute( "data-theme", name )
}

const themeClickHandler = ( event ) => {
    if ( event.target.checked ) {
        setTheme( "dark" )
    } else {
        setTheme( "light" )
    }
}

const setInitialTheme = () => {
    const userPreference = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;
    if ( userPreference ) {
        toggleTheme.checked = true;
        setTheme( "dark" )
    } else {
        toggleTheme.checked = false;
        setTheme( "light" )
    }
}

export default function main() {
    setInitialTheme()
    const toggleTheme = document.getElementById( "toggle-theme" );
    toggleTheme.addEventListener( "change", themeClickHandler )
}