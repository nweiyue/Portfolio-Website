import React from "react";
import "../styles/Home.css";

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="home">
        <header className="hello">
          <div className="intro">
            Hello, I'm
            <span id="name"> Ngoh Wei Yue.</span>
            <p id="welcome">Welcome to my site.</p>
          </div>
        </header>
      </div>
    );
  }
}
export default Home;
