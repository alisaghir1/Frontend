import '../ContactUs/ContactUs.css';
import axios from 'axios';


const ContactUs = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', event.target.elements.nameInput.value);
    formData.append('email', event.target.elements.emailInput.value);
    formData.append(
      'phoneNumber',
      event.target.elements.phoneNumberInput.value
    );
    try {
      await axios.post('http://localhost:8080/api/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register-container">
      <div className="register-h1">Register</div>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="nameInput">User Name</label>
        <input type="text" id="nameInput" className='register-name-input'/>
        <label htmlFor="emailInput">Email</label>
        <input type="text" id="emailInput" className='register-email-input'/>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phoneNumberInput" className='register-PhoneNumber-input'/>
        <button type='submit' className="register-button">Register Now</button>
      </form>
    </div>
  );
};

export default ContactUs;
