import React from 'react'
import {NavLink} from "react-router-dom"

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
         <div style={{marginLeft: '1em'}} className="navbar-brand">
             Resume
         </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    aria-current="page"
                    exact to="/"
                >Profile

                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/education"
                >Education

                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/skills"
                >Skills

                </NavLink>
            </li>
        </ul>
    </nav>
)