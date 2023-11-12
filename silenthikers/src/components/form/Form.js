import { useState } from 'react';
import axios from 'axios';

const Form = ({ hike }) => {
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState(false);
  const [errorMessage , setErrorMessage] = useState('');

  const toggleForm = () => {
    setForm(!form);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const hikeName = event.target.elements.hikeName.value;
    const phoneNumber = event.target.elements.phoneNumber.value;

    if (!phoneNumber) {
      setErrorMessage('Please provide a  valid phoneNumber.');
      return;
    }
    const userData = {
      hikeName,
      phoneNumber,
    };
    try {
      const response = await axios.post('http://localhost:8080/api/bookings', userData);
      event.target.reset();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.hikeName]: event.target.value,
      [event.target.phoneNumber]: event.target.value,
    });
  };

  return (
    <>
    <div className='form-main-container' >
    <button onClick={toggleForm} className="book-btn">
      Book Now
    </button>
    {form && (
      <div className="showForm">
        <div className="form-overlay">
          <div className="form-content">
            <form className="form-container" onSubmit={handleFormSubmit}>
              <label htmlFor="hikeName">Hike Name</label>
              <input
                placeholder="Enter your name"
                className="form-input-hike"
                type="text"
                id="hikeName"
                name="hikeName"
                value={hike.hikeName}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                placeholder="Enter your phone number"
                className="form-input"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={handleInputChange}
              />
              <br />
              <div className="submit-cancel">
                <input type="submit" value="Submit" className="form-submit" />
                <button onClick={toggleForm} className="close-form">
                  Cancel
                </button>
              </div>
            </form>
          </div>
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
        </div>
      </div>
    )}
    </div>
  </>
  );
};

export default Form;
