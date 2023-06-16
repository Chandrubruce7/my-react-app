import React, { useState } from 'react';
import { Link,Navigate,useLocation } from 'react-router-dom';
import headerLogo from '../assets/images/header_logo.png';
import heart from '../assets/images/heart.svg';
import notification from '../assets/images/notification.svg';
import magnifying from '../assets/images/magnifying-glass.svg';
import usericon from '../assets/images/usericon-homepage.png';
import downarrow from '../assets/images/down_arrow.svg';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Header = () => {
    const location = useLocation();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // const closeBtn = (
    //     <button className="close" onClick={toggle} type="button">
    //       &times;
    //     </button>
    //   );
    return (
        
         <>
         <header>
            <div className="custom_container header_section ">
                <div className="header_logo_section">
                    <div className="header_logo"><Link to="/homepage"><img src={headerLogo} alt="logo"/></Link></div>
                </div>
                <ul className="nav_list">
                    <li className={` ${(location.pathname === '/homepage') ? 'active' : ''}`}><Link to="/homepage">Home</Link></li>
                    <li className={` ${(location.pathname === '/Events') ? 'active' : ''}`}><Link to="/Events">My Events</Link></li>
                    <li className={` ${(location.pathname === '/Support') ? 'active' : ''}`}><Link to="/Support">Support</Link></li>
                </ul>
                <div className="header_profile_section">
                    <div className="header_icon_section">
                        <div className="seach_icon" data-bs-toggle="modal" href="#exampleModalToggle1" role="button"><img
                                src={magnifying} alt=""/> </div>
                        <div className="fav_icon"><Link to="/Profile"><img src={heart} alt=""/></Link></div>
                        <div className="notfication_icon" onClick={toggle} data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img
                                src={notification} alt=""  /></div>
                    </div>
                    <Link to="/Profile">
                        <div className="header_profile">
                            <div className="header_profile_img"><img src={usericon} alt="profile"/>
                            </div>
                            <div className="header_profile_name">
                                <p>Welcome!</p>
                                <h6>Justin Biber</h6>
                            </div>
                            <div className="header_profile_icon"><img src={downarrow} alt="arrow"/></div>
                        </div>
                    </Link>
                    <div className="menu_icon nav-icon" aria-label="Main Menu">
                        <svg width="30" height="30" viewBox="0 0 100 100">
                            <path className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
    
                    </div>
                </div>
            </div>
         </header>        
        <Modal isOpen={modal} toggle={toggle}>
                <div className="notification_header">
                    <h2>Notifications</h2>
                    <p type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle}></p>

                </div>
                <div className="list_notification">

                    <div className="today_mgs">
                        <div className="day_list">
                            <h6>Today</h6>
                            <p>Mark all as read</p>
                        </div>
                        <div className="list_notification_innre not_open">
                            <div className="img_noti"><img src={usericon} alt=""/>
                            </div>
                            <div className="notification_text">
                                <h4>Justin Biber created a Event</h4>
                                <p> 2 Hours ago</p>
                            </div>
                        </div>
                        <div className="list_notification_innre not_open">
                            <div className="img_noti"><img src={usericon} alt=""/>
                            </div>
                            <div className="notification_text">
                                <h4>Right wing tree event is going to
                                    start in few mins, Get ready !!</h4>
                                <p> 5 Hours ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="old_mgs">
                        <div className="day_list">
                            <h6>Today</h6>

                        </div>
                        <div className="list_notification_innre">
                            <div className="img_noti"><img src={usericon} alt=""/>
                            </div>
                            <div className="notification_text">
                                <h4>Ariyana grande cancelled the event</h4>
                                <p> 24 jan</p>
                            </div>
                        </div>
                        <div className="list_notification_innre ">
                            <div className="img_noti"><img src={usericon} alt=""/>
                            </div>
                            <div className="notification_text">
                                <h4>Your favorite artist event started</h4>
                                <p> 24 jan</p>
                            </div>
                        </div>
                        <div className="list_notification_innre">
                            <div className="img_noti"><img src={usericon} alt=""/>
                            </div>
                            <div className="notification_text">
                                <h4>Your favorite artist event started</h4>
                                <p> 24 jan</p>
                            </div>
                        </div>
                        <div className="list_notification_innre ">
                            <div className="img_noti"><img src={usericon} alt=""/>
                            </div>
                            <div className="notification_text">
                                <h4>Your favorite artist event started</h4>
                                <p> 24 jan</p>
                            </div>
                        </div>
                        <div className="list_notification_innre">
                            <div className="img_noti"><img src={usericon} alt=""/>
                            </div>
                            <div className="notification_text">
                                <h4>Your favorite artist event started</h4>
                                <p> 24 jan</p>
                            </div>
                        </div>
                        <div className="list_notification_innre ">
                            <div className="img_noti"><img src={usericon} alt=""/>
                            </div>
                            <div className="notification_text">
                                <h4>Your favorite artist event started</h4>
                                <p> 24 jan</p>
                            </div>
                        </div>
                    </div>
                </div>
        </Modal>
        </>
    );
};

export default Header;