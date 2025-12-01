import React from "react";
import './Fooster.css'
import { assets } from "../../assets/assets";

const Footer = ()=>{
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className="footer-content-left-logo" src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut dolorum quibusdam inventore saepe voluptate excepturi. Deleniti non fuga fugit unde. Nisi quis odio sunt explicabo doloribus dicta odit labore.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET In TOUCH</h2>
                    <ul>
                        <li>+1-212-345-433</li>
                        <li>foodb@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © foodB</p>
        </div>
    )
}

export default Footer