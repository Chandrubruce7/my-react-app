import React from 'react'
import HomePage from '../pages/Homepage.jsx'
import {
    arrowleft,eventdetailsbg,homepagecartuser,fandate,fantime,sharesvg } from '../components/images/images.jsx';
const EventDetail = () => {
  return (
   <HomePage>
        <section class="main_section">
                
                <div class="custom_container event-details-fan">
                    <div class="navgat_otherpage">
                        <h1 class="task_titlt"><a href="./homepage.html"><span><img src={arrowleft} alt="arrow"/></span></a>Event Details</h1>       
                    </div>
                    <div class="row">
                        <div class="col-lg-7 col-md-12 d-black">
                            <div class="event_bg fan-booked">
                                <div class="imgsection">
                                    <img src={eventdetailsbg} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12">
                            <div class="fan-event-detalis">
                                <div class="user-text">
                                    <div class="user-img view-sec">
                                        <img src={homepagecartuser} alt=""/>
                                        <div class="user-name">
                                            <h4 class="font-20">Justin Biber</h4>
                                            <p class="font-14">Artist</p>
                                        </div>
                                        <a href="/ArtistProfile" class="font-16 view-btn"><button type="text" >View Profile</button></a>
                                    </div>
                                </div>
                                <div class="right-tree">
                                    <h1 class="font-24">The Right Wing Tree</h1>
                                    <div class="first-column">
                                        <div class="time-date form-section">
                                              <img src={fandate} alt="" srcSet=""/>
                                             <div class="label-del">
                                                 <label for=""> Date</label>
                                                 <span>15 Feb 2023</span>
                                             </div>
                                        </div>
                                        <div class="time-date form-section">
                                            <img src={fantime} alt="" srcSet=""/>
                                           <div class="label-del">
                                               <label for="">Time & Duration</label>
                                               <span>11 PM . 120 mins</span>
                                           </div>                                   
                                      </div>
                                    </div>
                                </div>
                                <div class="fan-about-text">
                                    <h1 class="font-20">About This Event</h1>
                                    <span>Genre : Dance pop</span>
                                    <p class="font-18">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore..,<span> More </span>
                                    </p>
                                    <div class="join-event">
                                        <a href="/Live" class="font-16 join-btn"><button>Join event</button></a>
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

export default EventDetail