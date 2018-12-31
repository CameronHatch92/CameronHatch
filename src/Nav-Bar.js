import React from 'react';
import './navBar.css';

export default function NavBar(props){
  return(
    <nav role='navigation'>
      <h1>Cameron Hatch</h1>
      <div className='links'>
        <a href='#AboutMe'>About Me</a> 
        <a href='#Projects'>Projects</a>
        <a href='#Contact'>Contact Info</a>
        <a href='images/CameronHatch_Resume.pdf' target='false'>Resume</a>
      </div>
    </nav>
  )
}