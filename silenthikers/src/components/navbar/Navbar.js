import "./navbar.css";
import { Link } from 'react-router-dom'

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-buttons">
            <Link className="nav-links" to={"/"}>
                <h3 className="nav-buttons">Home</h3>
            </Link>
            <Link className="nav-links" to={"/hikes"}>
                <h3 className="nav-buttons">Upcoming Hikes</h3>
            </Link>
            <Link className="nav-links" to={"/images"}>
                <h3 className="nav-buttons">Photo Gallery</h3>
            </Link>
            <Link className="nav-links" to={"/F&Q"}>
                <h3 className="nav-buttons">Frequently Asked Questions</h3>
            </Link>
            <Link className="nav-links" to={"/ContactUs"}>
                <h3 className="nav-buttons">Register</h3>
            </Link>
        </div>
         <h3 className="navbar-logo">Silent<span>H</span>ikerS</h3>
    </nav>
  )
}

export default Navbar