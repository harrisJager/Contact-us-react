import { Button } from "../Button/Button";
import { MdMessage, MdCall, MdOutlineEmail } from 'react-icons/md';
import './Contact.Module.css';


const ContactForm = () => {
  return (

    
    <div className="contact_form">
      <div className="top_btn">
        <Button text="Via support Chat" icon={<MdMessage fontSize="24px" />} />
        <Button text="Via Call" icon={<MdCall fontSize="24px" />} />
      </div>
      <div>
        <Button isOutline_btn={true} text="Via Email Form" icon={<MdOutlineEmail fontSize="20px" />} />  
        
      </div>
      <div className="contact_image">
        <form>
            <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text"/>
            </div>
            <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="text"/>
            </div>
            <div className="form_control">
            <label htmlFor="text">text</label>
            <input type="text"/>
            </div>

            <div>
            <Button  text="Submit"  />  

              </div>  
          
        </form>
        <div>
            <img src="/images/Frame2.PNG" alt="contact image"/>       
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
