import React, { useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";


function Nav(props) {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(!click)
  }

  return (
    <>
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
                activeclassname='active' className='nav-links'
                onClick={() => {
                  props.setBackgroundColor("#EEF4D4");
                  props.setNavColor("#EEF4D4");
                  props.setFooterColor("#EEF4D4");
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
                activeclassname='active' className='nav-links'
                onClick={() => {
                  props.setBackgroundColor("#EEF4D4");
                  props.setNavColor("#EEF4D4");
                  props.setFooterColor("#EEF4D4");
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
                activeclassname='active' className='nav-links'
                onClick={() => {
                  props.setBackgroundColor("#C2D897");
                  props.setNavColor("#C2D897");
                  props.setFooterColor("#C2D897");
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
                activeclassname='active' className='nav-links'
                onClick={() => {
                  props.setBackgroundColor("#EEF4D4");
                  props.setNavColor("#EEF4D4");
                  props.setFooterColor("#EEF4D4");
                  closeMobileMenu();
                }}
              >
                INFO
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
