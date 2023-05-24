import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/mbl-Logo.png';
import arrow from '../assets/images/arrow-left.svg';

const Verification = () => {
  return (
    <>
     <div class="login-page-main">
         <div class="login-section ">             
             <div class="login-form-section otp-section">
                  <Link to="/login" class="arrow-left"><img src={arrow} alt="" srcset=""/></Link>
                  <div class="mbl-logo-sec">
                        <img src={logo} alt="logo" class="src"/>
                  </div>
                  <div class="form-title">
                       <h1 class="font-32 wel-txt">Please Verify Account</h1>
                       <h6 class="font-20 wel-sub-txt">Enter the 6 digit code that we sent to your registered
                        mobile number to verify your account</h6>
                  </div>
                  <div class="form-input-section ver-otp-inpt">
                      <form action="">
                          <div class="ver-otp">
                              <input type="number" name="" id="" class="font-24" />
                              <input type="number" name="" id="" class="font-24"  disabled />
                              <input type="number" name="" id="" class="font-24"  disabled/>
                              <input type="number" name="" id="" class="font-24"  disabled/>
                              <input type="number" name="" id="" class="font-24"  disabled/>
                              <input type="number" name="" id="" class="font-24"  disabled/>
                          </div>

                          <div class="login-btn ">
                              <button type="submit" class="font-16"><Link  to="/homepage">Submit</Link></button>
                          </div>
                      </form>


                      <div class="resend-sec">
                          <p class="font-18">Resend Code<span class="font-18">01:48</span></p>
                      </div>

                  </div>                  
             </div>
         </div>
   </div>

    </>
   
  )
}

export default Verification;