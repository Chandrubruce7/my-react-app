import React from 'react';

import { userhovtab,usertab,hearthovsvg,heart,subtab,subtabhov,
    helpcircletab,helpcirclehovtab,termsandconditionstab,termsandconditionstabhov,shieldtab,shieldhovtab,logouttab
   } from '../components/images/images.jsx';
const SideNav = () => {
    
    return (
    
             <div className="col-lg-3 col-md-12 col-sm-12 tab-navbar p-0">
                   <h1 className="font-28">Quick Links</h1>
                   <div className="tab-list nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                       <h6 className="font-18">General</h6>
                       <button className="font-18 nav-tab-btn " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-fav" aria-selected="true">
                        <img className="active-none" src={userhovtab} alt="" srcSet=""/>
                        <img src={usertab} alt="" srcSet=""/>
                        <span>Profile</span>
                        <a className="mbl-block" href="./Edit-profile.html">Profile</a>
                    </button>
                        <button className="font-18 nav-tab-btn " id="v-pills-fav-tab" data-bs-toggle="pill" data-bs-target="#v-pills-fav" type="button" role="tab" aria-controls="v-pills-fav" aria-selected="true">
                            <img className="active-none" src={hearthovsvg} alt="" srcSet=""/>
                            <img src={heart} alt="" srcSet=""/>
                            <span>Favorites</span>
                            <a className="mbl-block" href="./Edit-fav.html">Favorites</a>
                        </button>
                        <button className="font-18 nav-tab-btn" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">                                                 
                             <img src={subtab} alt="" srcSet=""/>
                             <img className="active-none" src={subtabhov} alt="" srcSet=""/>
                          <span>Go and Free Now</span>
                          <a className="mbl-block" href="./Edit-gotofree.html">Go and Free Now</a>
                        </button>
                        <h6 className="font-18">Other</h6>
                        <button className="font-18 nav-tab-btn" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" >                                                 
                          <img src={helpcircletab} alt="" srcSet=""/>  
                          <img className="active-none" src={helpcirclehovtab} alt="" srcSet=""/>                          
                           <span>About</span><a className="mbl-block" href="./Editabout.html">About</a> </button>
                        <button className="font-18 nav-tab-btn" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-terms" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">                                                
                             <img src={termsandconditionstab} alt="" srcSet=""/>  
                             <img className="active-none" src={termsandconditionstabhov} alt="" srcSet=""/>
                          <span>Terms and Conditions</span><a className="mbl-block" href="./Editterm.html">Terms and Conditions</a> </button>
                        <button className="font-18 nav-tab-btn" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">                       
                            <img src={shieldtab} alt="" srcSet=""/> 
                            <img className="active-none" src={shieldhovtab} alt="" srcSet=""/>
                            <span>Privacy Policy</span><a className="mbl-block" href="./Editprivacy.html">Privacy Policy</a> </button>
                        <button className="font-18 nav-tab-btn"type="button"><a href="./Login.html"><img src={logouttab} alt="" srcSet=""/>Logout</a></button>
                   </div>                  
                </div>
       
    );
};

export default SideNav;