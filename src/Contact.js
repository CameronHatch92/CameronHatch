import React from 'react';
import './contact.css';

export default function Contact(props) {
  return (
    <section className='contact-info' id='Contact'>
    <h2>Contact Info</h2>
    <p className='being-nice'>I'd love to hear from you!</p>
      <ul className='contact-list'>
        <li>
          <a href='mailto:cameronlavigne92@gmail.com' className='contact-icon' title='Email cameronlavigne92@gmail.com'>
            <i className="fa fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/cameron-hatch/' target='false' className='contact-icon' title='LinkedIn'>
            <i className="fa fa-linkedin-square"></i></a>
        </li>
        <li>
          <a href='https://github.com/CameronHatch92' target='false' className='contact-icon' title='GitHub'>
            <i className="fa fa-github-square"></i>
          </a>
        </li>
      </ul>
    </section>
  )
};