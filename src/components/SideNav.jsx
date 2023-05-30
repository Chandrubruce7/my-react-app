import { React,useState } from 'react'
import { Link,NavLink } from 'react-router-dom';
import { userhovtab,usertab,hearthovsvg,heart,subtab,subtabhov,
    helpcircletab,helpcirclehovtab,termsandconditionstab,termsandconditionstabhov,shieldtab,shieldhovtab,logouttab
   } from '../components/images/images.jsx';
const SideNav = ({children}) => {
    
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const generalItem=[
        {
            path:"/ProfilePage",
            name:"Profile",
            img:usertab,
            img1:userhovtab
        },
        {
            path:"/Favorites",
            name:"Favorites",
            img:heart,
            img1:hearthovsvg
        },
        {
            path:"/GoandFreeNow",
            name:"Go and Free Now",
            img:subtab,
            img1:subtabhov
        },
        
    ]

    const otherItem=[
        {
            path:"/ProfilePage",
            name:"Profile",
            img:usertab,
            img1:userhovtab
        },
        {
            path:"/Favorites",
            name:"Favorites",
            img:heart,
            img1:hearthovsvg
        },
        {
            path:"/GoandFreeNow",
            name:"Go and Free Now",
            img:subtab,
            img1:subtabhov
        },
        
    ]


    return (
    
             <div className="col-lg-3 col-md-12 col-sm-12 tab-navbar p-0">
                   <h1 className="font-28">Quick Links</h1>
                   <div className="tab-list nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                       <h6 className="font-18">General</h6>

                       {
                   generalItem.map((item, index)=>(
                    <NavLink key={index} to={item.path} className="link" activeclassName="active">
                        <button className="font-18 nav-tab-btn " activeclassName="show active" type="button">

                        <img src={item.img} alt="" srcSet=""/>
                        <img className="active-none" src={item.img1} alt="" srcSet=""/>
                        <span>{item.name}</span>
                        </button>
                     </NavLink>
                    //    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    //        <div className="icon">{item.icon}</div>
                    //        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    //    </NavLink>
                   ))
               }


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