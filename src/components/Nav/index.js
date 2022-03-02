import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav(props) {
  return (
    <header className="flex-row px-1">
      <nav>
        <h2>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white" }}
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            ML web design {props.anotherProp}
          </Link>
        </h2>
        <ul className="flex-row">
          <li className="mx-2">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About me
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Projects
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Contact
            </NavLink>
          </li>
          {/* {
            categories.map((category) => (
              <li className="mx-1" key={category.name}>
              </li>
            ))
          } */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
