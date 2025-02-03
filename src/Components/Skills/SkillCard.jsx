import './SkillCard.css';

function SkillCard(props) {

    return(
        <div className='logo'>
            <img src={props.source}></img>
        </div>
    )
}

export default SkillCard;