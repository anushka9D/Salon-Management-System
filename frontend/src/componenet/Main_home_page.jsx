import React, { useState } from "react";
import { Link } from "react-router-dom";

function Main_home_page() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
  <div>
    <nav className="navbar">
    <div className="logo">
      <h1>Clinic</h1>
    </div>

    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
      <li><Link to="#home">Home</Link></li>
      <li><Link to="#service">Service</Link></li>
      <li><Link to="#about">About</Link></li>
      <li><Link to="#contact">Contact</Link></li>

      <div className="header-button">
        <button className="signup-button" onClick={() => { window.location.href = '/signup'; }}>Sign Up</button>
        <button className="signin-button" onClick={() => { window.location.href = '/signin'; }}>Sign In</button>
      </div>
    </ul>
    <div className="hamburger" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>


  <footer className="footer">
        <div className="footer-content">
            <div className="footer-section address">
                <h4>Address</h4>
                <p>📍 123 Street, New York, USA</p>
                <p>📞 +012 345 67890</p>
                <p>✉️ info@example.com</p>
                <div className="social-media">
                    <a href="#" aria-label="Twitter">🔗</a>
                    <a href="#" aria-label="Facebook">🔗</a>
                    <a href="#" aria-label="YouTube">🔗</a>
                    <a href="#" aria-label="LinkedIn">🔗</a>
                </div>
            </div>

            <div className="footer-section services">
                <h4>Services</h4>
                <ul>
                    <li>Cardiology</li>
                    <li>Pulmonary</li>
                    <li>Neurology</li>
                    <li>Orthopedics</li>
                    <li>Laboratory</li>
                </ul>
            </div>

            <div className="footer-section quick-links">
                <h4>Quick Links</h4>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Our Services</li>
                    <li>Terms & Condition</li>
                    <li>Support</li>
                </ul>
            </div>

            <div className="footer-section newsletter">
                <h4>Newsletter</h4>
                <p>Subscribe to our newsletter for latest updates.</p>
                <input type="email" placeholder="Your email" />
                <button>Sign Up</button>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© Your Site Name, All Rights Reserved.</p>
        </div>
  </footer>


</div>
  );
}

export default Main_home_page;

