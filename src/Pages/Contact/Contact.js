import React from 'react'
import Header from "../../Components/Header/Header"

const Contact = () => {
    return (
        <div>
            <hr></hr>
            <Header title={"Contact Me"} />

            <main className="container social-media-img shadow-lg p-3 mb-5 rounded main">
                <div className="row">
                    <div className="col-md-12 text-center">

                        <h4>(707)548-6725</h4>
                        <h4>sean.d.melody@gmail.com</h4>

                    </div>
                </div>

                <div className="row">

                    <div className="col-md-4 text-center">

                        <a href="https://github.com/SeanMelody" alt="GitHub Profile" target="_blank" rel="noreferrer">
                            <img src="./images/GitHub.png" alt="Github Profile" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12 social-media-link">
                                <a href="https://github.com/SeanMelody" alt="GitHub Profile" target="_blank" rel="noreferrer">
                                    <h4>GitHub</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">

                        <a href="https://www.linkedin.com/in/sean-melody-0b3188bb/" alt="LinkedIn Profile"
                            target="_blank" rel="noreferrer">
                            <img src="./images/LinkedIn.png" alt="LinkedIn Profile" className="img-thumbnail"></img>
                        </a>


                        <div className="row">
                            <div className="col-md-12 social-media-link">
                                <a href="https://www.linkedin.com/in/sean-melody/" alt="LinkedIn Profile"
                                    target="_blank" rel="noreferrer">
                                    <h4>LinkedIn</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">

                        <a href="./images/Sean-Melody-Resume.pdf" target="_blank" download="Sean Melody Resume"
                            alt="Resume">
                            <img src="./images/Resume.png" alt="Resume" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12 social-media-link">
                                <a href="./images/Sean-Melody-Resume.pdf" target="_blank" download="Sean Melody Resume"
                                    alt="Resume">
                                    <h4>Resume</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-md-12 text-center">

                        <h2>Social Media</h2>
                        <hr></hr>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-4 text-center">

                        <a href="https://www.instagram.com/seandze/" alt="Instagram" target="_blank" rel="noreferrer">
                            <img src="./images/Instagram-Profile.jpg" alt="Instagram Profile" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12 social-media-link">
                                <a href="https://www.instagram.com/seandze/" alt="Instagram" target="_blank" rel="noreferrer">
                                    <h4>Instagram</h4>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">

                        <a href="https://www.facebook.com/sean.dz.5/" alt="Facebook" target="_blank" rel="noreferrer">
                            <img src="./images/Facebook-Profile.jpg" alt="Facebook Profile" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12 social-media-link">
                                <a href="https://www.facebook.com/sean.dz.5/" alt="Facebook" target="_blank" rel="noreferrer">
                                    <h4>Facebook</h4>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">

                        <a href="https://twitter.com/drdze " alt="Twitter" target="_blank" rel="noreferrer">
                            <img src="./images/Twitter-Profile.jpg" alt="Twitter Profile" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12 social-media-link">
                                <a href="https://twitter.com/drdze " alt="Twitter" target="_blank" rel="noreferrer">
                                    <h4>Twitter</h4>
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
