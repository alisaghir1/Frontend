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
      <button onClick={handleButtonClick}>Show Form</button>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="hikeName">Hike Name</label>
          <input
            type="text"
            id="hikeName"
            hikeName="hikeName"
            value={formData.hikeName}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            hikeName="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <br />
          <input type="submit" value="Submit" />
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default FormButton;