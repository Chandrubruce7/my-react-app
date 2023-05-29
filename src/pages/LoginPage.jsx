import { React,useState } from 'react'
import { Link,Navigate } from 'react-router-dom';
import email from '../assets/images/Email.svg';
import logo from '../assets/images/mbl-Logo.png';
import password from '../assets/images/password.svg';
import eyeHide from '../assets/images/eye-hide.svg';
import eyeOpen from '../assets/images/eye-open.svg';
import { LoginApi } from '../services/Api';
import {storeUserData,removeUserPhone } from '../services/Storage';
import { isAuthenticated } from '../services/Auth';
// import { initialStateErrors } from '../services/initialStateErrors';

const LoginPage = () => {

    removeUserPhone();
    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
        custom_error:null
    };
    const [errors,setErrors] = useState(initialStateErrors);
    
    const [loading,setLoading]  =  useState(false);

    const [inputs,setInputs] = useState({
        email:"",
        password:"",
        showPassword: false,
    })
    //eye button action
    const handlePasswordChange = () => {
        setInputs({ ...inputs, showPassword: !inputs.showPassword });
    }
    //
    const handleInput = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        let errors =initialStateErrors; 
        let hasError = false; 
        console.log(inputs);

        if (inputs.email == "") {
            errors.email.required =true;
            hasError=true;
        } 
        if (inputs.password == "") {
            errors.password.required =true;
            hasError=true;
        }

        if (!hasError) {
            setLoading(true)
            //sending login api request
            LoginApi(inputs).then((response)=>{
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
        //redirect user to dashboard
        return <Navigate to="/dashboard" />
    }
        
    return (
        <>
            <div className="login-page-main">
                <div className="login-section">
                    <div className="login-form-section">
                        <div className="mbl-logo-sec">
                            <img src={logo} alt="logo" className="src" />
                        </div>
                        <div className="form-title">
                            <h1 className="font-32 wel-txt">Welcome Back</h1>
                            <h6 className="font-20 wel-sub-txt">Login to continue using your account</h6>
                        </div>
                        <div className="form-input-section">
                            <form onSubmit={handleSubmit}>
                                <div className="email-section">
                                    <label htmlFor="" className="font-16">Email Address*</label>
                                    <div className="email-icon">
                                        <span>
                                            <img src={email} alt="" />
                                        </span>
                                        <input className="font-16" type="email" onChange={handleInput} name="email" placeholder="Enter Address" />
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
                                        <span className="psd-icon"> <img src={password} alt="" /> </span>
                                        <input className="font-16" type={inputs.showPassword ? "text" : "password"} onChange={handleInput} id="password" name="password" placeholder="Enter Password" />
                                        <span className="eye-icon" onClick={handlePasswordChange}>
                                            {inputs.showPassword  ? <img id="pw-open" src={eyeOpen} alt="" />:
                                            <img id="pw-close" src={eyeHide} alt="" />  }
                                        </span>
                                        { errors.password.required ?
                                            (<span className="text-danger" >
                                                Password is required.
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
                                    <Link to="/forget">Forgot Password?</Link>
                                </div>
                                <div className="login-btn">
                                    <button type="submit" className="font-16">Login Now</button>
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
