import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpcomingHikes.css';
import pic from './pic.jpeg'

const UpcomingHikes = () => {
  const [hikesData, setHikesData] = useState([]);
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get('http://localhost:8080/api/hikes'),
        axios.get('http://localhost:8080/api/images')
      ])
      .then(
        axios.spread((hikesResponse, imagesResponse) => {
          setHikesData(hikesResponse.data);
          setImagesData(imagesResponse.data);
          console.log("hikes: ", hikesResponse.data);
          console.log("images ",imagesResponse.data);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='hikes-container'>
      {hikesData.map((hike, index) => (
        <div key={index} className='hike-card'>
          <div className='hike-header'>
            <h3 className='hike-name'>{hike.hikeName}</h3>
            <p className='hike-date'> {hike.hikeDate}</p>
            <p className='hike-location'> {hike.hikeLocation}</p>
          </div>
          {imagesData.length > 0 && (
            <div className='hike-image-container'>
              <img
                src={pic}
                alt={imagesData[index % imagesData.length].imageName}
                className='hike-image'
              />
            </div>
          )}
          <div className='hike-details'>
            <p className='hike-description-details'> {hike.hikeDescription}</p>
          </div>
          <div className='hike-booking'>
            <p className='hike-spots'> {hike.availableSpots}</p>
            <button className='book-btn'>Book Hike</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingHikes;




// import React from 'react'
// import {useState, useEffect} from 'react'
// import axios from 'axios'
// import './UpcomingHikes.css'

// const UpcomingHikes = () => {

//     const[data, setData] = useState([])
    
//     useEffect(() =>{
//         axios.get('http://localhost:8080/api/hikes')
//         .then((response) => {
//             setData(response.data)
//             console.log(response.data)
//         }).catch((error) =>{
//             console.log(error)
//         })
//     },[])
//   return (
//         <div className='hikes-container'>
//             {data.map((hike, index) => (
//                 <div key={index}>
//                     <div className='hike-header'>
//                         <h3 className='hike-header-item hike-name'>{hike.hikeName}</h3>
//                         <p className='hike-header-item hike-date'> {hike.hikeDate}</p>
//                         <p className='hike-header-item hike-location'> {hike.hikeLocation}</p>
//                     </div>
//                     <div className='hike-description'>
//                         <p className='hike-description-details'> {hike.hikeDescription}</p>
//                     </div>
//                     <div className='hike-booking'>
//                         <p className='hike-spots'> {hike.availableSpots}</p>
//                         <button className='book-btn'>Book Hike</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//   )
// }

// export default UpcomingHikes

