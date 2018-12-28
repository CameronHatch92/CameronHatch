import React from 'react';
import Project from './Project';

export default function ProjectHolder(props) {
  return (
    <div>
      <h2>Projects</h2>
      <Project 
        title='Buvie'
        description='An app that lets users find people to watch their favorite movies with!'
        url='https://buvie.netlify.com/'
        screenshot='images/buvieShot.png'
        github='https://github.com/thinkful-ei24/buvie-client'
        techDesc='This app was built with React and Redux on the front end and Node, Express,
        and MongoDB on the back end. We also used websockets and location APIs.'
      />
      <Project 
        title='Echar Agua Al Mar'
        description='An app that helps users learn Spanish using spaced repetition!
        Users are initially given 10 flash cards with Spanish words, but can add as many as
        they want!'
        url='https://spaced-repetition-cc.herokuapp.com/'
        screenshot='images/dashboard-echar.png'
        github='https://github.com/thinkful-ei24/cameron-colin-spaced-repetition-client'
        techDesc='This app was built with React and Redux on the front end and Node, Express,
        and MongoDB on the back end.'
      />
      <Project 
        title='Bachelorette Fantasy League'
        description='An app that allows users to guess who goes home each week on The Bachelorette!
        Users will get a score each week and can see how they stack up against other Bachelorette fans!'
        url='https://bachelorette-fantasty-league.herokuapp.com/'
        screenshot='images/BachelorShot.png'
        github='https://github.com/thinkful-ei24/cameron-fullstack-capstone-client'
        techDesc='This app was built with React and Redux on the front end and Node, Express,
        and MongoDB on the back end.'
      />
    </div>
  )
}