import React from 'react';
import './header.css';

export default function Header(props){
  return (
    <nav role='navigation'>
    <div class='icon-container'>
      <a href='https://www.linkedin.com/in/cameron-hatch/' target='false' class='nav-icon' title='LinkedIn'>
        <i class="fa fa-linkedin-square"></i>
      </a>
      <a href='https://github.com/CameronHatch92' target='false' class='nav-icon' title='GitHub'>
        <i class="fa fa-github-square"></i>
      </a>
      <a href='images/Resume.pdf' target='false' class='nav-icon' title='Resume'>
        <i class="fa fa-file-text"></i>
      </a>
    </div>
  </nav>
  )
}