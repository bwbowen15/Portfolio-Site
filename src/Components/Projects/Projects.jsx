import './projects.css';
import ProjectCard from './ProjectCard'

function Projects(){

    return(
        <div className='projectsBody'>

            <div className='projects' id="projects">
                <h1>Projects</h1>


                <div className='projectsContainer'>
                    <div className='projectsGrid'>
                        <div className='projectCard'>
                            <ProjectCard link={'google.com'} name={'test'} description={"testing out cards"}></ProjectCard>
                        </div>
                        <div className='projectCard'>
                            <ProjectCard link={'google.com'} name={'test'} description={"testing out cards"}></ProjectCard>
                        </div>
                    </div>

                </div>
            </div>



        </div>
        
    )
}

export default Projects