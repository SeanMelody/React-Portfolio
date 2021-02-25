import React from 'react'
import Header from "../../Components/Header/Header"
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection"

const Portfolio = () => {
    return (
        <div>
            <Header title={"Portfolio"} />
            <div className="container">
                <div className="row portfolio-body">
                    <PortfolioSection
                        project={"Employee Database"}
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
                    <PortfolioSection
                        project={"Burger Eater"}
                        photo={"./images/Burger-Eater.png"}
                        link={"https://limitless-reaches-92941.herokuapp.com/"}
                        github={"https://github.com/SeanMelody/BurgerEater"}
                    />
                </div>
                <br></br>
                <div className="row portfolio-body">
                    <PortfolioSection
                        project={"API Password Generator"}
                        photo={"./images/API-Password-Generator.png"}
                        link={"https://seanmelody.github.io/PWDGenerator/"}
                        github={"https://github.com/SeanMelody/PWDGenerator"}
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
                <div className="row portfolio-body">
                    <PortfolioSection
                        project={"Day Scheduler"}
                        photo={"./images/Scheduler.png"}
                        link={"https://seanmelody.github.io/Scheduler/"}
                        github={"https://github.com/SeanMelody/BurgerEater"}
                    />
                    <PortfolioSection
                        project={"JavaScript Coding Quiz"}
                        photo={"./images/JavaScript-Coding-Quiz.png"}
                        link={"https://seanmelody.github.io/JavaScript-Coding-Quiz/"}
                        github={"https://github.com/SeanMelody/JavaScript-Coding-Quiz"}
                    />
                    <PortfolioSection
                        project={"Selfies With Arya"}
                        photo={"./images/Selfies-With-Arya.png"}
                        link={"https://seanmelody.github.io/Arya/"}
                        github={"https://github.com/SeanMelody/Arya"}
                    />
                </div>
            </div>

        </div>

    )
}

export default Portfolio
