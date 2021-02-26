import React from 'react'

const Kitten = (props) => {
    return (

        <div className="col-md-3">
            <img src={props.image} alt={props.alt} className="img-thumbnail"></img>
        </div>

    )
}

export default Kitten
