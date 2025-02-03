import './Header.css';


function Header() {
    

    return(
        <div className='header'>
            <a className='logo' href='#pic'>BB</a>
            <a href='#about'>About</a>
            <a>Skills</a>
            <a>Projects</a>
            <div className='contactButton'>
                <a>Contact Me</a>
            </div>
        </div>
    )

}

export default Header;