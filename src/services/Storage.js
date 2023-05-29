export const storeUserData = (data)=>{
    localStorage.setItem('idToken',data)
}

export const getUserData = ()=>{
    return localStorage.getItem('idToken');
}

export const removeUserData = ()=>{
     localStorage.removeItem('idToken')
}

export const storeUserPhone = (data)=>{
    // alert(data);
    localStorage.setItem('phone',data)
}

export const getUserPhone = ()=>{
    return localStorage.getItem('phone');
}

export const removeUserPhone = ()=>{
    localStorage.removeItem('phone')
}