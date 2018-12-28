import React, { Component } from 'react';
import './app.css';
import NavBar from './Nav-Bar';
import Contact from './Contact';
import AboutMe from './AboutMe';
import ProjectHolder from './ProjectHolder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <AboutMe />
          <ProjectHolder/>
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
