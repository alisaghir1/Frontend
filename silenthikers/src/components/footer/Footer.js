import './footer.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-main">
        <h3 className="info">
          <span className="material-symbols-outlined">mail</span>
          Info@Silenthikers.com
        </h3>
      <div className="copy-div">
        <span>&copy;2023 All rights reserved</span>
      </div>
      <div className="footer-social-media">
        <div className="spans">
          <FaFacebook className="socialmedia-icons" size={30} />
          <FaTwitter className="socialmedia-icons" size={30} />
          <FaInstagram className="socialmedia-icons" size={30} />
          <FaLinkedin className="socialmedia-icons" size={30} />
          <FaYoutube className="socialmedia-icons" size={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
