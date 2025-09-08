import './Header.css';
import react, {useState, useEffect} from 'react';
import ContactBox from '../ContactMeBox/ContactBox';


function Header() {
    const[isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => {
        setIsContactOpen(true);
        window.alert('The contact me box is currently still in development. Sorry for the inconvenience. Please feel free to message me on linkedin!')
    }
        
    const closeContact = () => setIsContactOpen(false);
    
    



    return(
        <div className='header' id='header'>
            <a className='logo' href='#'>BB</a>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <div className='contactButton'>
                {/*<a onClick={openContact}>Contact Me</a>*/}
                {<a href='https://www.linkedin.com/in/brian-bowen-psu/' target='_blank'>Contact Me</a>}
            </div>
            <ContactBox isOpen={isContactOpen} onClose={closeContact}></ContactBox>
        </div>
    )

}

export default Header;