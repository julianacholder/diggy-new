import React, { useEffect } from 'react';
import '../css/logo.css'; 

const Logos = () => {
  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    const copy = logosSlide.cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <div className="logos">
        <div className="logos-slide">
        <img src="/logo1.png" alt="" />
        <img src="/logo2.png" alt="" />
        <img src="/logo3.png" alt="" />
        <img src="/logo4.png" alt="" />
        <img src="/logo5.png" alt="" />
        <img src="/logo5.png" alt="" />
        <img src="/logo2.png" alt="" />
      </div>
    </div>
  );
};

export default Logos;

