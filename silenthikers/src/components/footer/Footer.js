import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <span class="material-symbols-outlined">mail</span>
            <h3 className='info'>&nbsp;info@silenthikers.com</h3>
            <div className='footer-content'>
                <h3>Connect with us:</h3>
                <div className='spans'>
                    <FaFacebook className="socialmedia-icons" size={32}/>
                    <FaTwitter className="socialmedia-icons" size={32}/>
                    < FaInstagram className="socialmedia-icons"  size={32}/>
                    <FaLinkedin className='socialmedia-icons' size={32} />
                    <FaYoutube className='socialmedia-icons' size={32} />
                </div>
            </div>
        </footer>
        <div className='copy-div'>
            <span>&copy;2023 All rights reserved</span>
        </div>
    </>
  )
}

export default Footer