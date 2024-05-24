import React from 'react'
import "../css/footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-text">
        <div>
          <img src="/logo.png" alt="" />
          <p>Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. </p>
        </div>

        <div>
          <h4>Links</h4>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Hire</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h4>Contact us</h4>
          <p>Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. </p>
          <p>+923183561921</p>
        </div>
      </div>

      <div>
        <a href="">
          <i></i>
          </a>
          <a href="">

            </a>
            <a href="">
              </a>
              <a href=""></a>
      </div>

      <div>
        <p>© 2023 Copyright by IK Developers. 
          All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
