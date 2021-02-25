// import all the Goodness
import React from 'react'

// Header is below the nav bar displaying on every page
const HeaderStyles = (props) => {
    return (
        <header>
            {/* Use props to display the title of each page */}
            <h1>
                {props.title}
            </h1>
            {/* Add a break for a little bit of space */}
            <br></br>
        </header>
    )
}

export default HeaderStyles
