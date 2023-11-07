import '../ContactUs/ContactUs.css';
import axios from 'axios';
import i32 from "../ContactUs/37.jpeg"


const ContactUs = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      name: event.target.elements.nameInput.value,
      email: event.target.elements.emailInput.value,
      phoneNumber: event.target.elements.phoneNumberInput.value,
    };
    try {
      await axios.post('http://localhost:8080/api/users', userData);
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register-container">
      <img src={i32} alt='' className='register-img-background'/>
      <div className="register-h1">Register</div>
      <form onSubmit={handleSubmit} className="register-form">
        <label className='register-inputs-label' htmlFor="nameInput">User Name</label>
        <input type="text" id="nameInput" name='name' className='register-name-input'/>
        <label className='register-inputs-label' htmlFor="emailInput">Email</label>
        <input type="text" id="emailInput" name='email' className='register-email-input'/>
        <label className='register-inputs-label' htmlFor='phoneNumber'>Phone Number</label>
        <input type="text" id="phoneNumberInput" name='phoneNumber' className='register-PhoneNumber-input'/>
        <button type='submit' className="register-button">Register Now</button>
      </form>
    </div>
  );
};

export default ContactUs;
