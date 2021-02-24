import React from 'react'
import { Link } from "react-router-dom"; //Lets you link pages
import styles from "./NavStyles"

function Nav() {
    return (
        <nav style={styles.navStyles}>
            <h1>Sean Melody</h1>
            <Link to="/" style={styles.linkStyles}>
                <p>Home</p>
            </Link>
            <Link to="/portfolio" style={styles.linkStyles}>
                <p>Portfolio</p>
            </Link>
            <Link to="/contact" style={styles.linkStyles}>
                <p>Contact</p>
            </Link>
        </nav>
    )
}

export default Nav
