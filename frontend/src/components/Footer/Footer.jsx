import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { getId } from '../Navbar/navLinks'

function Footer() {
    return (
        <div className='footer' id={getId("contact us")}>
            <div className="footer-content">
                <div className="footer-contect-left">
                    <img src={assets.logo} alt="" />
                    <p><strong>ShareBite</strong> is a social impact app that empowers individuals to make a difference.
                        By simply sharing excess food, you can help feed the hungry, reduce waste, and create a more sustainable future.
                        Join our community and be part of the solution.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Share Bite</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+1-2255-5825</li>
                        <li>ak2211.g@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">
                Copyright 2024 - ShareBite Team
            </div>

        </div >

    )
}

export default Footer
