import React, { useState } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";


function Nav(props) {
  const [click, setClick] = useState(false)
  const [activeLink, setActiveLink] = useState("");

  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(!click)
  }

  console.log(click)

  return (
      <nav className="navbar">
        <div className='navbar-container'>
          <div className='menu-icon' >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className="nav-item">
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                activeClassName='active' className='nav-links'
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                style={{ textDecoration: "none" }}
                activeClassName='active' className='nav-links'
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                style={{ textDecoration: "none" }}
                activeClassName='active' className='nav-links'
                onClick={() => {
             
                  closeMobileMenu();
                }}
              >
                PROJECTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                style={{ textDecoration: "none" }}
                activeClassName='active' className='nav-links'
                onClick={() => {
               
                  closeMobileMenu();
                }}
              >
                INFO
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;
