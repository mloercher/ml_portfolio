import React from "react";
import "./index.css";
import moodRngImg from "../../assets/MoodRng.png";

// add an array of objects containing project names and descriptions
// add hook to utilize useState to display project titles and images accordingly.

function Projects(props) {
  return (
    <div class="projContainer">
      <div class="row" id="row1">
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

{
  /* <div className="proj-container"
id="carouselExampleIndicators"
className="carousel slide"
data-ride="carousel"
>
<ol className="carousel-indicators">
  <li
    data-target="#carouselExampleIndicators"
    data-slide-to="0"
    className="active"
  ></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div className="carousel-inner">
  <div className="carousel-item active">
    <img className="d-block w-100" src={projectImage} alt="First slide" />
      <h5>Proj 1</h5>
      <p>This is the description of the proj</p>
  </div>
  <div className="carousel-item">
    <img
      className="d-block w-100"
      src={projectImage}
      alt="Second slide"
    />
    <div className="carousel-caption d-none d-md-block">
        <h5>Proj 1</h5>
        <p>This is the description of the proj</p>
    </div>
  </div>
  <div className="carousel-item">
    <img className="d-block w-100" src={projectImage} alt="Third slide" />
    <div className="carousel-caption d-none d-md-block">
      <h5>Proj 2</h5>
      <p>This is the description of the proj</p>
    </div>
  </div>
</div>
<a
  className="carousel-control-prev"
  href="#carouselExampleIndicators"
  role="button"
  data-slide="prev"
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="sr-only">Previous</span>
</a>
<a
  className="carousel-control-next"
  href="#carouselExampleIndicators"
  role="button"
  data-slide="next"
>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="sr-only">Next</span>
</a>
</div> */
}
