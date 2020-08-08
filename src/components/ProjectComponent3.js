import React from "react";
import "../styles/ProjectComponent3.css";

class ProjectComponent3 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="projectComponent3">
        <div className="thumbnail">
          <img
            src={require("../resources/pictures/champion_thumbnail.png")}
            alt="Preview of application"
            width="400px"
            height="350px"
          />
        </div>
        <div className="content">
          <p className="projectTitle">
            Offense win games, defense win championships
          </p>
          <p className="projectDescription">
            A data science project that aims to uncover the truth behind this
            commonly spoken phrase in the sports world, specifically in the NBA.
            This project covers the different stages of a data science project
            from data gathering and cleaning to data analytics and
            visualisation.
          </p>
          <ul className="techStack">
            <span id="tech"> Tech Stack</span>
            <li>Matplotlib</li>
            <li>Seaborn</li>
            <li>Python</li>
          </ul>
          <div className="buttons">
            <button
              className="gitHubButton"
              target="_blank"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://github.com/nweiyue/defense_wins_championships_data_analysis",
                  "_blank"
                );
              }}
            >
              <i className="fab fa-github"></i> Link to GitHub
            </button>
            <button
              className="postButton"
              target="_blank"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://medium.com/@nweiyue/nba-offense-win-games-defense-win-championships-is-this-really-the-case-6faefe6d9c9b?source=friends_link&sk=a8356f7c4d3902ee01272cea463e8e88",
                  "_blank"
                );
              }}
            >
              <i className="fab fa-medium"></i> Link to Medium
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectComponent3;
