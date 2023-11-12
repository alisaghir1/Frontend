import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpcomingHikes.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Form from '../../components/form/Form';

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
            <Form hike={hike}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcomingHikes;
