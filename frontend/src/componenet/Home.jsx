import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';

function Main_home_page() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
  <div>
    <Header/>



    <Footer/>
</div>
  );
}

export default Main_home_page;

