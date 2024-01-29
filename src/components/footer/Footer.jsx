import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-social-media">
            <div className="footer-social-media-text">Follow us on social media</div>
            <div className="footer-social-media-icons">
                <div className="footer-social-media-icon">
                    <i style={{color: '#2980b9'}} className="bi bi-linkedin"></i>
                </div>
                <div className="footer-social-media-icon">
                    <i style={{color: '#2980b9'}} className="bi bi-facebook"></i>
                </div>
                <div className="footer-social-media-icon">
                    <i style={{color: 'red'}} className="bi bi-instagram"></i>
                </div>
                {/* <div className="footer-social-media-icon">
                    <i style={{color: 'skyblue'}} className="bi bi-twitter"></i>
                </div> */}
                <div className="footer-social-media-icon">
                    <i style={{color: 'green'}} className="bi bi-whatsapp"></i>
                </div>
                <div className="footer-social-media-icon">
                    <i style={{color: 'darkblue'}} className="bi bi-telegram"></i>
                </div>
            </div>
        </div>

        <div className="footer-links-wrapper">
            <div className="footer-links-item">
                <h3>Usefull Links</h3>
                <ul>
                    <Link to="/home"><li> Home</li></Link>
                    <Link to="/authors"><li>Authors</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                    <Link to="/register"><li>Register</li></Link>
                </ul>
            </div>
            <div className="footer-links-item">
                <h3>Contact Information</h3>
                <div className="footer-address-wrapper">
                    <div className="footer-address-item">
                        <i className="bi bi-geo-alt-fill"></i>
                        Egypt - Cairo 
                    </div>
                    <div className="footer-address-item">
                        <i className="bi bi-telephone-fill"></i>
                        +20 1554-296-194 
                    </div>
                    <div className="footer-address-item">
                        <i className="bi bi-envelope-fill"></i>
                        sasameh223@gmail.com 
                    </div>
                </div>
            </div>
            <div className="footer-links-item">
                <h3>About us</h3>
                <p className="footer-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Eligendi modi ab, fugit amet delectus accusantium quod cum laborum 
                     neque animi tempora eum, eveniet quae ipsa nulla eos ullam corporis voluptates?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Recusandae nostrum officiis possimus.
                </p>
            </div>
        </div>
    </footer>
  )
}
