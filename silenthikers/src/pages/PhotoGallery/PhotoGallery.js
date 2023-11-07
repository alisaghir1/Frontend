import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8080/api/images')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Get the form data
    const formData = new FormData();
    formData.append('image', event.target.elements.fileInput.files[0]);
    formData.append('phoneNumber', event.target.elements.phoneNumberInput.value);
    try {
      // Make the POST request
         await axios.post(
        'http://localhost:8080/api/images',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Refresh the gallery by fetching the updated data
      setLoading(true);
      axios
        .get('http://localhost:8080/api/images')
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });

      // Clear the form
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="rectangle"></div>
      <h1 className="photo-gallery">Photo Gallery</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="gallery-container">
          <div className="small-images">
            {data
              .filter((_, index) => index !== currentImageIndex)
              .slice(0, 3) // Display the first two smaller images
              .map((item, index) => (
                <div key={index}>
                  <img
                    className="image-small"
                    src={`http://localhost:8080/${item.image}`}
                    alt={`pic ${index}`}
                    onError={() => {
                      console.log(`Error loading image: ${item.image}`);
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="navigation-buttons">
        <form className="image-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            id="phoneNumberInput"
            className="phone-number"
          />
          <label htmlFor="fileInput" className="custom-file-input">
            Choose a Photo
          </label>
          <input
            className="photo-input"
            type="file"
            accept="image/*"
            id="fileInput"
          />
          <button type="submit" className="custom-upload-button">
            Upload Photo
          </button>
        </form>
        <div className="nav-buttons">
          <button className="previous" onClick={previousImage}>
            Prev
          </button>
          <button className="next" onClick={nextImage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
