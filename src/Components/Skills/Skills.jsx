import SkillCard from './SkillCard'
import './Skills.css'
import html from './html.png'

function Skills() {

    return(
        <div>
            <div className='skillsTitle'></div>
            <div className='skillPictures'>
                <SkillCard source={html}></SkillCard>
            </div>
            
        </div>
    )
}

export default Skills;