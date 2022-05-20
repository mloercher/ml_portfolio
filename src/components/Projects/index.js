import React from "react";
import "./index.css";
import moodRngImg from "../../assets/images/MoodRng.png";
import flightForTonight from "../../assets/images/flight-for-tonight.png";
import jsQuiz from "../../assets/images/js-quiz.png";
import helpMeRemember from "../../assets/images/note-taker.png";
import budgetApp from "../../assets/images/budgeting.png";
import workday from "../../assets/images/workday.png";
import kitchenSink from "../../assets/images/kitchenSink.png";
import NE_Projects from '../../assets/images/tinyNE.png'

import { Link } from "react-router-dom";

// add an array of objects containing project names and descriptions
// add hook to utilize useState to display project titles and images accordingly.

function Projects() {
  return (
    <div class="projContainer">
      <div class="row" id="row1">
        <div class="col-sm">
          <p>Northeast Proects, LLC</p>
          <a
            href="https://mloercher.github.io/northeast_projects"
            target="_blank"
            without
            rel="noreferrer"
          >
            <img src={NE_Projects} id="projImg" alt="moodrng screenshot" />
          </a>
          <p>
            <a
              href="https://mloercher.github.io/northeast_projects"
              target="_blank"
              without
              rel="noreferrer"
            >
              deployed app
            </a>
            ||
            <a
              href="https://github.com/mloercher/ne_projects"
              target="_blank"
              without
              rel="noreferrer"
            >
              repo
            </a>
          </p>
        </div>
        <div class="col-sm">
          <p>Kitchen Sink</p>
          <a
            href="https://kitchen-sink.herokuapp.com/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <img src={kitchenSink} id="projImg" alt="notetaker screenshot" />
          </a>
          <p>
            <a
              href="https://floating-refuge-18912.herokuapp.com/"
              target="_blank"
              without
              rel="noreferrer"
            >
              deployed app
            </a>
            ||
            <a
              href="https://github.com/mloercher/Help_Me_Remember"
              target="_blank"
              without
              rel="noreferrer"
            >
              repo
            </a>
          </p>
        </div>
        <div class="col-sm">
          <p>Flight For Tonight</p>
          <a
            href="https://mloercher.github.io/flight-for-tonight/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <img
              src={flightForTonight}
              id="projImg"
              alt="flight for tonight screenshot"
            />
          </a>
          <p>
            <a
              href="https://mloercher.github.io/flight-for-tonight/"
              target="_blank"
              without
              rel="noreferrer"
            >
              deployed app
            </a>
            ||
            <a
              href="https://github.com/mloercher/flight-for-tonight"
              target="_blank"
              without
              rel="noreferrer"
            >
              repo
            </a>
          </p>
        </div>
      </div>
      <div class="row" id="row2">
      <div class="col-sm">
          <p>MoodRng Wellness Tracker</p>
          <a
            href="https://moodrngwellnessapp.herokuapp.com/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <img src={moodRngImg} id="projImg" alt="moodrng screenshot" />
          </a>
          <p>
            <a
              href="https://moodrngwellnessapp.herokuapp.com/"
              target="_blank"
              without
              rel="noreferrer"
            >
              deployed app
            </a>
            ||
            <a
              href="https://github.com/a-breezy/MoodRng"
              target="_blank"
              without
              rel="noreferrer"
            >
              repo
            </a>
          </p>
        </div>
        <div class="col-sm">
          <p>JavaScript Quiz</p>
          <a
            href="https://mloercher.github.io/Js-code-quiz/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <img src={jsQuiz} id="projImg" alt="moodrng screenshot" />
          </a>
          <p>
            <a
              href="https://mloercher.github.io/Js-code-quiz/"
              target="_blank"
              without
              rel="noreferrer"
            >
              deployed app
            </a>
            ||
            <a
              href="https://github.com/mloercher/Js-code-quiz"
              target="_blank"
              without
              rel="noreferrer"
            >
              repo
            </a>
          </p>
        </div>
        <div class="col-sm">
          <p>PWA Bugeting App</p>
          <a
            href="https://thawing-river-03812.herokuapp.com/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <img src={budgetApp} id="projImg" alt="moodrng screenshot" />
          </a>
          <p>
            <a
              href="https://thawing-river-03812.herokuapp.com/"
              target="_blank"
              without
              rel="noreferrer"
            >
              deployed app
            </a>
            ||
            <a
              href="https://github.com/mloercher/Progressive_Budgeting"
              target="_blank"
              without
              rel="noreferrer"
            >
              repo
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
