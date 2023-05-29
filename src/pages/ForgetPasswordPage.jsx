import { React,useState } from 'react'
import { Link,Navigate } from 'react-router-dom';
import phone from '../assets/images/phone.svg';
import logo from '../assets/images/mbl-Logo.png';
import { ForgetPasswordApi } from '../services/Api';
import {storeUserPhone } from '../services/Storage';
import { isVerified } from '../services/Auth';

const ForgetPassword = () => {

        const initialStateErrors = {
              phone:{required:false},
              custom_error:null
      };

        const [errors,setErrors] = useState(initialStateErrors);
        
        const [loading,setLoading]  =  useState(false);

        const [inputs,setInputs] = useState({
            phone:"",
        })

        const handleInput = (event)=>{
           setInputs({...inputs,[event.target.name]:event.target.value})
      }
        const handleSubmit = (event)=>{
            event.preventDefault();
            let errors =initialStateErrors; 
            let hasError = false; 

            if (inputs.phone == "") {
              errors.phone.required ='Mobile Number is required.';
              hasError=true;
            }else{
            var pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
            if (!pattern.test(inputs.phone)) {
                errors.phone.required = "Enter a valid Mobile Number";
                hasError=true;
            } else if (inputs.phone.length != 10) {
                errors.phone.required = "Mobile Number must be 10 digit.";
                hasError=true;
            }
            }

        if (!hasError) {
          setLoading(true)
              ForgetPasswordApi(inputs).then((response)=>{
                if (response.data.status === 200) {
                        storeUserPhone(response.data.data.phone);
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
      if (isVerified()) {
        //redirect user to dashboard
        return <Navigate to="/verification" />
      }
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
              <form onSubmit={handleSubmit}>
                <div className="email-section">
                  <label htmlFor="" className="font-16">Mobile Number*</label>
                  <div className="email-icon mbl-num-sec">
                    <span>
                      <img src={phone} alt="" srcSet="" />
                    </span>
                    <input type="" id="phoneNumber" onChange={handleInput} name='phone' placeholder="Mobile Number" maxLength="10" />
                    <div className="num-drp">
                      <p>+91</p>
                    </div>
                  </div>
                  { errors.phone.required !=''?
                      (<span className="text-danger" >
                        { errors.phone.required }
                      </span>):null
                  }
                </div>
                <div className="form-group">
                  {loading ?
                    (<><br/><div  className="text-center">
                        <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div></>):null
                    }
                    <span className="text-danger" >
                    { errors.custom_error?
                    (<p style={{color:'red'}}>{errors.custom_error}</p>)
                    :null
                    }
                    </span>
                </div>
                <div className="login-btn">
                  <button type="submit" className="font-16">Submit</button>
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