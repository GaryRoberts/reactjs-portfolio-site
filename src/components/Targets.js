import React,{Component } from 'react';
//import './css/Targets.css';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';

class Targets extends Component {
render() {

  return (
    <div data-spy="scroll" data-target="#main-navbar" data-offset="0">
      <div id="banner">
        <Banner />
      </div>
        <div id="about">
          <About />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="achievements">
          <Achievements />
        </div>

        <div id="contact">
          <Contact />
        </div>
        <Footer />

    </div>

  );
}
}

export default Targets;