// import './LoginPage1.css';

import React from 'react'
import { Link } from 'react-router-dom';
import email from '../assets/images/Email.svg';
import password from '../assets/images/password.svg';
import eyeHide from '../assets/images/eye-hide.svg';
import eyeOpen from '../assets/images/eye-open.svg';
import { useState } from 'react';


const LoginPage = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <>
            <div className="login-page-main">
                <div className="login-section">
                    <div className="login-form-section">
                        <div className="mbl-logo-sec">
                            <img src={require('../assets/images/mbl-Logo.png')} alt="logo" className="src" />
                        </div>
                        <div className="form-title">
                            <h1 className="font-32 wel-txt">Welcome Back</h1>
                            <h6 className="font-20 wel-sub-txt">Login to continue using your account</h6>
                        </div>
                        <div className="form-input-section">
                            <form>
                                <div className="email-section">
                                    <label htmlFor="" className="font-16">Email Address*</label>
                                    <div className="email-icon">
                                        <span>
                                            <img src={email} alt="" />
                                        </span>
                                        <input className="font-16" type="email" placeholder="Enter Address" />
                                    </div>
                                </div>
                                <div className="password-section">
                                    <label htmlFor="" className="font-16">Password*</label>
                                    <div className="psd-eye">
                                        <span className="psd-icon"> <img src={password} alt="" /> </span>
                                        <input className="font-16" type={passwordType} value={passwordInput} onChange={handlePasswordChange} placeholder="Enter Password" />
                                        <span className="eye-icon" onClick={togglePassword}>

                                            {passwordType === "password" ? <img id="pw-close" src={eyeHide} alt="" /> :
                                                <img id="pw-open" src={eyeOpen} alt="" />}
                                        </span>
                                    </div>
                                    <Link to="/forget">Forgot Password?</Link>
                                </div>
                                <div className="login-btn">
                                    <button type="submit" className="font-16"><Link to="/homepage">Login Now</Link></button>
                                </div>
                            </form>
                        </div>
                        <div className="or-section">
                            <h6 className=""><span className="font-16">OR</span></h6>
                        </div>
                        <div className="social-media-section">
                            <h6 className="font-16">Login Using</h6>
                            <div className="social-icon">
                                <a href=""><span className="fb-icon"></span></a>
                                <a href=""><span className="google-icon"></span></a>
                                <a href=""><span className="ios-icon"></span></a>
                                <a href=""><span className="insta-icon"></span></a>
                            </div>
                        </div>
                        <div className="reg-link-sec">
                            <p className="font-16">Don’t Have an Account?<Link to="/Register">Register Here</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
