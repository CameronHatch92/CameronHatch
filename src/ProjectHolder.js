import React from 'react';
import Project from './Project';

export default function ProjectHolder(props) {
  return (
    <Project 
      title='Buvie'
      description='An app that lets users find people to watch their favorite movies with!'
      url='https://buvie.netlify.com/'
      screenshot='images/buvieShot.png'
    />
  )
}