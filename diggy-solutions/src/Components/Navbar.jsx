import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "../css/main.css";
import "../css/navbar.css"

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar"></nav>
      <div className="navbar-container">
        <img src="/logo.png" alt="" />

        {/* <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </div> */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
          Home
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
          About us
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
          Services
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
          Projects
        </Link>
        </li>
        <li className='nav-item'>
        <Link to='/hire' className='nav-links' onClick={closeMobileMenu}>
          Hire
        </Link>
        </li>

        </ul>
        <button className='nav-button'>
        <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
          Contact us
        </Link>
        </button>

       
       
      </div>
    </>
  )
}

export default Navbar
