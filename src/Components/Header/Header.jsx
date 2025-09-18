import './Header.css';
import React, { useState } from 'react';
import ContactBox from '../ContactMeBox/ContactBox';


function Header() {
    const[isContactOpen, setIsContactOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const openContact = () => {
        setIsContactOpen(true);
        window.alert('The contact me box is currently still in development. Sorry for the inconvenience. Please feel free to message me on linkedin!')
    }
        
    const closeContact = () => setIsContactOpen(false);
    const toggleMenu = () => setMenuOpen((open) => !open);
    
    



    return(
        <div className='header' id='header'>
            <a className='logo' href='#'>BB</a>
            <button className='hamburger' onClick={toggleMenu} aria-label='Toggle navigation'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>
            <nav className={`navLinks${menuOpen ? ' open' : ''}`}>
                <a href='#about' onClick={() => setMenuOpen(false)}>About</a>
                <a href='#skills' onClick={() => setMenuOpen(false)}>Skills</a>
                <a href='#projects' onClick={() => setMenuOpen(false)}>Projects</a>
                <div className='contactButton'>
                    {/*<a onClick={openContact}>Contact Me</a>*/}
                    <a href='https://www.linkedin.com/in/brian-bowen-psu/' target='_blank' rel='noopener noreferrer' onClick={() => setMenuOpen(false)}>Contact Me</a>
                </div>
            </nav>
            <ContactBox isOpen={isContactOpen} onClose={closeContact}></ContactBox>
        </div>
    )

}

export default Header;