import React from 'react'
import logo from '../../assets/png/projectamc-high-resolution-logo-transparent.png'
import './footer.css';


const Footer = () => {
  return (
    <div className='pamc__footer section__padding'>
      <div className='pamc__footer-heading'>
        <h1 className='gradient__text'>Thank You! Please reach out if you are looking for a software developer</h1>
      </div>
      <div className='pamc__footer-btn'>
        <p>Still Not A Button</p>
      </div>
      
      <div className='pamc__footer-links'>
        <div className='pamc__footer-links_logo'>
          <img src={logo} alt='ProjectAMC' />
          <p>223 Dapple Ct Iowa City IA</p>
        </div>
        
        <div className='pamc__footer-links_div'>
          <h4>Links</h4>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
        </div>
        <div className='pamc__footer-links_div'>
          <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
        </div>
        <div className='pamc__footer-links_div'>
          <h4>Reach Out</h4>
            <p>123 Main Fake Dr Woodvile IW</p>
            <p>319-213-56**</p>
            <p>coburn188@gmail.com</p>
        </div>
      </div>
      <div className='pamc__footer-copyright'>
        <p>© 2024 ProjectAMC. All rights reserved.</p>
      </div>

    </div>
)
}

export default Footer