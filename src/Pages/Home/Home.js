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
                <div style={HomeStyles.Enter} >
                    <div style={HomeStyles.Rounded} className="container Enter col-md-4 rounded">
                        <h3 className="card-title">Hi!</h3>
                        <h4 className="card-title">I'm Sean Melody</h4>
                        <h5 className="card-body mb-2">Full-stack Web Developer Extraordinaire</h5>
                        <h6 className="card-subtitle">Please use the navbar to explore</h6>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home

/* <img style={HomeStyles.GifStyles} src="./images/Binary-Film1.gif" alt="binary film"></img> */
