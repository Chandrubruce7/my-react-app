import { React,useState } from 'react'
import { Link,Navigate } from 'react-router-dom';
import logo from '../assets/images/mbl-Logo.png';
import arrow from '../assets/images/arrow-left.svg';
import { ForgetPasswordVerifyApi } from '../services/Api';
import {storeUserData, removeUserPhone } from '../services/Storage';
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

        const [inputs,setInputs] = useState({
            one:"",
            two:"",
            three:"",
            four:"",
            five:"",
            six:""           
        })
        
        const handleInput = (event)=>{
            if (event.key === 'Backspace') {
                if(event.target.value){
                    let nextElementIds = event.target.name;              
                    document.getElementById(nextElementIds).focus();
                    var vat='';
                    setInputs({...inputs,[event.target.name]:vat}) 
                }else{
                    let nextElementIds = event.target.id-1;
                    document.getElementById(nextElementIds).focus();
                }
                
              }else{
                var val = event.target.value;
                if(val.length === 1 ){
                    setInputs({...inputs,[event.target.name]:event.target.value}) 
                }else if(val.length>1) {
                    var vas = String(event.target.value).match(/\d/);
                    event.target.value=vas;
                    setInputs({...inputs,[event.target.name]:vas}) 
                }
                let nextElementId = event.target.attributes["data-focus"].value;
                document.getElementById(nextElementId).focus();
             }
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
        setErrors({...errors,custom_error:null})
        setLoading(true)
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
        //redirect user to homepage
        return <Navigate to="/homepage" />
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
                        Email to verify your account</h6>
                  </div>
                  <div className="form-input-section ver-otp-inpt">
                      <form onSubmit={handleSubmit}>
                          <div className="ver-otp">
                              <input type="number" name="one" data-focus={"2"} keyboardtype={'numeric'} onKeyUp={handleInput} id="1" className="font-24 "  maxLength="1" minLength="1"/>
                              <input type="number" name="two"  data-focus={"3"} keyboardtype={'numeric'}  onKeyUp={handleInput} id="2" className="font-24 " maxLength="1" minLength="1"/>
                              <input type="number" name="three"data-focus={"4"} keyboardtype={'numeric'} onKeyUp={handleInput} id="3" className="font-24 " maxLength="1" minLength="1"/>
                              <input type="number" name="four" data-focus={"5"} keyboardtype={'numeric'} onKeyUp={handleInput} id="4" className="font-24 " maxLength="1" minLength="1"/>
                              <input type="number" name="five" data-focus={"6"} keyboardtype={'numeric'}  onKeyUp={handleInput} id="5" className="font-24 " maxLength="1" minLength="1"/>
                              <input type="number" name="six"  data-focus={"1"} keyboardtype={'numeric'}  onKeyUp={handleInput} id="6" className="font-24 " maxLength="1" minLength="1"/>
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
