import React from 'react'
import './projectamc.css';
import { Feature } from '../../components';


const ProjectAMC = () => {
  return (
    <div className='projectAMC__whatPAMC section__margin' id='PAMC'>
      <div className='projectAMC__whatPAMC-feature'>
        <Feature title='Who I am' text= 'A self-taught tech developer specializing in frontend, backend, and UI/UX design. Currently mastering React, JavaScript aficionado and a recent graduate of Savvy Coders Boot Camp. Eager to collaborate and contribute, I bring dedication and resourcefulness to the tech world. Lets connect for exciting opportunities!'/>
        </div>
      <div className='projectAMC__whatPAMC-heading'>
        <h1 className='gradient__text'>“Software and cathedrals are much the same; first we build them, then we pray.” 

        </h1>
          <p>by Anonymous </p>
      </div>
      <div className='projectAMC__whatPAMC-container'>
        <Feature title=''/>
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default ProjectAMC