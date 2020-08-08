import React from "react";
import "../styles/ProjectComponent2.css";

class ProjectComponent2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="projectComponent2">
        <div className="thumbnail">
          <img
            src={require("../resources/pictures/snake_thumbnail.png")}
            alt="Preview of application"
            width="400px"
            height="350px"
          />
        </div>
        <div className="content">
          <p className="projectTitle">Snake</p>
          <p className="projectDescription">
            {" "}
            A copy of the classic game using plain HTML, CSS and vanilla JS.
          </p>
          <ul className="techStack">
            {" "}
            <span id="tech"> Tech Stack</span>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className="buttons">
            <button
              className="gitHubButton"
              target="_blank"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://github.com/nweiyue/Snake", "_blank");
              }}
            >
              <i className="fab fa-github"></i> Link to GitHub
            </button>
            <button
              className="gameButton"
              target="_blank"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://nweiyue.github.io/Snake/", "_blank");
              }}
            >
              <i className="fas fa-gamepad"></i> Link to Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectComponent2;
