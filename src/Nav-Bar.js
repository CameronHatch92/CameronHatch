import React from 'react';
import './navBar.css';

export default class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      collapsed: true
    }
  }

  toggleMenu(){
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render(){
    let hamburgerMenu;
    let responsiveClass = '';
    if(!this.state.collapsed){
      responsiveClass = 'responsive';
    }
    if(!this.state.collapsed){
      hamburgerMenu = 
      <button>

      </button>
    }
    return(
      <nav role='navigation'>
        <h1>Cameron Hatch</h1>
        <div className='links'>
          <a href={void(0)} id="icon" onClick={() => this.toggleMenu()}>
            <i className="fa fa-bars"></i>
          </a>
          <a href='#AboutMe' className={responsiveClass}>About Me</a> 
          <a href='#Projects' className={responsiveClass}>Projects</a>
          <a href='#Contact' className={responsiveClass}>Contact Info</a>
          <a href='images/CameronHatch_Resume.pdf' target='false' className={responsiveClass}>Resume</a>
        </div>
      </nav>
    )
  }
}