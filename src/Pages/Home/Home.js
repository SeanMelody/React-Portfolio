import React from 'react'
import HomeStyles from "./HomeStyles"

const styles = {
    marginTop: "150px",
}

const Home = () => {
    return (

        <div>
            <div className="background-Image" style={HomeStyles.GifStyles}>
                <div className="container Enter col-md-4">
                    <h3 className="card-title">Hi!</h3>
                    <h4 className="card-title">I'm Sean Melody</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Full-stack Web Developer Extraordinaire</h6>
                </div>
                {/* <div style={HomeStyles.Enter} className="card home-card row justify-content col-md-3 col-md-offset-6">
                    <h3 class="card-title">Hi!</h3>
                    <h4 class="card-title">I'm Sean Melody</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Full-stack Web Developer Extraordinaire</h6>
                </div> */}
            </div>
        </div>


    )
}

export default Home

/* <img style={HomeStyles.GifStyles} src="./images/Binary-Film1.gif" alt="binary film"></img> */
