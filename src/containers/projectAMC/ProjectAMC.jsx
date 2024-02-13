import React from 'react'
import './projectamc.css';
import { Feature } from '../../components';


const ProjectAMC = () => {
  return (
    <div className='projectAMC__whatPAMC section__margin' id='wpamc'>
      <div className='projectAMC__whatPAMC-feature'>
        <Feature title='Who I am' text= 'A self-taught tech developer specializing in frontend, backend, and UI/UX design. Currently mastering React, JavaScript aficionado and a recent graduate of Savvy Coders Boot Camp. Eager to collaborate and contribute, I bring dedication and resourcefulness to the tech world. Lets connect for exciting opportunities!'/>
        </div>
      <div className='projectAMC__whatPAMC-heading'>
        <h1 className='gradient__text'>“Software and cathedrals are much the same; first we build them, then we pray.” 

        </h1>
          <p>by Anonymous </p>
      </div>
      <div className='projectAMC__whatPAMC-container'>
        <Feature title='First Project' text="
Completing the 12-week boot camp at Savvy Coders was crucial for creating my first Single Page Application (SPA) project, as drawing inspiration from the solar system and conceptualizing missions to planets reinforced my commitment to pursuing dreams, enhancing both coding skills and belief in turning aspirations into tangible projects"/>
        <Feature title='Passionate fueled by curiosity' text="
Immersed in the ever-evolving world of technology, my passion for learning software development is fueled by an insatiable curiosity, finding joy in unraveling the complexities of programming languages, crafting solutions that push boundaries, and contributing to the dynamic landscape of technology"/>
        <Feature title='Determined problem solving' text="In coding, determination is essential, as it drives a dedicated coder to relentlessly pursue solutions, embrace complex challenges as learning opportunities, and view each problem as a chance to grow" />
      </div>
    </div>
  )
}

export default ProjectAMC