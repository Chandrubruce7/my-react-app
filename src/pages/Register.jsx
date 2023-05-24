import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import user from '../assets/images/user.svg';
import logo from '../assets/images/mbl-Logo.png';
import phone from '../assets/images/phone.svg';
import email from '../assets/images/Email.svg';
import password from '../assets/images/password.svg';
import eyeHide from '../assets/images/eye-hide.svg';
import eyeOpen from '../assets/images/eye-open.svg';

const Register = () => {

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

    const [confirmpasswordType, setConfirmPasswordType] = useState("password");
    const [confirmpasswordInput, setConfirmPasswordInput] = useState("");

    const handleConfirmPasswordChange = (evnt) => {
        setConfirmPasswordInput(evnt.target.value);
    }
    const toggleConfirmPassword = () => {
        if (confirmpasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

    return (
        <>
            <div className="login-page-main">
                <div className="login-section res-pad-top">
                    <div className="login-form-section">
                        <div className="mbl-logo-sec">
                            <img src={logo} alt="logo" className="src" />
                        </div>
                        <div className="form-title">
                            <h1 className="font-32 wel-txt">Lets’s Get Started!</h1>
                            <h6 className="font-20 wel-sub-txt">Create an Account to Fan2Stage</h6>
                        </div>
                        <div className="form-input-section">
                            <form action="">
                                <div className="email-section">
                                    <label htmlFor="" className="font-16">Full Name*</label>
                                    <div className="email-icon">
                                        <span>
                                            <img src={user} alt="" srcSet="" />
                                        </span>
                                        <input className="font-16" type="text" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="email-section">
                                    <label htmlFor="" className="font-16">Mobile Number*</label>
                                    <div className="email-icon mbl-num-sec">
                                        <span>
                                            <img src={phone} alt="" srcSet="" />
                                        </span>
                                        <input type="" id="phoneNumber" placeholder="Mobile Number" maxLength="16" />
                                        <div className="num-drp">
                                            <p>+91</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="email-section">
                                    <label htmlFor="" className="font-16">Email Address*</label>
                                    <div className="email-icon">
                                        <span>
                                            <img src={email} alt="" srcSet="" />
                                        </span>
                                        <input className="font-16" type="email" placeholder="Enter Address" />
                                    </div>
                                </div>
                                <div className="password-section">
                                    <label htmlFor="" className="font-16">Password*</label>
                                    <div className="psd-eye">
                                        <span className="psd-icon"> <img src={password} alt="" srcSet="" /> </span>
                                        <input className="font-16" type={passwordType} value={passwordInput} onChange={handlePasswordChange} placeholder="Enter Password" />
                                        <span className="eye-icon" onClick={togglePassword}>
                                            {passwordType === "password" ? <img id="pw-close" src={eyeHide} alt="" /> :
                                                <img id="pw-open" src={eyeOpen} alt="" />}
                                        </span>
                                    </div>
                                </div>
                                <div className="password-section Confirm-psd">
                                    <label htmlFor="" className="font-16">Confirm Password*</label>
                                    <div className="psd-eye">
                                        <span className="psd-icon"> <img src={password} alt="" srcSet="" /> </span>
                                        <input className="font-16" type={confirmpasswordType} value={confirmpasswordInput} onChange={handleConfirmPasswordChange} placeholder="Enter Password" />
                                        <span className="eye-icon" onClick={toggleConfirmPassword}>
                                            {confirmpasswordType === "password" ? <img id="pw-close" src={eyeHide} alt="" /> :
                                                <img id="pw-open" src={eyeOpen} alt="" />}
                                        </span>
                                    </div>
                                </div>

                                <div className="check-box-section reg-check-box">
                                    <input type="checkbox" name="" id="cus-box" />
                                    <label className="font-16" htmlFor=" cus-box ">I Accept the all<span>Terms and Conditions</span></label>
                                </div>

                                <div className="login-btn">
                                    <button type="submit" className="font-16"><Link to="/Register">Register Here</Link></button>
                                </div>
                            </form>
                            <div className="reg-link-sec reg-mt">
                                <p className="font-16"> Already Have an Account?<Link to="/Login">Login Here</Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register