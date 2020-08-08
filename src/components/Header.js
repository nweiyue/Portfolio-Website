import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/Header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };

    // handleClick = () => {
    //   this.setState({
    //     clicked: !this.state.clicked })
    // }
  }

  // openNavBar() {
  //   document.getElementsByClassName("links")[0].classList.toggle("active")
  // }

  render() {
    return (
      <div>
        <header className="navBar">
          <nav>
            <label className="logo">
              <a href="#home">
                <img
                  src={require("../resources/pictures/WEIYUE copy.png")}
                  alt="logo"
                />
              </a>
            </label>
            <a href="#" className="toggle-button">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a>
            <div className="links">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
