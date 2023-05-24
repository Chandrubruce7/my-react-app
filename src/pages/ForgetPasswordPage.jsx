import React from 'react'
import { Link } from 'react-router-dom';
import phone from '../assets/images/phone.svg';
import logo from '../assets/images/mbl-Logo.png';

const ForgetPassword = () => {
  return (
    <>
      <div className="login-page-main">
        <div className="login-section">
          <div className="login-form-section forgot-password">
            <div className="mbl-logo-sec">
              <img src={logo} alt="logo" className="src" />
            </div>
            <div className="form-title">
              <h1 className="font-32 wel-txt">Forgot Password</h1>
              <h6 className="font-20 wel-sub-txt">Enter your registered mobile number we will
                send a OTP to your mobile number</h6>
            </div>
            <div className="form-input-section">
              <form action="">
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

                <div className="login-btn">
                  <button type="submit" className="font-16"><Link to="/Verification">Submit</Link></button>
                </div>
              </form>

              <div className="reg-link-sec fg-psd-link">
                <p className="font-16">Back to<Link to="/login">Login Now</Link></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ForgetPassword