import './ContactBox.css';

function ContactBox({isOpen, onClose}){
    if(isOpen == false){
        return null;
    }

    

    return(
        
            <div className='content'>
                <h1>Contact Me</h1>
                <form id='contactForm'>
                    <label for='name'>Name:</label>
                    <input type='text' id='name' name='name'></input>
                    <br></br>
                    <label for='email'>Email:</label>
                    <input type='text' id='email' name='email'></input>
                    <br></br>
                    <label for='message'>Message:</label>
                    <textarea type='text' id='message' name='message'></textarea>
                    <br></br>
                    
                    
                </form>
                <button  onClick={onClose}>Close</button>
            </div>
      
    )
}

export default ContactBox;