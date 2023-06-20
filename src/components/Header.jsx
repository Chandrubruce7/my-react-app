import React, { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Modal } from 'reactstrap';
import {
    heart, headerLogo, notification, magnifying, usericon, downarrow, searchicon, calendar, clock
} from '../components/images/images.jsx';


const Header = () => {
    const location = useLocation();

    const [notifyActive, notiActive] = useState(false);
    const [searchActive, searActive] = useState(false);

    const toggle = () => notiActive(!notifyActive);
    const toggle2 = () => searActive(!searchActive);

    return (

        <>
            <header>
                <div className="custom_container header_section ">
                    <div className="header_logo_section">
                        <div className="header_logo"><Link to="/home"><img src={headerLogo} alt="logo" /></Link></div>
                    </div>
                    <ul className="nav_list">
                        <li className={` ${(location.pathname === '/home') ? 'active' : ''}`}><Link to="/home">Home</Link></li>
                        <li className={` ${(location.pathname === '/MyEvents') ? 'active' : ''}`}><Link to="/MyEvents">My Events</Link></li>
                        <li className={` ${(location.pathname === '/Support') ? 'active' : ''}`}><Link to="/Support">Support</Link></li>
                    </ul>
                    <div className="header_profile_section">
                        <div className="header_icon_section">
                            <div className="seach_icon" onClick={toggle2} data-bs-toggle="modal" href="#exampleModalToggle1" role="button"><img
                                src={magnifying} alt="" /> </div>
                            <div className="fav_icon"><Link to="/Profile"><img src={heart} alt="" /></Link></div>
                            <div className="notfication_icon" onClick={toggle} data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img
                                src={notification} alt="" /></div>
                        </div>
                        <Link to="/Profile">
                            <div className="header_profile">
                                <div className="header_profile_img"><img src={usericon} alt="profile" />
                                </div>
                                <div className="header_profile_name">
                                    <p>Welcome!</p>
                                    <h6>Justin Biber</h6>
                                </div>
                                <div className="header_profile_icon"><img src={downarrow} alt="arrow" /></div>
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

            <div className="modal right fade show" id="exampleModalToggle" aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel" tabIndex="-1" style={{ display: (notifyActive) ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
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
                                    <div className="img_noti"><img src={usericon} alt="" />
                                    </div>
                                    <div className="notification_text">
                                        <h4>Justin Biber created a Event</h4>
                                        <p> 2 Hours ago</p>
                                    </div>
                                </div>
                                <div className="list_notification_innre not_open">
                                    <div className="img_noti"><img src={usericon} alt="" />
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
                                    <div className="img_noti"><img src={usericon} alt="" />
                                    </div>
                                    <div className="notification_text">
                                        <h4>Ariyana grande cancelled the event</h4>
                                        <p> 24 jan</p>
                                    </div>
                                </div>
                                <div className="list_notification_innre ">
                                    <div className="img_noti"><img src={usericon} alt="" />
                                    </div>
                                    <div className="notification_text">
                                        <h4>Your favorite artist event started</h4>
                                        <p> 24 jan</p>
                                    </div>
                                </div>
                                <div className="list_notification_innre">
                                    <div className="img_noti"><img src={usericon} alt="" />
                                    </div>
                                    <div className="notification_text">
                                        <h4>Your favorite artist event started</h4>
                                        <p> 24 jan</p>
                                    </div>
                                </div>
                                <div className="list_notification_innre ">
                                    <div className="img_noti"><img src={usericon} alt="" />
                                    </div>
                                    <div className="notification_text">
                                        <h4>Your favorite artist event started</h4>
                                        <p> 24 jan</p>
                                    </div>
                                </div>
                                <div className="list_notification_innre">
                                    <div className="img_noti"><img src={usericon} alt="" />
                                    </div>
                                    <div className="notification_text">
                                        <h4>Your favorite artist event started</h4>
                                        <p> 24 jan</p>
                                    </div>
                                </div>
                                <div className="list_notification_innre ">
                                    <div className="img_noti"><img src={usericon} alt="" />
                                    </div>
                                    <div className="notification_text">
                                        <h4>Your favorite artist event started</h4>
                                        <p> 24 jan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal right fade show" id="exampleModalToggle1" aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel" tabIndex="-1" style={{ display: (searchActive) ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="notification_header">
                            <h2>Advance Search</h2>
                            <p type="button" className="btn-close" data-bs-dismiss="modal" onClick={toggle2} aria-label="Close"></p>

                        </div>
                        <div className="list_notification">
                            <div className="seach_field">
                                <input type="text" placeholder="Search " />
                                <span><img src={searchicon} alt="" /></span>
                            </div>
                            <div className="radio_section_header">
                                <div className="radio_section">
                                    <input type="radio" name="name" id="event" />
                                    <label htmlFor="event">Events</label>
                                </div>
                                <div className="radio_section">
                                    <input type="radio" name="name" id="artist" />
                                    <label htmlFor="artist">Artist</label>
                                </div>
                            </div>
                            <div className="bottom_section_rating">
                                <div className="checkBox_sction">
                                    <input type="checkbox" name="name" id="rating" />
                                    <label htmlFor="rating">Rating</label>
                                </div>
                                <div className="Rating_star_section">
                                    <p className="Rating_star">1 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                        viewBox="0 0 12 12" fill="none">
                                        <path
                                            d="M11.6815 4.29154L7.99251 3.72804L6.33901 0.206039C6.21551 -0.0569609 5.78401 -0.0569609 5.66051 0.206039L4.00751 3.72804L0.318514 4.29154C0.0155136 4.33804 -0.105486 4.70654 0.107014 4.92404L2.78701 7.67104L2.15351 11.5545C2.10301 11.863 2.43251 12.0945 2.70501 11.943L6.00001 10.122L9.29501 11.9435C9.56501 12.0935 9.89751 11.8665 9.84651 11.555L9.21301 7.67154L11.893 4.92454C12.1055 4.70654 11.984 4.33804 11.6815 4.29154Z"
                                            fill="currentColor" />
                                    </svg></p>
                                    <p className="Rating_star">2 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                        viewBox="0 0 12 12" fill="none">
                                        <path
                                            d="M11.6815 4.29154L7.99251 3.72804L6.33901 0.206039C6.21551 -0.0569609 5.78401 -0.0569609 5.66051 0.206039L4.00751 3.72804L0.318514 4.29154C0.0155136 4.33804 -0.105486 4.70654 0.107014 4.92404L2.78701 7.67104L2.15351 11.5545C2.10301 11.863 2.43251 12.0945 2.70501 11.943L6.00001 10.122L9.29501 11.9435C9.56501 12.0935 9.89751 11.8665 9.84651 11.555L9.21301 7.67154L11.893 4.92454C12.1055 4.70654 11.984 4.33804 11.6815 4.29154Z"
                                            fill="currentColor" />
                                    </svg></p>
                                    <p className="Rating_star">3 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                        viewBox="0 0 12 12" fill="none">
                                        <path
                                            d="M11.6815 4.29154L7.99251 3.72804L6.33901 0.206039C6.21551 -0.0569609 5.78401 -0.0569609 5.66051 0.206039L4.00751 3.72804L0.318514 4.29154C0.0155136 4.33804 -0.105486 4.70654 0.107014 4.92404L2.78701 7.67104L2.15351 11.5545C2.10301 11.863 2.43251 12.0945 2.70501 11.943L6.00001 10.122L9.29501 11.9435C9.56501 12.0935 9.89751 11.8665 9.84651 11.555L9.21301 7.67154L11.893 4.92454C12.1055 4.70654 11.984 4.33804 11.6815 4.29154Z"
                                            fill="currentColor" />
                                    </svg></p>
                                    <p className="Rating_star">4 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                        viewBox="0 0 12 12" fill="none">
                                        <path
                                            d="M11.6815 4.29154L7.99251 3.72804L6.33901 0.206039C6.21551 -0.0569609 5.78401 -0.0569609 5.66051 0.206039L4.00751 3.72804L0.318514 4.29154C0.0155136 4.33804 -0.105486 4.70654 0.107014 4.92404L2.78701 7.67104L2.15351 11.5545C2.10301 11.863 2.43251 12.0945 2.70501 11.943L6.00001 10.122L9.29501 11.9435C9.56501 12.0935 9.89751 11.8665 9.84651 11.555L9.21301 7.67154L11.893 4.92454C12.1055 4.70654 11.984 4.33804 11.6815 4.29154Z"
                                            fill="currentColor" />
                                    </svg></p>
                                    <p className="Rating_star">5 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                        viewBox="0 0 12 12" fill="none">
                                        <path
                                            d="M11.6815 4.29154L7.99251 3.72804L6.33901 0.206039C6.21551 -0.0569609 5.78401 -0.0569609 5.66051 0.206039L4.00751 3.72804L0.318514 4.29154C0.0155136 4.33804 -0.105486 4.70654 0.107014 4.92404L2.78701 7.67104L2.15351 11.5545C2.10301 11.863 2.43251 12.0945 2.70501 11.943L6.00001 10.122L9.29501 11.9435C9.56501 12.0935 9.89751 11.8665 9.84651 11.555L9.21301 7.67154L11.893 4.92454C12.1055 4.70654 11.984 4.33804 11.6815 4.29154Z"
                                            fill="currentColor" />
                                    </svg></p>
                                </div>
                                <div className="checkBox_sction ">
                                    <input type="checkbox" name="name" id="date" />
                                    <label htmlFor="date">Date & Time</label>
                                </div>
                                <div id="datepicker" className="input-group date seach_field" data-date-format="mm-dd-yyyy">
                                    <input className="form-control input-group-addon" id="inner-date1" type="text" placeholder="From Date" />
                                    <label htmlFor="inner-date"><img src={calendar} alt="" /></label>
                                </div>
                                <div id="datepicker1" className="input-group date seach_field" data-date-format="mm-dd-yyyy">
                                    <input className="form-control input-group-addon" id="inner-date2" type="text" placeholder="To Date" />
                                    <label htmlFor="inner-date"><img src={calendar} alt="" /></label>
                                </div>
                                <div id="datepicker3" className="input-group date seach_field" data-date-format="mm-dd-yyyy">
                                    <input className="form-control input-group-addon" id="inner-date3" type="text" placeholder="Select Time" />
                                    <label htmlFor="inner-date"><img src={clock} alt="" /></label>
                                </div>
                                <div className="checkBox_sction ">
                                    <input type="checkbox" name="name" id="Popular" />
                                    <label htmlFor="Popular">Most Popular</label>
                                </div>
                                <div className="checkBox_sction ">
                                    <input type="checkbox" name="name" id="genre" />
                                    <label htmlFor="genre">Genre</label>
                                </div>
                                <div className="gender_section">
                                    <p className="gender_lisr">Pop</p>
                                    <p className="gender_lisr">Jazz</p>
                                    <p className="gender_lisr">Hip hop</p>
                                    <p className="gender_lisr">Blues</p>
                                    <p className="gender_lisr">Dance pop </p>
                                    <p className="gender_lisr">Techno</p>
                                    <p className="gender_lisr">Classical</p>
                                </div>
                                <div className="button_section">
                                    <button className="re_btn w-100"><a href="/ArtistsSearchresult">Search</a></button>
                                </div>
                                <a className="clear_navgat" href="">Clear</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;