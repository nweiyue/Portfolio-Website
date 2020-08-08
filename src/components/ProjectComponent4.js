import React from "react";
import "../styles/ProjectComponent4.css";

class ProjectComponent4 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="projectComponent4">
        <div className="thumbnail">
          <img
            src={require("../resources/pictures/RemindMe_thumbnail.png")}
            alt="Preview of application"
            width="400px"
            height="350px"
          />
        </div>
        <div className="content">
          <p className="projectTitle">RemindMe Bot</p>
          <p className="projectDescription">
            A simple python telegram bot that allows users to set reminders base
            on a timer.
          </p>
          <ul className="techStack">
            {" "}
            <span id="tech"> Tech Stack</span>
            <li>python-telegram-bot API</li>
            <li>Python</li>
          </ul>
          <div className="buttons">
            <button
              className="gitHubButton"
              target="_blank"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://github.com/nweiyue/remindMeBot", "_blank");
              }}
            >
              <i className="fab fa-github"></i> Link to GitHub
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectComponent4;
