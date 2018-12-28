import React from 'react';
import './header.css';

export default function Header(props){
  return (
    <nav role='navigation'>
    <div className='icon-container'>
      <a href='https://www.linkedin.com/in/cameron-hatch/' target='false' className='nav-icon' title='LinkedIn'>
        <i className="fa fa-linkedin-square"></i>
      </a>
      <a href='https://github.com/CameronHatch92' target='false' className='nav-icon' title='GitHub'>
        <i className="fa fa-github-square"></i>
      </a>
      <a href='images/Resume.pdf' target='false' className='nav-icon' title='Resume'>
        <i className="fa fa-file-text"></i>
      </a>
    </div>
  </nav>
  )
}