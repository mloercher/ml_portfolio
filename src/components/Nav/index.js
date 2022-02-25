import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  return (
    <header className="flex-row px-1">
      <nav>
        <h2>
          <a href="/">ML web design {props.anotherProp}</a>
        </h2>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              href="#about"
              onClick={() => {
                props.setter("About");
              }}
            >
              About me
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#projects"
              onClick={() => {
                props.setter("Projects");
              }}
            >
              Projects
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#contact"
              onClick={() => {
                props.setter("Contact");
              }}
            >
              Contact
            </a>
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
