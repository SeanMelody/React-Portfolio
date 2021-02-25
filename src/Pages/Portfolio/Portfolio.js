import React from 'react'
import Header from "../../Components/Header/Header"
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection"

const Portfolio = (props) => {
    return (
        <div>
            <Header title={"Portfolio"} />
            <div class="row portfolio-body">
                <PortfolioSection
                    project={"Employee Database"}
                    photo={"./images/Employee-Directory.png"}
                    link={"https://secret-escarpment-97413.herokuapp.com/"}
                />
                <PortfolioSection
                    project={"Day Planner"}
                    photo={"./images/Day-Planner.png"}
                    link={"https://secret-escarpment-97413.herokuapp.com/"}
                />
                <PortfolioSection
                    project={"Burger Eater"}
                    photo={"./images/Burger-Eater.png"}
                    link={"https://limitless-reaches-92941.herokuapp.com/"}
                />
            </div>
            <div class="row portfolio-body">
                <PortfolioSection
                    project={"API Password Generator"}
                    photo={"./images/API-Password-Generator.png"}
                    link={"https://seanmelody.github.io/PWDGenerator/"}
                />
                <PortfolioSection
                    project={"Offline/Online Budget Tracker"}
                    photo={"./images/Budget-Tracker.png"}
                    link={"https://shrouded-bayou-14667.herokuapp.com/"}
                />
                <PortfolioSection
                    project={"React Employee Directory"}
                    photo={"./images/Employee-Directory.png"}
                    link={"https://employee-directory-sm.herokuapp.com/"}
                />
            </div>



        </div>

    )
}

export default Portfolio
