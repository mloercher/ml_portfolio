import React from "react";
import aboutImage from '../../assets/images/croppedOption1.png'
import "./index.css";

function About() {
  return (
    <section>
      {/* <h1 id="about">Who am I?</h1> */}
        <img src={aboutImage} id="aboutImage" alt="cover" />
      <div className="aboutContainer">
        <p className="aboutTxt">
          Hello! My name is Mark Loercher and I am a Musician, Producer,
          Cat-Dad, New Yorker and Web Developer. I am currently enrolled in
          Columbia University's Web Developing Bootcamp where I am honing my web
          dev skills by learning the most widely used languages. I look forward
          to continuing the journey!
        </p>
      </div>
    </section>
  );
}

export default About;
