import './About.css'
import linkedin from './linkedin.png'
import github from './github.png'


function About(){

  

    return(
        <div className='about' id='about'>
            <div className='words'><h1>About Me</h1>
            <p>Hi, I'm Brian, a Computer Science student at Penn State University with a love for programming, problem-solving, and learning new technologies. With two internships under my belt, I've gained hands-on experience
                as a Software Engineer, and I am always looking for opportunites to learn and grow.
                <br></br>
                I love collaborating on innovative projects, whether its software development or something new. If you are interested in working together or just want to chat about tech, feel free to reach out - let's build something together!
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