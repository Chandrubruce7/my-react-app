import { getUserData, removeUserData, getUserPhone } from "./Storage"


export const isAuthenticated = ()=>{
    return getUserData()!=null?true:false;
}

export const logout = ()=>{
    removeUserData();
}

export const isVerified = ()=>{
    return getUserPhone()!=null?true:false;
}

