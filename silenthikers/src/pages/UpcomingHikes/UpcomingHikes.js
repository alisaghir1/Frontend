import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpcomingHikes.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UpcomingHikes = () => {
  const [hikesData, setHikesData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/hikes')
      .then((response) => {
        setHikesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const [showForm, setShowForm] = useState({});
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = (hikeId) => {
    setShowForm((prevState) => ({ ...prevState, [hikeId]: true }));
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
      await axios.post('http://localhost:8080/api/bookings', userData);
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = (hikeId) => {
    setShowForm((prevState) => ({ ...prevState, [hikeId]: false }));
    setFormData({});
  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.hikeName]: event.target.value,
      [event.target.phoneNumber]: event.target.value,
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="upcoming-header">Upcoming Hikes</div>
      <div className="upcoming-buttons-text">
        Not <Link to={'/ContactUs'}>Registered?</Link> Register and Book now
      </div>

      <div className="hikes-container">
        {hikesData.map((hike, index) => (
          <div key={index} className="hike-card">
            {hikesData.length > 0 && (
              <div className="hike-image-container">
                <img
                  src={`http://localhost:8080/${hike.image}`}
                  alt={hikesData[index % hikesData.length].imageName}
                  className="hike-image"
                />
                <div className="hike-header">
                  <h3 className="hike-name">{hike.hikeName}</h3>
                  <p className="hike-date">
                    <FaCalendarAlt /> <b>{hike.hikeDate}</b>
                  </p>
                  <p className="hike-location">
                    {' '}
                    <FaMapMarkerAlt /> <b>{hike.hikeLocation}</b>
                  </p>
                </div>
              </div>
            )}
            <div className="hike-details">
              <p className="hike-description-details">
                {' '}
                {hike.hikeDescription}
              </p>
            </div>
            <div className="hike-booking">
              <p className="hike-spots">
                Spots: {hike.availableSpots}
                <FaUsers />{' '}
              </p>
              {/*////////////////////////////////////////////////////////////////////////////////////*/}
              <div>
                <button
                  className="book-btn"
                  onClick={() => handleButtonClick(hike._id)}
                >
                  Book Now
                </button>
                {showForm[hike._id] && (
                  <form className="form-container" onSubmit={handleFormSubmit}>
                    <label htmlFor="hikeName">Hike Name</label>
                    <input
                      placeholder="Enter your name"
                      className="form-input-hike"
                      type="text"
                      id="hikeName"
                      hikeName="hikeName"
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
                      hikeName="phoneNumber"
                      onChange={handleInputChange}
                    />
                    <br />
                    <div className="submit-cancel">
                      <input
                        type="submit"
                        value="Submit"
                        className="form-submit"
                      />
                      <button
                        className="form-cancel"
                        type="button"
                        onClick={() => handleCancelClick(hike._id)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              {/*////////////////////////////////////////////////////////////////////////////////////*/}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcomingHikes;
