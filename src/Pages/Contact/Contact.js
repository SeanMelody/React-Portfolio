// import all the Goodness
import React from 'react'
import Header from "../../Components/Header/Header"
import ContactStyles from "./ContactStyles"

// Contact Page to display links and how to contact me
const Contact = () => {
    return (
        <div>
            {/* Hr for a line break after the nav bar*/}
            <hr></hr>
            <Header title={"Contact Me"} />


            {/* Each div will dispaly the photo, and the link */}
            <main className="container shadow-lg">
                <div className="row">
                    <div className="col-md-12 text-center">

                        {/* <h4>Phone Number Here</h4> */}
                        <h4>sean.d.melody@gmail.com</h4>
                        <br></br>
                    </div>
                </div>

                <div className="row">

                    <div style={ContactStyles.Padding} className="col-md-4 text-center">

                        <a href="https://github.com/SeanMelody" alt="GitHub Profile" target="_blank" rel="noreferrer">
                            <img src="./images/GitHub.png" alt="Github Profile" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12">
                                <a style={ContactStyles.LinkTitleStyles} href="https://github.com/SeanMelody" alt="GitHub Profile" target="_blank" rel="noreferrer">
                                    <h4 style={ContactStyles.TitleStyles}>GitHub</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={ContactStyles.Padding} className="col-md-4 text-center">

                        <a href="https://www.linkedin.com/in/sean-melody/" alt="LinkedIn Profile"
                            target="_blank" rel="noreferrer">
                            <img src="./images/LinkedIn.png" alt="LinkedIn Profile" className="img-thumbnail"></img>
                        </a>


                        <div className="row">
                            <div className="col-md-12">
                                <a style={ContactStyles.LinkTitleStyles} href="https://www.linkedin.com/in/sean-melody/" alt="LinkedIn Profile"
                                    target="_blank" rel="noreferrer">
                                    <h4 style={ContactStyles.TitleStyles}>LinkedIn</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={ContactStyles.Padding} className="col-md-4 text-center">

                        <a href="./images/Sean-Melody-Resume.pdf" target="_blank" download="Sean Melody Resume"
                            alt="Resume">
                            <img src="./images/Resume.png" alt="Resume" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12">
                                <a style={ContactStyles.LinkTitleStyles} href="./images/Sean-Melody-Resume.pdf" target="_blank" download="Sean Melody Resume"
                                    alt="Resume">
                                    <h4 style={ContactStyles.TitleStyles}>Resume</h4>
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

                    <div style={ContactStyles.Padding} className="col-md-4 text-center">

                        <a href="https://www.instagram.com/seandze/" alt="Instagram" target="_blank" rel="noreferrer">
                            <img src="./images/Instagram-Profile.jpg" alt="Instagram Profile" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12">
                                <a style={ContactStyles.LinkTitleStyles} href="https://www.instagram.com/seandze/" alt="Instagram" target="_blank" rel="noreferrer">
                                    <h4 style={ContactStyles.TitleStyles}>Instagram</h4>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={ContactStyles.Padding} className="col-md-4 text-center">

                        <a href="https://www.facebook.com/sean.dz.5/" alt="Facebook" target="_blank" rel="noreferrer">
                            <img src="./images/Facebook-Profile.jpg" alt="Facebook Profile" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12">
                                <a style={ContactStyles.LinkTitleStyles} href="https://www.facebook.com/sean.dz.5/" alt="Facebook" target="_blank" rel="noreferrer">
                                    <h4 style={ContactStyles.TitleStyles}>Facebook</h4>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={ContactStyles.Padding} className="col-md-4 text-center">

                        <a href="https://twitter.com/drdze " alt="Twitter" target="_blank" rel="noreferrer">
                            <img src="./images/Twitter-Profile.jpg" alt="Twitter Profile" className="img-thumbnail"></img>
                        </a>
                        <div className="row">
                            <div className="col-md-12">
                                <a style={ContactStyles.LinkTitleStyles} href="https://twitter.com/drdze " alt="Twitter" target="_blank" rel="noreferrer">
                                    <h4 style={ContactStyles.TitleStyles}>Twitter</h4>
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
