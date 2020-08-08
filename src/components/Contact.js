import React from "react";
import "../styles/Contact.css";

class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="contact">
        <h1>CONTACT</h1>
        <div className="socialIcons">
          <a href="https://github.com/nweiyue" target="_blank">
            <i class="fab fa-github-square fa-3x"></i>
          </a>
          <a href="https://www.linkedin.com/in/weiyue/" target="_blank">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://t.me/weiyuee" target="_blank">
            <i class="fab fa-telegram-plane fa-3x"></i>
          </a>
          <a href="https://www.instagram.com/weiyueeee/" target="_blank">
            <i class="fab fa-instagram-square fa-3x"></i>
          </a>
          <a href="mailto:weiyue16@gmail.com" target="_blank">
            <i class="fas fa-envelope-square fa-3x"></i>
          </a>
        </div>
        <footer>
          <p>
            NGOH WEI YUE <span>©2020</span>
          </p>
        </footer>
      </div>
    );
  }
}

export default Contact;
