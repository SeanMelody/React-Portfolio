// import all the Goodness
import React from 'react'
import PortfolioSectionStyles from './PortfolioSectionStyles'

// bring in props to display all the content
const PortfolioSection = (props) => {
    return (
        // Each div will dispaly the photo, and the project title and github link via props
        <div style={PortfolioSectionStyles.Padding} className="col-md-4 portfolio-img text-center">
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={props.photo} alt={props.project} className="img-thumbnail"></img>
            </a>
            {/* row for the title and link */}
            <div className="row">
                <div className="col-md-12">
                    <a style={PortfolioSectionStyles.LinkTitleStyles} href={props.link} alt={props.project} target="_blank" rel="noreferrer">
                        <h4 style={PortfolioSectionStyles.TitleFont}>{props.project}</h4>
                    </a>
                </div>
            </div>
            {/* Row for github link */}
            <div className="row">
                <div className="col-md-12">
                    <a style={PortfolioSectionStyles.LinkTitleStyles} href={props.github} alt="github" target="_blank" rel="noreferrer">
                        <h4 style={PortfolioSectionStyles.GitHubFont}>GitHub Link</h4>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default PortfolioSection


