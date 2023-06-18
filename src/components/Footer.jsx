import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    verticalCard, headerLogo, email
} from '../components/images/images.jsx';

const Footer = () => {
    return (
      
       <footer>
        <div className="footer">
            <div className="footer_newsletter">
                <div className="footer_newsletter_right">
                    <div className="footer_newsletter_right_icon"><img src={verticalCard}
                            alt="icon"/>
                    </div>
                    <div className="footer_newsletter_right_text">
                        <h1>Sign up to our newsletter</h1>
                        <p>Stay up to date with the latest news, announcements, and articles </p>
                    </div>
                </div>
                <form className="footer_newsletter_form">
                    <div className="footer_newsletter_form_input"><span><img src={email}
                                alt=""/></span><input type="text" name="" id="" placeholder="Enter your email"/></div>
                    <button>Submit</button>
                </form>
            </div>
            <div className="footer_logo"><img src={headerLogo} alt=""/></div>
            <ul className="footer_manu">
                <li><NavLink to="/homepage" >Home</NavLink></li>
                <li><NavLink to="/About" >About</NavLink></li>
                <li><NavLink to="/MyEvents" >My Events</NavLink></li>
                <li><NavLink to="/Profile" >Profile</NavLink></li>
                <li><NavLink to="/GoandFreenow" >Go and Free now</NavLink></li>
            </ul>
            <div className="footer_social_icon"><span><a href=""></a></span><span><a href=""></a></span><span><a
                        href=""></a></span><span><a href=""></a></span></div>
            <div className="footer_policy">
                <p>©All Rights Reserved Local Market | Terms &amp; Conditions | Privacy Policy</p>
            </div>
        </div>
       </footer>
     
    );
};

export default Footer;