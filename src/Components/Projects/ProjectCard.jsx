import './projects.css';
import Techs from './Techs';

function ProjectCard(props){

    
    return(
    
        <a href={props.link} target={props.targ}>
            <div>
                            
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                
                <h4>Technologies:</h4>
                <div className='techs'>
                <p>{props.techs}</p>
            

                </div>
            </div>
        
    </a>
    )
}

export default ProjectCard;