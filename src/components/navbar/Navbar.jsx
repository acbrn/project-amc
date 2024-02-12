import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/png/IcePhenyxW1.png'
import './navbar.css';

const Menu = ()=> (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wpamc">What is ProjectAMC</a></p>
    <p><a href="#features">Current </a></p>
    <p><a href="#possibility">Ideas </a></p>
    <p><a href="#blog">Blog</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
    <div className="projectAMC__navbar"> 
        <div className="projectAMC__navbar-links">
            <div className="projectAMC__navbar-links-logo">
                <img src={ logo } alt="logo" />
            </div>
            <div className="projectAMC__navbar-links_container">
                <Menu />
            </div>
        </div>
        <div className='projectAMC__navbar-sign'>
            <p>Sign In</p>
            <button type='button'>Sign Up</button>
        </div>
        <div className='projectAMC__navbar-menu'>
            {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />:
            <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
            <div className='projectAMC__navbar-menu_container scale-up'>
                <div className='projectAMC__navbar-menu_container-links'>
                    <Menu />
                    <div className='projectAMC__navbar-menu_container-links-sign'>
                        <p>Sign In</p>
                        <button type='button'>Sign Up</button>
                    </div>
                </div>
            </div>
)}
</div>
</div>

    )
}

export default Navbar