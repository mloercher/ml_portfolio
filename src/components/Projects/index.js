import React from "react";
import "./index.css";
import moodRngImg from "../../assets/MoodRng.png";
import { Link } from "react-router-dom";

// add an array of objects containing project names and descriptions
// add hook to utilize useState to display project titles and images accordingly.

function Projects(props) {
  return (
    <div class="projContainer">
      <div class="row" id="row1">
        <div class="col-sm">
          <p>MoodRng Wellness Tracker</p>
          <a href="https://moodrngwellnessapp.herokuapp.com/" target="_blank" without rel="noreferrer">
          <img src={moodRngImg} id="projImg" alt="moodrng screenshot" />
          </a>
        </div>
        <div class="col-sm">
          <p>MoodRng Wellness Tracker</p>
          <img id="projImg" src={moodRngImg} alt="moodrng screenshot"></img>
        </div>
        <div class="col-sm">
          <p>MoodRng Wellness Tracker</p>
          <img id="projImg" src={moodRngImg} alt="moodrng screenshot"></img>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <p>MoodRng Wellness Tracker</p>
          <img id="projImg" src={moodRngImg} alt="moodrng screenshot"></img>
        </div>
        <div class="col-sm">
          <p>MoodRng Wellness Tracker</p>
          <img id="projImg" src={moodRngImg} alt="moodrng screenshot"></img>
        </div>
        <div class="col-sm">
          <p>MoodRng Wellness Tracker</p>
          <img id="projImg" src={moodRngImg} alt="moodrng screenshot"></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
