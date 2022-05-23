import React from "react";
import aboutImage from '../../assets/images/croppedOption1.png'
import "./index.css";

function About() {
  return (
    <div className="about-cont">
      {/* <h1 id="about">Who am I?</h1> */}
        <img src={aboutImage} id="aboutImage" alt="cover" />
      <div className="aboutContainer">
        <p className="aboutTxt">
          Hello! My name is Mark Loercher and I am a Musician, Producer,
          Cat-Dad, New Yorker and Web Developer. As a recent graduate of
          Columbia University's Full Stack Web Development Bootcamp, I have been applying my skillset to various projects ranging from sidescrollers to business contact pages. I am always looking to collaborate on new and interesting projects.
        </p>
      </div>
    </div>
  );
}

export default About;
