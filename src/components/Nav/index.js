import React from "react";
import {NavLink, Link } from "react-router-dom";

function Nav(props) {
  return (
    <header className="flex-row px-1">
      <nav>
        <h2>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }} activeStyle= {{color:'#FF00CC' }}>ML web design {props.anotherProp}</Link>
        </h2>
        <ul className="flex-row">
          <li className="mx-2">
            <NavLink style={{ textDecoration: 'none', color: 'white' }} activeStyle={{ color:'red' }}to="/about">
              About me
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              style={{ textDecoration: 'none', color: 'white' }}to="/projects" 
              // onClick={() => {
              //   props.setter("Projects");
              // }}
            >
              Projects
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              style={{ textDecoration: 'none', color: 'white' }} to="/contact"
              // onClick={() => {
              //   props.setter("Contact");
              // }}
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
