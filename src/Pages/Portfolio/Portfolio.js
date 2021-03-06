// Import all the goodness
import React from 'react'
import Header from "../../Components/Header/Header"
//Each section is one project
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection"

// Portfolio will use props to display each Portfolio Secion Component
const Portfolio = () => {
    return (
        <div>
            {/* HR line break for after the navbar */}
            <hr></hr>
            <Header title={"Portfolio"} />
            {/* Container for all the components */}
            <div className="container">
                {/* Row 1 of 3 */}
                <div className="row portfolio-body">
                    <PortfolioSection
                        project={"Google Books API"}
                        photo={"./images/GoogleBooksAPI.png"}
                        link={"https://google-books-api-sm.herokuapp.com/"}
                        github={"https://github.com/SeanMelody/GoogleBooksAPI"}
                    />
                    <PortfolioSection
                        project={"Employee Directory"}
                        photo={"./images/Employee-Directory.png"}
                        link={"https://secret-escarpment-97413.herokuapp.com/"}
                        github={"https://github.com/SeanMelody/Directory"}
                    />
                    <PortfolioSection
                        project={"Day Planner"}
                        photo={"./images/Day-Planner.png"}
                        link={"https://secret-escarpment-97413.herokuapp.com/"}
                        github={"https://github.com/SeanMelody/Fantastic-Four-Stocks"}
                    />
                </div>
                <br></br>
                {/* Row 2 of 3 */}
                <div className="row portfolio-body">
                    <PortfolioSection
                        project={"Burger Eater"}
                        photo={"./images/Burger-Eater.png"}
                        link={"https://limitless-reaches-92941.herokuapp.com/"}
                        github={"https://github.com/SeanMelody/BurgerEater"}
                    />
                    <PortfolioSection
                        project={"Offline/Online Budget Tracker"}
                        photo={"./images/Budget-Tracker.png"}
                        link={"https://shrouded-bayou-14667.herokuapp.com/"}
                        github={"https://github.com/SeanMelody/Budget-Tracker"}
                    />
                    <PortfolioSection
                        project={"Weather API"}
                        photo={"./images/Weather.png"}
                        link={"https://seanmelody.github.io/Weather-API/"}
                        github={"https://github.com/SeanMelody/Weather-API"}
                    />
                </div>
                <br></br>
                {/* Row 3 of 4 */}
                <div className="row portfolio-body">
                    <PortfolioSection
                        project={"Fitness Tracker"}
                        photo={"./images/Fitness-Tracker.png"}
                        link={"https://powerful-ocean-82825.herokuapp.com/"}
                        github={"https://github.com/SeanMelody/Fitness-Tracker"}
                    />
                    <PortfolioSection
                        project={"API Password Generator"}
                        photo={"./images/API-Password-Generator.png"}
                        link={"https://seanmelody.github.io/PWDGenerator/"}
                        github={"https://github.com/SeanMelody/PWDGenerator"}
                    />
                    <PortfolioSection
                        project={"Daily Scheduler"}
                        photo={"./images/Scheduler.png"}
                        link={"https://seanmelody.github.io/Scheduler/"}
                        github={"https://github.com/SeanMelody/Scheduler"}
                    />
                </div>
                {/* Row 4 of 4 */}
                <div className="row portfolio-body">
                    <PortfolioSection
                        project={"JavaScript Coding Quiz"}
                        photo={"./images/JavaScript-Coding-Quiz.png"}
                        link={"https://seanmelody.github.io/JavaScript-Coding-Quiz/"}
                        github={"https://github.com/SeanMelody/JavaScript-Coding-Quiz"}
                    />
                    <PortfolioSection
                        project={"Selfies With Arya"}
                        photo={"./images/Selfies-with-Arya.png"}
                        link={"https://seanmelody.github.io/Arya/"}
                        github={"https://github.com/SeanMelody/Arya"}
                    />
                    <PortfolioSection
                        project={"My Photography"}
                        photo={"./images/Photography.png"}
                        link={"https://www.seanmelody.com"}
                    />
                </div>
            </div>

        </div>

    )
}

export default Portfolio
