import './Header.css';
// import react, {useState, useEffect} from 'react';

function Header() {
    // const [headerStyle, setHeaderSytle] = useState('transparent');


    // const changeHeaderStyle = () => {
    //     if(window.scrollY >= 80){
    //         setHeaderStyle('#45a29e');
    //     }
    //     else{
    //         setHeaderStyle('transparent');
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', changeHeaderStyle);
    //     return () => {
    //         window.removeEventListener('scroll', changeHeaderStyle);
    //     }
    // }, []);




    return(
        <div className='header' id='header'>
            <a className='logo' href='#pic'>BB</a>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <div className='contactButton'>
                <a>Contact Me</a>
            </div>
        </div>
    )

}

export default Header;