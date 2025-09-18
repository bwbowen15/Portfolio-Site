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
                            <ProjectCard link={'#Header'} source={''} name={'Portfolio Site'} description={"Portfolio site to show off my work."} techs={"React, JavaScript, HTML, CSS"} ></ProjectCard>
                        </div>
                        <div className='projectCard'>
                            <ProjectCard link={'https://github.com/bwbowen15/TastyAi'}  name={'TastyAi'} description={"AI project that generates recipes based on your goals."} techs={"React, Spring(Java), JavaScript, HTML, CSS"} targ={'_blank'}></ProjectCard>
                        </div>
                        <div className='projectCard'>
                            <ProjectCard link={'https://github.com/bwbowen15/Narvis'}  name={'Narvis: Personal AI Assistant'} description={"Narvis is an AI assistant that talks, listens, reasons, and helps manage tasks."} techs={"Python"} targ={'_blank'}></ProjectCard>
                        </div>
                    </div>

                </div>
            </div>



        </div>
        
    )
}

export default Projects