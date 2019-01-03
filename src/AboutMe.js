import React from 'react';
import './aboutme.css';

export default function AboutMe(props) {
  return (
    <section className='about-me'>
      <h2 id='AboutMe'>About Me</h2>
      <article className='info-holder'>
        <p className='hello'>Hi! I'm Cameron.</p>
        <p className='bio'>
          I really love problem solving, learning new things, working
          with awesome people,
          and building cool stuff. I love programming because it allows
          me to do all of those things at the same time!
          When I'm not coding, I like to crochet, read up on real
        analysis, or play <a href='https://www.zmangames.com/en/games/pandemic/'>Pandemic</a>.
      </p>
      </article>
    </section>
  )
}