import './projects.css';
import Techs from './Techs';

function ProjectCard(props){

    return(
        <div>
            <a src={props.link}>
                
                <h3>{props.name}</h3>
                <p>{props.description}</p>

                <div className='techs'>
                    
                

                </div>

            </a>
            

        </div>
    )
}

export default ProjectCard;