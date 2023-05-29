import React from 'react';
import verticalCard from '../assets/images/verticalCard-rocket-icon.svg';
import headerLogo from '../assets/images/header_logo.png';
import email from '../assets/images/Email.svg';

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
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">My Events</a></li>
                <li><a href="">Profile</a></li>
                <li><a href="">Go Ad Free now</a></li>
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