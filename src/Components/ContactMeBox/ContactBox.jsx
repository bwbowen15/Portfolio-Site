import './ContactBox.css';



//use sendgrid API to send emails. free trial is 60 days so implement closer to when im applying to jobs after internship ends.
//https://sendgrid.com/en-us

function ContactBox({isOpen, onClose}){
    if(isOpen == false){
        return null;
    }

    

    return(
        
            <div className='content'>
                <h1>Contact Me</h1>
                <form id='contactForm'>
                    <label for='name'>Name:</label>
                    <input type='text' id='name' name='name' required></input>
                    <br></br>
                    <label for='email'>Email:</label>
                    <input type='text' id='email' name='email' required></input>
                    <br></br>
                    <label for='message'>Message:</label>
                    <textarea type='text' id='message' name='message' required></textarea>
                    <br></br>
                    <button type='submit'>Submit</button>
                    
                </form>
                <button  onClick={onClose}>Close</button>
            </div>
      
    )
}

export default ContactBox;