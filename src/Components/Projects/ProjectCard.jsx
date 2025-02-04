import './projects.css';
import Techs from './Techs';

function ProjectCard(props){

    
    return(
    
        
            <div>
            
                <h3>{props.name}</h3>
                <p>{props.description}</p>

                <div className='techs'>
                
            

                </div>
            </div>
        
    
    )
}

export default ProjectCard;