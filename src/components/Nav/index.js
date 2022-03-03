import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav(props) {
  return (
      <nav className="flex-row px-1">
        <h2>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white" }}
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            ML web design 
          </Link>
        </h2>
        <ul className="flex-row">
          <li className="mx-2">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              about
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              projects
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;
