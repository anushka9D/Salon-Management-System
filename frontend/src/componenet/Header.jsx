import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

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
        <button className="signup-button" onClick={() => { window.location.href = '/'; }}>Log Out</button>
      </div>
    </ul>
    <div className="hamburger" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
  
</div>
  );
}

export default Header;

