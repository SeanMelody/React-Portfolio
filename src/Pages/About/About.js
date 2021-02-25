import React from 'react'
import Header from "../../Components/Header/Header"

const About = () => {
    return (
        <div>
            <hr></hr>
            <Header title={"About Me"} />
            <main className="container shadow-lg p-3 mb-5 rounded main">
                <div className="row">
                </div>
                <section className="row">
                    <div className="col-md-4 about-me-photo">

                        <img src="./images/About-Me-Profile.jpg" alt="Sean Melody Profile" className="img-thumbnail"></img>
                    </div>

                    <div className="col-md-8">
                        <p>Hi! My name is Sean Melody, and I am learning to be a full stack web developer. I have a Bachelor's
                        degree in Photography and a Minor in Art History. I am a UC Berkeley extension educated
                        MERN developer with an extensive knowledge in HTML, CSS, JavaScript, jQuery, Node, Express, mySql,
                        Sequelize, Handlebars, and CRUD functionality with many more still to come.
                                </p>
                        <p>
                            I enjoy creating, designing and helping to bring ideas and visions to life on both the front and
                            back end of webpages.
                            Forever optimistic, with a strong work ethic, love problem solving/debugging and am very detail
                            oriented. I
                            consider myself a
                            master of deadlines and crave the excitement of solving complex problems and learning new ways to do
                            so.
                            Team-oriented, company loyal and always happy to help anywhere it is needed as well as having the
                            confidence to attack problems solo. Passionate about all things, but a few personal favorites are
                            the San Francisco Giants, traveling and my cat.

                                </p>
                        <p>

                            If you would like to contact me, please check out my Contact Page.
                                </p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About
