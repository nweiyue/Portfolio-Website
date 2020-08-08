import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./components/About"
import Header from "./components/Header"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
