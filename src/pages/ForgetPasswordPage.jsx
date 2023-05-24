import React from 'react'
import { Link } from 'react-router-dom';
import phone from '../assets/images/phone.svg';
import logo from '../assets/images/mbl-Logo.png';

const ForgetPassword = () => {
  return (
    <>
     <div class="login-page-main">
         <div class="login-section">             
             <div class="login-form-section forgot-password">
                  <div class="mbl-logo-sec">
                     <img src={logo} alt="logo" class="src"/>
                  </div>
                  <div class="form-title">
                       <h1 class="font-32 wel-txt">Forgot Password</h1>
                       <h6 class="font-20 wel-sub-txt">Enter your registered mobile number we will 
                        send a OTP to your mobile number</h6>
                  </div>
                  <div class="form-input-section">
                      <form action="">
                        <div class="email-section">
                            <label for="" class="font-16">Mobile Number*</label>
                            <div class="email-icon mbl-num-sec">
                              <span>
                                  <img src={phone} alt="" srcset=""/>
                              </span>
                              <input type="" id="phoneNumber" placeholder="Mobile Number" maxlength="16" />
                              <div class="num-drp">
                                  <p>+91</p>
                              </div>
                            </div>
                        </div>

                          <div class="login-btn">
                              <button type="submit" class="font-16"><Link  to="/Verification">Submit</Link></button>
                          </div>
                      </form>

                      <div class="reg-link-sec fg-psd-link">
                          <p class="font-16">Back to<Link  to="/login">Login Now</Link></p>
                      </div>

                  </div>                  
             </div>
         </div>
   </div>
    </>
   
  )
}

export default ForgetPassword