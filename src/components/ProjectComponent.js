import React from "react";
import "../styles/ProjectComponent.css";

class ProjectComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="projectComponent">
        <div className="thumbnail">
          <img
            src={require("../resources/pictures/lastMinute_thumbnail.png")}
            alt="Preview of application"
            width="400px"
            height="350px"
          />
        </div>
        <div className="content">
          <p className="projectTitle">lastMinute</p>
          <p className="projectDescription">
            lastMinute is an all-in-one android travel application that
            redefines users' travel experiences by eliminating travel
            inconveniences. This application integrates an itinerary planner,
            diary, map and currency converter into one platform. This project
            was done by a group of 2 as part of our CP2106 Orbital project.
          </p>
          <ul className="techStack">
            {" "}
            <span id="tech"> Tech Stack</span>
            <li>Android Studio</li>
            <li>Firebase</li>
            <li>Java</li>
          </ul>
          <div className="buttons">
            <button
              className="gitHubButton"
              target="_blank"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://github.com/LeeMingDe/Orbital2020",
                  "_blank"
                );
              }}
            >
              <i className="fab fa-github"></i> Link to GitHub
            </button>

            <button
              className="videoButton"
              target="_blank"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.youtube.com/watch?v=Jg2CCN1vddk&feature=youtu.be",
                  "_blank"
                );
              }}
            >
              <i className="fab fa-youtube"></i> Link to Youtube
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectComponent;
