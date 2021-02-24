import React from 'react'

const HeaderStyles = (props) => {
    return (
        <header>
            <h1>
                {props.title}
            </h1>
            <hr></hr>
        </header>
    )
}

export default HeaderStyles
