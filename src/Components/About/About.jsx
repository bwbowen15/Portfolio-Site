import './About.css'
import linkedin from './linkedin.png'
import github from './github.png'


function About(){

  

    return(
        <div className='about' id='about'>
            <div className='words'><h1>About Me</h1>
            <p>Hi, I’m Brian, a Software Engineer and senior studying computer science. I'm based in West Chester PA. I enjoy coding and building projects; feel free to reach out with opportunities or questions!
                
            </p></div>

            <div className='logos'>
                <a href='https://www.linkedin.com/in/brian-bowen-psu/' target='_blank'>
                    <img src={linkedin}></img>
                </a>

                <a href='https://github.com/bwbowen15' target='_blank'>
                    <img src={github}></img>
                </a>
            </div>

              

            

        </div>
    )
}

export default About;