import React from "react";
import "./index.css";
import { NavLink, Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="flex-row px-1" id="container">
      <h2>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className={(navData) => (navData.isActive ? "active" : "inactive")}
          onClick={() => {
            props.setBackgroundColor("green");
          }}
        >
          ML web design
        </Link>
      </h2>
      <ul className="flex-row" id="navItems">
        <li className="mx-2">
          <NavLink
            to="/about"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            onClick={() => {
              props.setBackgroundColor("green");
            }}
          >
            about
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            to="/projects"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            onClick={() => {
              props.setBackgroundColor("red");
            }}
          >
            projects
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            to="/contact"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            onClick={() => {
              props.setBackgroundColor("blue");
            }}
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
