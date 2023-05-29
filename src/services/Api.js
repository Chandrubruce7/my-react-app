import axios from "axios"
import {getUserPhone } from '../services/Storage';

let url="http://localhost:8000/api/";

axios.defaults.baseURL = url;
// const API_KEY = "%YOUR_FIREBASE_API_KEY%"
const REGISTER_URL                    = url+`user-signUp`;
const LOGIN_URL                       = url+`user-login`;
const FORGET_PASSWORD_URL             = url+`otp-forgetPassword`;
const FORGET_PASSWORD_VERIFY_URL      = url+`otp-verify`;

// const USER_DETAILS_URL          = url+`user-details`;

export const RegisterApi = (inputs)=>{
    let data  = {
        name:inputs.name,
        email:inputs.email,
        password:inputs.password,
        phone:inputs.phone,
     }
    return axios.post(REGISTER_URL,data)
}
export const LoginApi = (inputs)=>{
    let data  = {email:inputs.email,
                password:inputs.password }
    return axios.post(LOGIN_URL,data)
}
export const ForgetPasswordApi = (inputs)=>{
    let data = { phone:inputs.phone}
    return axios.post(FORGET_PASSWORD_URL,data)
}

export const ForgetPasswordVerifyApi = (inputs)=>{
    const otps = inputs.one + inputs.two + inputs.three + inputs.four + inputs.five + inputs.six;

    let data = { phone:getUserPhone(),
                 otp:otps
                    }
    console.log(data);
    return axios.post(FORGET_PASSWORD_VERIFY_URL,data)
}


// export const UserDetailsApi = ()=>{
//     let data = {idToken:getUserData()}
//     return axios.post(USER_DETAILS_URL,data)
// }



