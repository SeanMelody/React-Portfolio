// import all the Goodness
import React from 'react'
import HeaderStyles from "./HeaderStyles"

// Header is below the nav bar displaying on every page
const Header = (props) => {
    return (
        <header className="container">
            {/* Use props to display the title of each page */}
            <h1 className="row cold-md-3 justify-content-center" style={HeaderStyles.HeaderStyles}>
                {props.title}
            </h1>
            {/* Add a break for a little bit of space */}
            <br></br>
        </header>
    )
}

export default Header
