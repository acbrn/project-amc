import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Email:',
    text: 'coburn188@gmail.com'
  },
  {
    title: 'Github:',
    text: 'http://github.com/acbrn'
  },
  {
    title: 'LinkedIn:',
    text: 'http://linkedin.com/in/andrew-coburn8'
  }
]

const Features = () => {
  return (
    <div className='PAMC__features section__padding' id='features'>
      <div className='PAMC__features-heading'>
        <h1 className='gradient__text'>Full Stack Developer & USAF Veteran | Learning More Everyday
        </h1>
          <p>
            Contact me
          </p>
      </div>
      <div className='PAMC__features-container'>
        {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} 
        />)
        )}
      </div>
    </div>
  )
}

export default Features