import './SkillCard.css';

function SkillCard(props) {

    return(
        <div>
            <img src={props.source}></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default SkillCard;