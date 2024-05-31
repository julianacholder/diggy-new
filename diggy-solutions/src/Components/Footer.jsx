import React from 'react'
import "../css/footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-text">
        <div className='extra'>
          <div>
          <img src="/logo.png" alt="" />
          </div>
          <p>Lorem Ipsum is simply dummy text <br />
            of the printing and typesetting industry. </p>
        </div>

        <div className='footer-links'>
          <h4>Links</h4>
          <ul>
            <div>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            </div>
            <div>
            <li>Projects</li>
            <li>Hire</li>
            <li>Contact us</li>
            </div>
          </ul>
        </div>

        <div className='extra'>
          <h4>Contact us</h4>
          <p>Lorem Ipsum is simply dummy text  <br />
           of the printing and typesetting industry. </p>
          <p>+923183561921</p>
        </div>
      </div>

      <div className='social-media'>
        <a href="">
        <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="">
          <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
            <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="">
              <i class="fa-brands fa-linkedin-in"></i>
              </a>
      </div>

      <div className='copy-right'>
        <p>© 2023 Copyright by IK Developers. 
          All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
