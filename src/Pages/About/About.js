// import all the Goodness
import React from 'react'
import Header from "../../Components/Header/Header"
import Kitten from '../../Components/Kitten/Kitten'
import AboutStyles from "./AboutStyles"

// About page for my description
const About = () => {
    return (
        <div style={AboutStyles.BodyStyle}>
            {/* Hr for a line break after the navbar */}
            <hr></hr>
            {/* Header used to dispaly title */}
            <Header title={"About Me"} />
            <main className="container shadow-lg p-3 mb-5 rounded main">
                <div className="row">
                </div>
                {/* Row for the image and text content*/}
                <section className="row">
                    <div className="col-md-4 about-me-photo">

                        <img src="./images/About-Me-Profile.jpg" alt="Sean Melody Profile" className="img-thumbnail"></img>
                    </div>

                    <div className="col-md-8">
                        <p style={AboutStyles.Paragraph}>Hi! My name is Sean Melody, full stack web developer. I am a UC Berkeley extension educated MERN developer
                        with an extensive knowledge in JavaScript, React, MongoDB, Mongoose, MySQl, Sequelize, Node, Express, Jquery, Handlebars, Bootstrap, HTML and CSS
                        and love CRUD functionality. I also have a Bachelor's degree in Photography and a Minor in Art History. Check out my
                        <a style={AboutStyles.Link} href="http://www.seanmelody.com" alt="seanMelody.com" target="_blank" rel="noreferrer"> photography website</a>.
                                </p>
                        <p style={AboutStyles.Paragraph}>
                            I enjoy creating, designing and helping to bring ideas and visions to life on both the front and
                            back end of webpages. Forever optimistic, with a strong work ethic, love problem solving/debugging and am very detail
                            oriented. I consider myself a master of deadlines and crave the excitement of solving complex problems and learning new ways to do so.
                            Team-oriented, company loyal and always happy to help anywhere it is needed as well as having the
                            confidence to attack problems solo. Passionate about all things, but a few personal favorites are
                            the San Francisco Giants, traveling and my cat. I also wrote a Medium article about my love for Linear & Radial Gradients, that you
                            can read <a style={AboutStyles.Link} href="https://medium.com/@seandmelody/fun-with-linear-radial-gradients-bfcc47cade71">here</a>.
                                </p>
                        <p style={AboutStyles.Paragraph}>

                            If you would like to contact me, please check out my Contact Page.
                                </p>
                    </div>
                </section>
                {/* Section of photos of my adorable kitten */}
                <section style={AboutStyles.KittenContainer}>
                    <div className="row container" style={AboutStyles.Kitten}>
                        <Kitten image={"./images/Arya1.jpg"} alt={"Arya1"} />
                        <Kitten image={"./images/Arya2.jpg"} alt={"Arya2"} />
                        <Kitten image={"./images/Arya3.jpg"} alt={"Arya3"} />
                        <Kitten image={"./images/Arya4.jpg"} alt={"Arya4"} />
                    </div>
                    <div className="row container" style={AboutStyles.Kitten}>
                        <Kitten image={"./images/Arya5.jpg"} alt={"Arya5"} />
                        <Kitten image={"./images/Arya6.jpg"} alt={"Arya6"} />
                        <Kitten image={"./images/Arya7.jpg"} alt={"Arya7"} />
                        <Kitten image={"./images/Arya8.jpg"} alt={"Arya8"} />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About
