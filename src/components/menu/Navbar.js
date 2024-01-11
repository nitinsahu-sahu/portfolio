import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="navbar navbar-light  mt-4">
            <div className="container-fluid justify-content-between">
                <NavLink className="navbar-brand wc fw-bold">
                    <span className='ns-logo rounded-pill border border-4 m-2'>NS</span>
                    Nitin Sahu
                </NavLink>
                <div id="navbarText">
                    <ul className="d-flex me-auto mb-2 mb-lg-0 fs-5 wc">
                        <li className="nav-item">
                            <NavLink className="nav-link wc" aria-current="page" to='/'>About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link wc" to="resume">Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link wc" to="portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link wc" to="contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default memo(navbar)