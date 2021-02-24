import React from 'react'
import Header from "../../Components/Header/Header"

const Contact = () => {
    return (
        <div>
            <Header title={"Contact Me"} />

            <main class="container social-media-img shadow-lg p-3 mb-5 rounded main">
                <div class="row">
                    <div class="col-md-12 text-center">

                        <h2>Contact Me</h2>
                        <h4>sean.d.melody@gmail.com</h4>

                    </div>
                </div>

                <div class="row">

                    <div class="col-md-4 text-center">

                        <a href="https://github.com/SeanMelody" alt="GitHub Profile" target="_blank" rel="noreferrer">
                            <img src="./images/GitHub.png" alt="Github Profile" class="img-thumbnail"></img>
                        </a>
                        <div class="row">
                            <div class="col-md-12 social-media-link">
                                <a href="https://github.com/SeanMelody" alt="GitHub Profile" target="_blank" rel="noreferrer">
                                    <h4>GitHub</h4>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </main>

        </div >
    )
}

export default Contact
