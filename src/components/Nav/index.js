import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <header className="flex-row px-1">
      <nav>
        <h2>
          <a href="/">ML web design {props.anotherProp}</a>
        </h2>
        <ul className="flex-row">
          <li className="mx-2">
            <Link
              to="/about"
              // onClick={() => {
              //   props.setter("About");
              // }}
            >
              About me
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/projects"
              // onClick={() => {
              //   props.setter("Projects");
              // }}
            >
              Projects
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/contact"
              // onClick={() => {
              //   props.setter("Contact");
              // }}
            >
              Contact
            </Link>
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
