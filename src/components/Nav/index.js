import React from "react";
import "./index.css";
import { NavLink, Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="flex-row px-1" id="container">
      <ul className="flex-row" id="navItems">
        <li>
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            className={(navData) => (navData.isActive ? "active" : "inactive")}
            onClick={() => {
              props.setBackgroundColor("#C2D897");
              props.setNavColor("#C2D897");
            }}
          >
            HOME
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            to="/about"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            onClick={() => {
              props.setBackgroundColor("#C2D897");
              props.setNavColor("#C2D897");
            }}
          >
            ABOUT
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            to="/projects"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            onClick={() => {
              props.setBackgroundColor("#EEF4D4");
              props.setNavColor("#EEF4D4");
            }}
          >
            PROJECTS
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            to="/contact"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            onClick={() => {
              props.setBackgroundColor("#C2D897");
              props.setNavColor("#C2D897");
            }}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
