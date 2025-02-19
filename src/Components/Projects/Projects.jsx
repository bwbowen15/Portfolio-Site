import './projects.css';
import ProjectCard from './ProjectCard'

//images resize to 50%x50%
import portfolioSite from './portfolioSite.png'

function Projects(){

    return(
        <div className='projectsBody'>

            <div className='projects' id="projects">
                <h1>Projects</h1>


                <div className='projectsContainer'>
                    <div className='projectsGrid'>
                        <div className='projectCard'>
                            <ProjectCard link={'google.com'} source={portfolioSite} name={'Portfolio Site'} description={"Portfolio site to show off my work."}></ProjectCard>
                        </div>
                       

                        
                    </div>

                </div>
            </div>



        </div>
        
    )
}

export default Projects