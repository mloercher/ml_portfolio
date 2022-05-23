import React from "react";
import "./index.css";
import moodRngImg from "../../assets/images/tinyMoodRng.png";
import flightForTonight from "../../assets/images/tinyflight-for-tonight.png";
import jsQuiz from "../../assets/images/tinyjs-quiz.png";
import budgetApp from "../../assets/images/tinybudgeting.png";
import kitchenSink from "../../assets/images/tinykitchenSink.png";
import NE_Projects from '../../assets/images/tinyNE.png'
import Project from "./Project";

// add an array of objects containing project names and descriptions
// add hook to utilize useState to display project titles and images accordingly.

function Projects() {
  return (
    <div class="projContainer">
      <div class="row" id="row1">
        <Project
          name="Northeast Projects"
          link="https://mloercher.github.io/northeast_projects"
          img={NE_Projects}
          alt="ne projects logo"
          git="https://github.com/mloercher/northeast_projects"
        />
        <Project
          name="Kitchen Sink "
          link="https://kitchen-sink.herokuapp.com/"
          img={kitchenSink}
          alt="kitchen sink projects logo"
          git="https://github.com/antger78/kitchen_sink"
        />
        <Project
          name="Flight for Tonight"
          link="https://mloercher.github.io/flight-for-tonight/"
          img={flightForTonight}
          alt="flight for tonight projects logo"
          git="https://github.com/mloercher/flight-for-tonight"
        />
      </div>
      <div class="row" id="row2">
        <Project
          name="MoodRng Wellness Tracker"
          link="https://moodrngwellnessapp.herokuapp.com/"
          img={moodRngImg}
          alt="mood ring projects logo"
          git="https://moodrngwellnessapp.herokuapp.com/"
        />
        <Project
          name="JavaScript Quiz"
          link="https://mloercher.github.io/Js-code-quiz/"
          img={jsQuiz}
          alt="javaScript quiz projects logo"
          git="https://mloercher.github.io/Js-code-quiz/"
        />
        <Project
          name="PWA Bugeting App"
          link="https://thawing-river-03812.herokuapp.com/"
          img={budgetApp}
          alt="budgeting app project logo"
          git="https://github.com/mloercher/Progressive_Budgeting"
        />
      </div>
    </div>
  );
}

export default Projects;
