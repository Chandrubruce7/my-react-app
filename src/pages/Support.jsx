
import React from 'react';
import HomePage from '../pages/Homepage';
import { user,email,phone } from '../components/images/images.jsx';

const Support = () => {
    return (
        <HomePage>
        <section className="main_section">     
        <div className="custom_container contact-section">
          <div className="tab-heading arrow-align">
            <h1 className="font-28"> Support</h1>
          </div> 
              <div className="row">
                  <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                     <div className="con-left-sec">
                         <div className="contact-text">
                              <h1 className="font-22">Let's Talk</h1>
                              <p className="font-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                         </div>
                         <div className="form-input-section">
                            <form action="" className="contact-form-section">
                              <div className="first-column">
                                    <div className="email-section ">
                                    <label htmlFor="" className="font-16">First Name</label>
                                    <div className="email-icon">
                                    <span>
                                    <img src={ user } alt="" srcSet=""/>
                                    </span>
                                    <input className="font-16"type="text" placeholder="Enter First Name" />
                                    </div>
                                    </div>
                                      <div className="email-section ">
                                        <label htmlFor="" className="font-16">Last Name</label>
                                        <div className="email-icon">
                                        <span>
                                        <img src={ user } alt="" srcSet=""/>
                                        </span>
                                        <input className="font-16"type="text" placeholder="Enter Last Name" defaultValue=""/>
                                        </div>
                                      </div>                            
                                      <div className="email-section">
                                        <label htmlFor="" className="font-16">Email </label>
                                        <div className="email-icon">
                                          <span>
                                              <img src={ email } alt="" srcSet=""/>
                                          </span>
                                          <input className="font-16"type="email" placeholder="Enter Email" defaultValue=""/>
                                        </div>
                                      </div>
                                      <div className="email-section">
                                        <label htmlFor="" className="font-16">Phone</label>
                                        <div className="email-icon">
                                        <span>
                                        <img src={ phone } alt="" srcSet=""/>
                                        </span>
                                        <input className="font-16"type="text" placeholder="Enter Phone" defaultValue=""/>
                                        </div>
                                      </div>
                               </div>
                               <div className="con-text-area">
                                  <label htmlFor="">Comment</label>
                                  <textarea name="" id=""  className="font-15" placeholder="Enter Message"></textarea>

                                  <div className="login-btn con-form-btn">
                                    <button type="submit" className="font-16">Submit</button>
                                </div>
                               </div>
                            </form>
                         </div>
                     </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <div className="con-right-sec">
                        <div className="more-options-sec">
                          <div className="contact-text">
                            <h1 className="font-22 ">More Options</h1>
                            <p className="font-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                         </div>    
                           <div className="second-column">
                              <div className="calls-sec">
                                 <img src="./assets/images/support1.png" alt="" srcSet=""/>
                                 <h6 className="font-20">Call us
                                   <span className="font-18">+(62)21-2002-2012</span>
                                 </h6>
                              </div>

                              <div className="calls-sec">
                                <img src="./assets/images/support2.png" alt="" srcSet=""/>
                                <h6 className="font-20">Email us
                                  <span className="font-18">Support@gmail.com</span>
                                </h6>
                             </div>
                           </div>
                           <div className="loction-sec">
                            <div className="calls-sec">
                              <img src="./assets/images/support3.png" alt="" srcSet=""/>
                              <h6 className="font-20">Location
                                <span className="font-18">132, My Street, Kingston, New York 12401.</span>
                              </h6>
                           </div>
                           </div>
                        </div>
                        <div className="map-section">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="430" frameBorder="0" style={{ border:0}}></iframe>
                        </div>
                    </div>
                  </div>
              </div>
        </div>
  
        <div className="modal right  fade" id="exampleModalToggle1" aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
                <div className="notification_header">
                    <h2>Advance Search</h2>
                    <p type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></p>

                </div>
                <div className="list_notification">
                    <div className="seach_field">
                        <input type="text" placeholder="Search "/>
                        <span><img src="./assets/images/search_icon.svg" alt=""/></span>
                    </div>
                    <div className="radio_section_header">
                        <div className="radio_section">
                            <input type="radio" name="name" id="event"/>
                            <label htmlFor="event">Events</label>
                        </div>
                        <div className="radio_section">
                            <input type="radio" name="name" id="artist"/>
                            <label htmlFor="artist">Artist</label>
                        </div>
                    </div>
                    <div className="bottom_section_rating">
                        <div className="checkBox_sction">
                            <input type="checkbox" name="name" id="rating"/>
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
                            <input type="checkbox" name="name" id="date"/>
                            <label htmlFor="date">Date & Time</label>
                        </div>
                        <div id="datepicker" className="input-group date seach_field" data-date-format="mm-dd-yyyy">
                            <input className="form-control input-group-addon" id="inner-date1" type="text" placeholder="From Date"/>
                            <label htmlFor="inner-date"><img src="./assets/images/calendar.svg" alt=""/></label>
                        </div>
                        <div id="datepicker1" className="input-group date seach_field" data-date-format="mm-dd-yyyy">
                            <input className="form-control input-group-addon" id="inner-date2" type="text" placeholder="To Date"/>
                            <label htmlFor="inner-date"><img src="./assets/images/calendar.svg" alt=""/></label>
                        </div>
                        <div id="datepicker3" className="input-group date seach_field" data-date-format="mm-dd-yyyy">
                            <input className="form-control input-group-addon" id="inner-date3" type="text" placeholder="Select Time"/>
                            <label htmlFor="inner-date"><img src="./assets/images/clock.svg" alt=""/></label>
                        </div>
                        <div className="checkBox_sction ">
                            <input type="checkbox" name="name" id="Popular"/>
                            <label htmlFor="Popular">Most Popular</label>
                        </div>
                        <div className="checkBox_sction ">
                            <input type="checkbox" name="name" id="genre"/>
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
                            <button className="re_btn w-100"><a href="./events.html">Search</a></button>
                        </div>
                        <a className="clear_navgat" href="">Clear</a>
                    </div>
                </div>



            </div>
        </div>
    </div>

    <div className="modal right  fade" id="exampleModalToggle" aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
            <div className="notification_header">
                <h2>Notifications</h2>
                <p type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></p>

            </div>
            <div className="list_notification">

                <div className="today_mgs">
                    <div className="day_list">
                        <h6>Today</h6>
                        <p>Mark all as read</p>
                    </div>
                    <div className="list_notification_innre not_open">
                        <div className="img_noti"><img src="./assets/images/notification-img1.png" alt=""/>
                        </div>
                        <div className="notification_text">
                            <h4>Justin Biber created a Event</h4>
                            <p> 2 Hours ago</p>
                        </div>
                    </div>
                    <div className="list_notification_innre not_open">
                        <div className="img_noti"><img src="./assets/images/notification-img2.png" alt=""/>
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
                        <div className="img_noti"><img src="./assets/images/notification-img1.png" alt=""/>
                        </div>
                        <div className="notification_text">
                            <h4>Ariyana grande cancelled the event</h4>
                            <p> 24 jan</p>
                        </div>
                    </div>
                    <div className="list_notification_innre ">
                        <div className="img_noti"><img src="./assets/images/notification-img2.png" alt=""/>
                        </div>
                        <div className="notification_text">
                            <h4>Your favorite artist event started</h4>
                            <p> 24 jan</p>
                        </div>
                    </div>
                    <div className="list_notification_innre">
                        <div className="img_noti"><img src="./assets/images/notification-img1.png" alt=""/>
                        </div>
                        <div className="notification_text">
                            <h4>Your favorite artist event started</h4>
                            <p> 24 jan</p>
                        </div>
                    </div>
                    <div className="list_notification_innre ">
                        <div className="img_noti"><img src="./assets/images/notification-img2.png" alt=""/>
                        </div>
                        <div className="notification_text">
                            <h4>Your favorite artist event started</h4>
                            <p> 24 jan</p>
                        </div>
                    </div>
                    <div className="list_notification_innre">
                        <div className="img_noti"><img src="./assets/images/notification-img1.png" alt=""/>
                        </div>
                        <div className="notification_text">
                            <h4>Your favorite artist event started</h4>
                            <p> 24 jan</p>
                        </div>
                    </div>
                    <div className="list_notification_innre ">
                        <div className="img_noti"><img src="./assets/images/notification-img2.png" alt=""/>
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
           
    </section>
        </HomePage>
    );
}
export default Support;