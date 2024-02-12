import React from 'react'
import people from '../../assets/png/projectamc-high-resolution-logo-transparent.png';
import ice from '../../assets/png/iceice.png'
import './header.css';


const Header = () => {
  return (
    <div className='projectAMC__header section__padding' id='home'>
      <div className='projectAMC__header-content'>
        <h1 className='gradient__text'>Welcome to ProjectAMC! The project I made using React</h1>
        <p>Sample Text here</p>
        
        <div className='projectAMC__header-content__input'>
          <input type='email' placeholder='Your email address' />
          <button type='button'> Get Started </button>
          </div>
          
          <div className='projectAMC__header-content__people'>
            <img src= {people} alt='ProjectAMC Logo' />
            <p>My page</p>
          </div>
      </div>
            <div className='projectAMC__header-image'>
                <img src= { ice } alt='ice picture' />
            </div>
    </div>
  )
}

export default Header