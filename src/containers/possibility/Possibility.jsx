import React from 'react'
import projectAMC from '../../assets/png/projectamc-high-resolution-logo-transparent.png';
import './possibility.css';


const Possibility = () => {
  return (
    <div className='pamc__possibility section__padding' id='possibility'>
      <div className='pamc__possibility-image'>
        <img src={projectAMC}   />
      </div>
      <div className='pamc__possibilty-content'>
        <h4>More about Me</h4>
        <h1 className='gradient__text'>Hobbies</h1>
        <p>I enjoy reading, playing with my family, gaming on PC or XBOX. I try to keep up on current events, learn something in tech either pc, cellular, or gaming. I enjoy going to rock concerts
        </p>
        <h4>Interesting Facts
          <p>Mercury, not Venus, is the closest planet to Earth on average.</p>
        </h4>
      </div>
    </div>
  )
}

export default Possibility