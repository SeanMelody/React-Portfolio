// import all the Goodness
import React from 'react'

// bring in props to display all the content
const PortfolioSection = (props) => {
    return (
        // Each div will dispaly the photo, and the project title and github link via props
        <div className="col-md-4 portfolio-img text-center">
            <img src={props.photo} alt={props.project} className="img-thumbnail"></img>
            {/* row for the title and linke */}
            <div className="row">
                <div className="col-md-12 social-media-link">
                    <a href={props.link} alt={props.project} target="_blank" rel="noreferrer">
                        <h4>{props.project}</h4>
                    </a>
                </div>
            </div>
            {/* Row for github link */}
            <div className="row">
                <div className="col-md-12 social-media-link">
                    <a href={props.github} alt="github" target="_blank" rel="noreferrer">
                        <h4>GitHub Link</h4>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default PortfolioSection


