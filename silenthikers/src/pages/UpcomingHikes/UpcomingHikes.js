import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./UpcomingHikes.css"
import { Link } from 'react-router-dom'

const UpcomingHikes = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8080/api/hikes')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className='hikes-body'>
      <h1 className="upcoming-header">Upcoming Hikes</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="hike-container">
          {data.map((hike, index) => (
            <div className="hikes-main" key={index}>
              <div className="hikes-image"></div>
              <div className="hikes hike-name">{hike.hikeName}</div>
              <div className="hikes hike-location">{hike.hikeLocation}</div>
              <div className="hikes hike-description">{hike.hikeDescription}</div>
              <div className="hikes hike-date">{hike.hikeDate}</div>
              <div className="hikes hike-spots">Availble Spots:{hike.availableSpots}</div>
              <Link to={'/ContactUs'}>
              <button className="hikesButton">Book Now</button>  
              </Link>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default UpcomingHikes;
