import React, { useState } from 'react';

  const FormButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    hikeName: '',
    phoneNumber: '',
  });

   const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process the form data or perform any required actions
    console.log('Form submitted:', formData);
  };

  const handleCancelClick = () => {
    setShowForm(false);
    setFormData({
      hikeName: '',
      phoneNumber: '',
    });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.hikeName]: event.target.value,
    });
  };

  return (
    <div>
      <button className='book-btn' onClick={handleButtonClick}>Book Now</button>
      {showForm && (
        <form className='form-container' onSubmit={handleFormSubmit}>
          <label htmlFor="hikeName">Hike Name</label>
          <input
          placeholder='Enter your name'
            className='form-input '
            type="text"
            id="hikeName"
            hikeName="hikeName"
            value={formData.hikeName}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
          placeholder='Enter your phone number'
          className='form-input'
            type="phoneNumber"
            id="phoneNumber"
            hikeName="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <br />
          <div className="submit-cancel">
          <input type="submit" value="Submit" className='form-submit' />
          <button className='form-cancel' type="button" onClick={handleCancelClick}>
            Cancel
          </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormButton;