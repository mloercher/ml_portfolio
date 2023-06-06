import React from "react";
import "./index.css";
import moodRngImg from "../../assets/images/newmood.png";
import flightForTonight from "../../assets/images/newflight.png";
import jsQuiz from "../../assets/images/newjs.png";
import kitchenSink from "../../assets/images/newkitchen.png";
import NE_Projects from '../../assets/images/newne.png'
import just_the_news from '../../assets/images/justthenews.png'
import Project from "./Project";

// add an array of objects containing project names and descriptions
// add hook to utilize useState to display project titles and images accordingly.



function Projects() {
  return (
    <div className="projContainer">
      {/* <div className="rowContainer"> */}
        <div className="row" id="row1">
          <Project
            name="NORTHEAST PROJECTS (in development)"
            link="https://mloercher.github.io/northeast_projects"
            img={NE_Projects}
            alt="ne projects logo"
            git="https://github.com/mloercher/northeast_projects"
          />
          <Project
            name="JUST THE NEWS (in development)"
            link="https://github.com/mloercher/just_the_news"
            img={just_the_news}
            alt="just the news projects logo"
            git="https://github.com/mloercher/just_the_news"
          />
        </div>
        <div className="row" id="row2">
          <Project
            name="KITCHEN SINK "
            link="https://kitchen-sink.herokuapp.com/"
            img={kitchenSink}
            alt="kitchen sink projects logo"
            git="https://github.com/antger78/kitchen_sink"
          />
          <Project
            name="FLIGHT FOR TONIGHT"
            link="https://mloercher.github.io/flight-for-tonight/"
            img={flightForTonight}
            alt="flight for tonight projects logo"
            git="https://github.com/mloercher/flight-for-tonight"
          />
          <Project
            name="MOODRNG"
            link="https://moodrngwellnessapp.herokuapp.com/"
            img={moodRngImg}
            alt="mood ring projects logo"
            git="https://moodrngwellnessapp.herokuapp.com/"
          />
          <Project
            name="JAVASCRIPT QUIZ"
            link="https://mloercher.github.io/Js-code-quiz/"
            img={jsQuiz}
            alt="javaScript quiz projects logo"
            git="https://mloercher.github.io/Js-code-quiz/"
          />
        </div>
      {/* </div> */}
    </div>
  );
}

export default Projects;
