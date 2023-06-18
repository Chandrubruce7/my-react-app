import React from 'react'
import HomePage from '../pages/Homepage.jsx'

import {
    arrowleft,eventdetailsbg,homepagecartuser,fandate,fantime,sharesvg,cancelimg } from '../components/images/images.jsx';
import Home from './Home.jsx';

const EventBook = () => {
  return (
    <HomePage>
    <section class="main_section">                
    <div class="custom_container book-event-detail">
        <div class="navgat_otherpage">
            <h1 class="task_titlt"><a href="./homepage.html"><span><img src={arrowleft} alt="arrow"/></span></a>Event Details</h1>       
        </div>
        <div class="row">
            <div class="col-xl-7 col-lg-12 col-md-12 d-black">
                <div class="event_bg fan-booked">
                    <div class="imgsection">
                        <img src={eventdetailsbg} alt=""/>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-lg-12 col-md-12">
                <div class="fan-event-detalis">
                    <div class="user-text">
                        <div class="user-img view-sec">
                            <img src={homepagecartuser} alt=""/>
                            <div class="user-name">
                                <h4 class="font-20">Justin Biber</h4>
                                <p class="font-14">Artist</p>
                            </div>
                            <a href="./artistsProfile.html" class="font-16 view-btn"><button type="text" >View Profile</button></a>
                        </div>
                    </div>
                    <div className="right-tree">
                                    <h1 className="font-24">The Right Wing Tree</h1>
                                    <div className="first-column">
                                        <div className="time-date form-section">
                                              <img src={fandate} alt="" srcSet=""/>
                                             <div className="label-del">
                                                 <label htmlFor=""> Date</label>
                                                 <span>15 Feb 2023</span>
                                             </div>
                                        </div>
                                        <div className="time-date form-section">
                                            <img src={fantime} alt="" srcSet=""/>
                                           <div className="label-del">
                                               <label htmlFor="">Time & Duration</label>
                                               <span>11 PM . 120 mins</span>
                                           </div>                                   
                                      </div>
                                    </div>
                    </div>
                    <div class="fan-about-text">
                        <h1 class="font-20">About This Event</h1>
                        <span>Genre : Dance pop</span>
                        <p class="font-18">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur <span>More </span>
                        </p>
                        <div class="join-event">
                            <a href="./myevent.html" class="font-16 join-btn"><button>Book event</button></a>
                            <a class="font-18"><img src={sharesvg} alt="" srcSet=""/>Share</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </HomePage>
  )
}

export default EventBook