import React from 'react'
import { Link } from "react-router-dom"; //Lets you link pages
import styles from "./NavStyles"

function Nav() {
    return (
        <nav style={styles.navStyles}>
            <Link to="/" style={styles.linkStyles}>
                <p>Home</p>
            </Link>
            <Link to="/about" style={styles.linkStyles}>
                <p>About</p>
            </Link>
            <Link to="/contact" style={styles.linkStyles}>
                <p>Contact</p>
            </Link>
        </nav>
    )
}

export default Nav
