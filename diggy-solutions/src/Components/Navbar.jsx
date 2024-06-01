import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "../css/main.css";
import "../css/navbar.css"
import logo from "../images/logo.png"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
          setIsScrolled(true);
      } else {
          setIsScrolled(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled || isMenuOpen ? 'scrolled' : ''}`}>
      <div className="navbar-container" >
        <img src={logo} alt="" />

       
        <ul className={`nav-menu ${isMenuOpen ? 'responsive' : ''}`}>
        <li className='nav-item'>
        <Link to='/' className='nav-links' >
          Home
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/about-us' className='nav-links' >
          About us
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/services' className='nav-links'>
          Services
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/projects' className='nav-links' >
          Projects
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/hire' className='nav-links' >
          Hire
        </Link>
        </li>

        <li className='responsive-contact-button'>
        <Link to='/contact-us' className='nav-links' >
          Contact us 
        </Link>
        </li>



        </ul>
        <button className='nav-button'>
        <Link to='/contact-us' className='nav-links-mobile'>
          Contact us
        </Link>
        </button>

        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
       
      </div>
      </header>
    </>
  )
}

export default Navbar
