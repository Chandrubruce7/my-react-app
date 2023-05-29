import { React,useState } from 'react'
import { Link,Navigate } from 'react-router-dom';
import user from '../assets/images/user.svg';
import logo from '../assets/images/mbl-Logo.png';
import phone from '../assets/images/phone.svg';
import email from '../assets/images/Email.svg';
import password from '../assets/images/password.svg';
import eyeHide from '../assets/images/eye-hide.svg';
import eyeOpen from '../assets/images/eye-open.svg';
import validator from 'validator';
import {storeUserData } from '../services/Storage';
import { isAuthenticated } from '../services/Auth';
import { RegisterApi } from '../services/Api';


const Register = () => {

    const initialStateErrors = {
        name:{required:false},
        phone:{required:false},
        email:{required:false},
        password:{required:false},
        confirmpassword:{required:false},
        // checkbox:{checked:false},
        custom_error:null
    };
    const [errors,setErrors] = useState(initialStateErrors);
    
    const [loading,setLoading]  =  useState(false);

    const [inputs,setInputs] = useState({
        name:"",
        phone:"",
        email:"",
        password:"",
        confirmpassword:"",
        // checkbox:false,
        showPassword: false,
    });
    
    const [passwordType, setPasswordType] = useState("password");
    const [confirmpasswordType, setConfirmPasswordType] = useState("password");
 
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const toggleConfirmPassword = () => {
        if (confirmpasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

    const handleInput = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        let errors =initialStateErrors; 
        let hasError = false; 
        console.log(inputs);
        
        if (inputs.name === "") {
            errors.name.required =true;
            hasError=true;
        } 

        if (inputs.phone === "") {
            errors.phone.required ='Mobile Number is required.';
            hasError=true;
        }else{
        var pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
        if (!pattern.test(inputs.phone)) {
            errors.phone.required = "Enter a valid Mobile Number";
            hasError=true;
        } else if (inputs.phone.length !== 10) {
            errors.phone.required = "Mobile Number must be 10 digit.";
            hasError=true;
        }
        }

        if (inputs.email === "") {
            errors.email.required =true;
            hasError=true;
        }

        if (inputs.password.length === 0) {
            errors.password.required ='Password is required.';
            hasError=true;
        }else if (!validator.isStrongPassword(inputs.password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            errors.password.required='Password Must contain 8 characters At least one Uppercase, Lowercase, One digit, one Special Characters.';
            hasError=true;
          }

        if (inputs.confirmpassword === "") {
            errors.confirmpassword.required ='Confirm Password is required.';
            hasError=true;
        } 
        
        if(inputs.confirmpassword.length >0 && inputs.password !== inputs.confirmpassword){
            errors.confirmpassword.required ='Password and Confirm Password Mismatched';
            hasError=true;
        } 
      
        if (!hasError) {
            setLoading(true)
            //sending login api request
            RegisterApi(inputs).then((response)=>{
                if (response.data.status === 200) {
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
            //redirect user to homepage
            return <Navigate to="/homepage" />
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
                            <form onSubmit={handleSubmit}>
                                <div className="email-section">
                                    <label htmlFor="" className="font-16">Full Name*</label>
                                    <div className="email-icon">
                                        <span>
                                            <img src={user} alt="" srcSet="" />
                                        </span>
                                        <input className="font-16" type="text" name="name" onChange={handleInput} placeholder="Name" />
                                    </div>
                                    { errors.name.required?
                                            (<span className="text-danger" >
                                                Full Name is required.
                                            </span>):null
                                        }
                                </div>
                                <div className="email-section">
                                    <label htmlFor="" className="font-16">Mobile Number*</label>
                                    <div className="email-icon mbl-num-sec">
                                        <span>
                                            <img src={phone} alt="" srcSet="" />
                                        </span>
                                        <input type="" id="phoneNumber" name="phone" onChange={handleInput} placeholder="Mobile Number" maxLength="10" />
                                        <div className="num-drp">
                                            <p>+91</p>
                                        </div>
                                    </div>
                                    { errors.phone.required !==''?
                                            (<span className="text-danger" >
                                               { errors.phone.required }
                                            </span>):null
                                        }
                                </div>
                                <div className="email-section">
                                    <label htmlFor="" className="font-16">Email Address*</label>
                                    <div className="email-icon">
                                        <span>
                                            <img src={email} alt="" srcSet="" />
                                        </span>
                                        <input className="font-16" type="email" name="email" onChange={handleInput} placeholder="Enter Address" />
                                    </div>
                                    { errors.email.required?
                                            (<span className="text-danger" >
                                                Email is required.
                                            </span>):null
                                        }
                                </div>
                                <div className="password-section">
                                    <label htmlFor="" className="font-16">Password*</label>
                                    <div className="psd-eye">
                                        <span className="psd-icon"> <img src={password} alt="" srcSet="" /> </span>
                                        <input className="font-16" name="password" type={passwordType} onChange={handleInput} placeholder="Enter Password" />
                                        <span className="eye-icon" onClick={togglePassword}>
                                            {passwordType === "password" ? <img id="pw-close" src={eyeHide} alt="" /> :
                                                <img id="pw-open" src={eyeOpen} alt="" />}
                                        </span>
                                        { errors.password.required !==''?
                                            (<span className="text-danger" >
                                               {errors.password.required}
                                            </span>):null
                                            }
                                    </div>
                                </div>
                                <div className="password-section Confirm-psd">
                                    <label htmlFor="" className="font-16">Confirm Password*</label>
                                    <div className="psd-eye">
                                        <span className="psd-icon"> <img src={password} alt="" srcSet="" /> </span>
                                        <input className="font-16" name="confirmpassword" type={confirmpasswordType} onChange={handleInput} placeholder="Enter Password" />
                                        <span className="eye-icon" onClick={toggleConfirmPassword}>
                                            {confirmpasswordType === "password" ? <img id="pw-close" src={eyeHide} alt="" /> :
                                                <img id="pw-open" src={eyeOpen} alt="" />}
                                        </span>
                                    </div>
                                    { errors.confirmpassword.required !==''?
                                            (<span className="text-danger" >
                                                {errors.confirmpassword.required}
                                            </span>):null
                                        }
                                </div>

                                <div className="check-box-section reg-check-box">
                                    <input type="checkbox" name="checkbox" id="cus-box" />
                                    <label className="font-16" htmlFor=" cus-box ">I Accept the all<span>Terms and Conditions</span></label>
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
                                    <button type="submit" className="font-16">Register Here</button>
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