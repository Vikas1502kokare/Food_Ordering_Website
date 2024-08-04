import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Route,Link, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home'

export default function Footer() {
  return (
    <>   
     <Routes>
    <Route path='/' element={Home}  />
    </Routes>
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Food is essential for survival, providing the necessary nutrients and energy for the body to function. It comes in a variety of forms, flavors, and cultural traditions, playing a crucial role in health and social interactions.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-751-738-9594</li>
            <li>contact@Food.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @ Food.com - Vikas Kokare Reserved.</p>
    </div>
    </>

  )
}
