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

            </div>
        </div>

    )
}

export default Portfolio
