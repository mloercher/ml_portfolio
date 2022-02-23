import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  // const categories = [
  //     {name: 'about', description:'who am i?'},
  //     {name: 'projects', description: 'links to past web dev projects'},
  //     {name: 'contact', description: 'entry field for contact'}
  // ];

  return (
    <header className="flex-row px-1">
      <nav>
        <h2>
          <a href="/">ML web design</a>
        </h2>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li className="mx-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact</a>
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
