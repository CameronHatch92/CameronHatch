import React, { Component } from 'react';
import './app.css';
import Header from './header';
import Contact from './Contact';
import AboutMe from './AboutMe';
import ProjectHolder from './ProjectHolder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <header className="App-header">
          Cameron Hatch
        </header>
        <AboutMe/>
        <ProjectHolder />
        <Contact/>
      </div>
    );
  }
}

export default App;
