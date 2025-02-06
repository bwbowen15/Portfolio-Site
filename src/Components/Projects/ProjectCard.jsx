import './projects.css';
import Techs from './Techs';

function ProjectCard(props){

    
    return(
    
        
            <div>
                <img src={props.source}></img>            
                <h3>{props.name}</h3>
                <p>{props.description}</p>

                <div className='techs'>
                
            

                </div>
            </div>
        
    
    )
}

export default ProjectCard;