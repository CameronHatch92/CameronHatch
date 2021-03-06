import React from 'react';
import './aboutme.css';

export default function AboutMe(props) {
  return (
    <section className='about-me'>
      <h2 id='AboutMe'>Hi! I'm Cameron.</h2>
      <article className='info-holder'>
        <img src='images/Cameron.jpg' className='my-picture' alt='Cameron'></img>
        <p className='bio'>
          I'm a mathematician turned full-stack developer. 
          After getting a masters degree in pure math, I wanted to do something
           that would let me use all of the problem solving and critical thinking
           skills I learned while studying math, but maybe something that was a little
           more useful and employable than abstract algebra and topology. Enter programming!
          <br/>
          <br/>
          What I love about coding is that it incorporates all of the things I love about
           math, while also allowing me to <a href='#Projects'>build really cool things</a>, learn 
           constantly, and work with a lot of awesome developers. 
            <br/>
          <br/>   
          When I'm not coding, I like to crochet, read up on real
        analysis, or play <a href='https://www.zmangames.com/en/games/pandemic/'>Pandemic</a>.
      </p>
      </article>
    </section>
  )
}