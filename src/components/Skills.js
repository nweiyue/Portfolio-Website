import React from "react";
import "../styles/Skills.css";

class Skills extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="skills">
        <h1>SKILLS</h1>
        <h3>Languages</h3>
        <div className="languagesIcons">
          <i className="fab fa-html5 fa-4x"></i>
          <i className="fab fa-css3-alt fa-4x"></i>
          <i className="fab fa-js-square fa-4x"></i>
          <i className="fab fa-java fa-4x"></i>
          <i className="fab fa-python fa-4x"></i>
        </div>

        <h3>Tools and Frameworks</h3>
        <div className="toolsIcons">
          <i className="fab fa-react fa-4x"></i>
          <i className="fab fa-git fa-4x"></i>
        </div>
      </div>
    );
  }
}

export default Skills;
