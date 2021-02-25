import React from 'react'

const PortfolioSection = (props) => {
    return (

        <div class="col-md-4 portfolio-img text-center">
            <img src={props.photo} alt={props.project} class="img-thumbnail"></img>
            <div class="row">
                <div class="col-md-12 social-media-link">
                    <a href={props.link} alt={props.project} target="_blank" rel="noreferrer">
                        <h4>{props.project}</h4>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 social-media-link">
                    <a href={props.github} alt="github" target="_blank" rel="noreferrer">
                        <h4>GitHub Link</h4>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default PortfolioSection


