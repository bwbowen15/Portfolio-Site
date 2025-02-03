import './Picture.css'
import pic from './tempIMG.jpg'

function Picture() {

    return(
        <div className='myPicture' id='pic'>
            <img src={pic} alt='Brian Bowen'></img>
        </div>
    )
}

export default Picture;