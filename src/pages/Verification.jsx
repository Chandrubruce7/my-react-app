import { React,useState } from 'react'
import { Link,Navigate } from 'react-router-dom';
import logo from '../assets/images/mbl-Logo.png';
import arrow from '../assets/images/arrow-left.svg';
import { ForgetPasswordVerifyApi } from '../services/Api';
import {storeUserData,getUserPhone,removeUserPhone } from '../services/Storage';
import { isAuthenticated } from '../services/Auth';

const Verification = () => {

        const initialStateErrors = {
            one:{required:false},
            two:{required:false},
            three:{required:false},
            four:{required:false},
            five:{required:false},
            six:{required:false},
            custom_error:null
        };
        const [errors,setErrors] = useState(initialStateErrors);
                
        const [loading,setLoading]  =  useState(false);
        
        const [otp,setOtp]  =  useState({

        });

        const [inputs,setInputs] = useState({
            one:"",
            two:"",
            three:"",
            four:"",
            five:"",
            six:""           
        })
        

        const handleInput = (event)=>{
            setInputs({...inputs,[event.target.name]:event.target.value}) 
           

        }
        

        const handleSubmit = (event)=>{
            event.preventDefault();
            let errors   = initialStateErrors; 
            let hasError = false; 

         if(!inputs.one || !inputs.two || !inputs.three || !inputs.four || !inputs.five || !inputs.six ) {
            errors.custom_error='Enter a Valid OTP';
            hasError = true; 
        }

        if (!hasError) {
        setLoading(true)
        const otps = inputs.one + inputs.two + inputs.three + inputs.four + inputs.five + inputs.six;
        setInputs({...inputs, phone:getUserPhone(), otp:otps})
            ForgetPasswordVerifyApi(inputs).then((response)=>{
                if (response.data.status === 200) {
                        removeUserPhone();
                        storeUserData(response.data.data.idToken);
                }else{
                    setErrors({...errors,custom_error:response.data.message})
                }
            }).catch((err)=>{
                    setErrors({...errors,custom_error:err})

            }).finally(()=>{
                setLoading(false)
            })
        }
        setErrors({...errors});
        }
    if (isAuthenticated()) {
        //redirect user to dashboard
        return <Navigate to="/dashboard" />
      }

  return (
    <>
     <div className="login-page-main">
         <div className="login-section ">             
             <div className="login-form-section otp-section">
                  <Link to="/login" className="arrow-left"><img srcSet={arrow} alt="" /></Link>
                  <div className="mbl-logo-sec">
                        <img srcSet={logo} alt="logo" className="src"/>
                  </div>
                  <div className="form-title">
                       <h1 className="font-32 wel-txt">Please Verify Account</h1>
                       <h6 className="font-20 wel-sub-txt">Enter the 6 digit code that we sent to your registered
                        mobile number to verify your account</h6>
                  </div>
                  <div className="form-input-section ver-otp-inpt">
                      <form onSubmit={handleSubmit}>
                          <div className="ver-otp">
                              <input type="number" name="one"   onKeyUp={handleInput} id="" className="font-24" maxLength="1" minLength="1"/>
                              <input type="number" name="two"   onKeyUp={handleInput} id="" className="font-24" maxLength="1" minLength="1"/>
                              <input type="number" name="three" onKeyUp={handleInput} id="" className="font-24" maxLength="1" minLength="1"/>
                              <input type="number" name="four"  onKeyUp={handleInput} id="" className="font-24" maxLength="1" minLength="1"/>
                              <input type="number" name="five"  onKeyUp={handleInput} id="" className="font-24" maxLength="1" minLength="1"/>
                              <input type="number" name="six"   onKeyUp={handleInput} id="" className="font-24" maxLength="1" minLength="1"/>
                          </div>
                          <div className="form-group" style={{textAlign:'center'}}>
                            {loading ?
                                (<><br/><div  className="text-center">
                                    <div className="spinner-border text-primary " role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div></>):null
                                }
                                <span className="text-danger">
                                { errors.custom_error?
                                (<p style={{color:'red'}}>{errors.custom_error}</p>)
                                :null
                                }
                                </span>
                            </div>
                          <div className="login-btn ">
                              <button type="submit" className="font-16">Submit</button>
                          </div>
                      </form>


                      <div className="resend-sec">
                          <p className="font-18">Resend Code<span className="font-18">01:48</span></p>
                      </div>

                  </div>                  
             </div>
         </div>
   </div>

    </>
   
  )
}

export default Verification;
