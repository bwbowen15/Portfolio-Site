import SkillCard from './SkillCard'
import './Skills.css'

//logos
import html from './html.png'
import css from './css.png'
import js from './js.png'
import react from './react.png'
import java from './java.png'

function Skills() {

    return(
        <div className='skills' id='skills'>
            <h1>Skills</h1>
            
            
            <div className='skillsContainer'>

               <div className='skillCatagory'>

                    <h3 className='catagoryTitle'>Frontend</h3>

                    <div className='skillsGrid'>

                        <div className='skillCard'>
                            <SkillCard source={html} name={"HTML"} description={"Web Markup"}></SkillCard>
                        </div>

                        <div className='skillCard'>
                            <SkillCard source={css} name={"CSS"} description={"Styling"}></SkillCard>
                        </div>

                        <div className='skillCard'>
                            <SkillCard source={js} name={"JavaScript"} description={"Scripting Language"}></SkillCard>
                        </div>

                        <div className='skillCard'>
                            <SkillCard source={react} name={"React"} description={"Frontend Framework"}></SkillCard>
                        </div>
      
                    </div>
               </div>
               
                <div className='skillCatagory'>

                     <h3 className='catagoryTitle'>Backend</h3>

                        <div className='skillsGrid'>

                         <div className='skillCard'>
                            <SkillCard source={java} name={"Java"} description={"Object-Oriented Programming Language"}></SkillCard>
                        </div>

    

                    </div>

                </div>
            </div>

           











            
            
        </div>
    )
}

export default Skills;