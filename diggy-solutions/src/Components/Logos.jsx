import React, { useEffect } from 'react';
import '../css/logo.css'; 
import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import logo3 from "../images/logo3.png"
import logo4 from "../images/logo4.png"
import logo5 from "../images/logo5.png"

const Logos = () => {
  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    const copy = logosSlide.cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <div className="logos">
        <div className="logos-slide">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5}alt="" />
        <img src={logo5} alt="" />
        <img src={logo2} alt="" />
      </div>
    </div>
  );
};

export default Logos;

