// Import all the goodness
import React from 'react'
import HomeStyles from "./HomeStyles"

// Home is the welcome page, displaying the Binary-Film gif
const Home = () => {
    return (
        <div>
            {/* Background image gif */}
            <div className="background-Image" style={HomeStyles.GifStyles}>
                {/* Welcome card contents */}
                <div className="container Enter col-md-4">
                    <h3 className="card-title">Hi!</h3>
                    <h4 className="card-title">I'm Sean Melody</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Full-stack Web Developer Extraordinaire</h6>
                </div>
            </div>
        </div>

    )
}

export default Home

/* <img style={HomeStyles.GifStyles} src="./images/Binary-Film1.gif" alt="binary film"></img> */
