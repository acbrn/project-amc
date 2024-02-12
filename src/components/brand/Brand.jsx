import React from 'react'
import './brand.css';
import { atlas, github, linked, slack} from './imports'


const Brand = () => {
  return (
    <div className='projectAMC__brand section-padding'>
      <div>
        <img src={atlas} alt='Atlassian' ></img>
      </div>
      <div>
        <img src={github} alt='Github' ></img>
      </div>
      <div>
        <img src={linked} alt='LinkedIn' ></img>
      </div>
      <div>
        <img src={slack} alt='Slack' ></img>
      </div>
    </div>
  )
}

export default Brand