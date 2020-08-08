import React from "react";
import "../styles/Projects.css";
import ProjectComponent from "./ProjectComponent";
import ProjectComponent2 from "./ProjectComponent2";
import ProjectComponent3 from "./ProjectComponent3";
import ProjectComponent4 from "./ProjectComponent4";

class Projects extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="projects">
        <h1>PROJECTS</h1>
        <ProjectComponent />
        <ProjectComponent2 />
        <ProjectComponent3 />
        <ProjectComponent4 />
      </div>
    );
  }
}

export default Projects;
