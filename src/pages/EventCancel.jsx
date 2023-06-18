import React,{useState} from 'react'
import HomePage from '../pages/Homepage.jsx'
import {
    arrowleft,eventdetailsbg,homepagecartuser,fandate,fantime,sharesvg,cancelimg } from '../components/images/images.jsx';
const EventCancel = () => {

    const [active, isActive] = useState(false);

    const CancelBook=()=>isActive(!active);


  return (
    <HomePage>
        <section className="main_section">
                
                <div className="custom_container cancel-booking-detail">
                    <div className="navgat_otherpage">
                        <h1 className="task_titlt"><a href="./homepage.html"><span><img src={arrowleft} alt="arrow"/></span></a>Event Details</h1>       
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-md-12 d-black">
                            <div className="event_bg fan-booked">
                                <div className="imgsection">
                                    <img src={eventdetailsbg} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="fan-event-detalis">
                                <div className="user-text">
                                    <div className="user-img view-sec">
                                        <img src={homepagecartuser} alt=""/>
                                        <div className="user-name">
                                            <h4 className="font-20">Justin Biber</h4>
                                            <p className="font-14">Artist</p>
                                        </div>
                                        <a href="./artistsProfile.html" className="font-16 view-btn"><button type="text" >View Profile</button></a>
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
                                <div className="fan-about-text">
                                    <h1 className="font-20">About This Event</h1>
                                    <span>Genre : Dance pop</span>
                                    <p className="font-18">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore..,<span> More </span>
                                    </p>
                                    <div className="join-event">
                                        <a className="font-16 join-btn can-book-btn"><button data-bs-toggle="modal" onClick={CancelBook}data-bs-target="#exampleModal">Cancel Booking</button></a>
                                        <a className="font-18"><img src={sharesvg} alt="" srcSet=""/>Share</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

        {/* cancel pop-up */}
   
       {/* <!-- Modal --> */}
            <div className="modal fade can-book-pop-up show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display:(active)?'block':'none'}}>
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src={cancelimg} alt="" srcSet=""/>
                    <h5 className="modal-title font-20" id="exampleModalLabel">Are you sure you want to cancel this event?</h5>
                    <button type="button" className="btn-close top-pos" data-bs-dismiss="modal" aria-label="Close" onClick={CancelBook}></button>
                    </div>
                    <div className="modal-body">

                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn skip-bth" data-bs-dismiss="modal" onClick={CancelBook}>No</button>
                    <button type="button" className="btn go-btn ms-0">Yes</button>
                    </div>
                </div>
                </div>
            </div>      
       {/* <!-- End -->   */}
        </section>
    </HomePage>
  )
}

export default EventCancel