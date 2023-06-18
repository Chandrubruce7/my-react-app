import React,{useState} from 'react'
import HomePage from '../pages/Homepage';
import {
  liveEventcard1,liveEventcard2,liveEventcard3,liveEventcard4,homePagecard1,homePagecard2,homePagecard3,
  homePagecard4 } from '../components/images/images.jsx';

const Events = () => {

  const [upactive, upsetActive] = useState(true);
  const [pactive, psetActive] = useState(false);
  const [eventExit, isExit] = useState(false);

  const toggle = () => {
    upsetActive(true);
    psetActive(false);
  };
  const toggle2 = () => {
    psetActive(true);
    upsetActive(false);
  };
  const exit=()=>isExit(!eventExit);


  return (
    <HomePage>
    <section className="main_section">
        <div className="custom_container">
            <div className="event_list_section upcoming-past p-0 w-100 my_event">
                <div className="event_list_section_tab list-myevents">
                  <h1 className="font-28 navgatePage custom_container my_event"> My Event</h1>
                    <ul className="nav nav-pills " id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link  ${(upactive) ? 'active' : ''}`}
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            onClick={toggle}
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                          Upcoming Events
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link  ${(pactive) ? 'active' : ''}`}
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            onClick={toggle2}
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                          Past Events
                          </button>
                        </li>
                      </ul>
                </div>
    
                <div className="tab-content p-0" id="pills-tabContent">
                  <div
                    className={`tab-pane fade  ${(upactive) ? 'show active' : ''}`}
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex="0"
                  >
                    <div className="event_tabe_section ">
                      <a href="/EventDetail">
                      <div className="event_card">
                        <img src={homePagecard1} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <div className="event-card-date">
                              <p>15 Feb 2023</p>
                              <li>11 Am - 2 Pm</li>
                            </div>
                           
                          </div>
                          <div className="event_card_bottom_right">
                            <button>VIEW</button>
                          </div>
                        </div>
                      </div>
                      </a>
                      <div className="event_card">
                          <img src={liveEventcard2} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        <a href="/EventDetail">
                        <div className="event_card">
                          <img src={homePagecard2} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        </a>
                        <a href="/EventDetail">
                        <div className="event_card">
                          <img src={homePagecard4} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        </a>

                        <div className="event_card">
                          <img src={homePagecard3} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        <a href="/EventDetail">
                        <div className="event_card">
                          <img src={liveEventcard3} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        </a>

                        <div className="event_card">
                          <img src={liveEventcard1} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        <div className="event_card">
                          <img src={homePagecard3} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        <a href="/EventDetail">
                        <div className="event_card">
                          <img src={homePagecard4} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        </a>

                        <div className="event_card">
                          <img src={homePagecard2} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        <a href="/EventDetail">
                        <div className="event_card">
                          <img src={homePagecard1} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
                        </a>
                        <div className="event_card">
                          <img src={homePagecard1} alt="card" />
                          <div className="today_btn"></div>
                          <div className="event_card_bottom">
                            <div className="event_card_bottom_left">
                              <h3>The Right Wing Tree</h3>
                              <div className="event-card-date">
                                <p>15 Feb 2023</p>
                                <li>11 Am - 2 Pm</li>
                              </div>
                             
                            </div>
                            <div className="event_card_bottom_right">
                              <button>VIEW</button>
                            </div>
                          </div>
                        </div>
      
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade  ${(pactive) ? 'show active' : ''}`}
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex="0"
                  >
                  <div className="event_tabe_section pastevent-tab">
                    <div className="event_card">
                      <img src={homePagecard1} alt="card" />
                      <div className="today_btn"></div>
                      <div className="event_card_bottom">
                        <div className="event_card_bottom_left">
                          <h3>The Right Wing Tree</h3>
                          <p>11 Am - 2 Pm</p>
                        </div>
                        <div className="event_card_bottom_right">
                          <button className="reviwed_btn" > Reviewed</button>
                          
                        </div>
                      </div>
                    </div>
                    <div className="event_card">
                        <img src={homePagecard2} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button" onClick={exit}>Write Review</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={liveEventcard2} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button className="reviwed_btn"> Reviewed</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={liveEventcard4} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button">Write Review</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={liveEventcard1} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button">Write Review</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={liveEventcard4} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button">Write Review</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={homePagecard3} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button">Write Review</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={homePagecard1} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button">Write Review</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={homePagecard1} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button">Write Review</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={homePagecard2} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button">Write Review</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={liveEventcard2} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button">Write Review</button>
                          </div>
                        </div>
                      </div>
                      <div className="event_card">
                        <img src={liveEventcard4} alt="card" />
                        <div className="today_btn"></div>
                        <div className="event_card_bottom">
                          <div className="event_card_bottom_left">
                            <h3>The Right Wing Tree</h3>
                            <p>11 Am - 2 Pm</p>
                          </div>
                          <div className="event_card_bottom_right">
                            <button data-bs-toggle="modal" href="#ratingmodal" role="button">Write Review</button>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                </div>
              </div>
            
        </div>
                {/* <!-- onload Modal --> */}
                <div className="modal fade rating-pop-up show" style={{display:(eventExit)?'block':'none'}} id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content rating-popup">
                <div className="modal-header">
                  <h5 className="modal-title font-22" id="exampleModalLabel">Your Rating</h5>
                  <div className="rating-sec">
                      <label htmlFor="star1" className="star-label"> 
                             <span>
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.939 15.2957L26.6423 13.4145L21.1307 1.65702C20.719 0.779042 19.2807 0.779042 18.869 1.65702L13.359 13.4145L1.0624 15.2957C0.0524035 15.4509 -0.350929 16.6811 0.357403 17.4071L9.29071 26.5775L7.17905 39.5418C7.01072 40.5716 8.10905 41.3444 9.01738 40.8387L20.0007 34.7596L30.984 40.8404C31.884 41.3411 32.9923 40.5833 32.8223 39.5434L30.7107 26.5791L39.644 17.4088C40.3523 16.6811 39.9473 15.4509 38.939 15.2957Z" fill="#D6D6D6"/>
                                </svg>
                             </span> 
                      </label>
                       <label htmlFor="star2" className="star-label">
                            <span>
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.939 15.2957L26.6423 13.4145L21.1307 1.65702C20.719 0.779042 19.2807 0.779042 18.869 1.65702L13.359 13.4145L1.0624 15.2957C0.0524035 15.4509 -0.350929 16.6811 0.357403 17.4071L9.29071 26.5775L7.17905 39.5418C7.01072 40.5716 8.10905 41.3444 9.01738 40.8387L20.0007 34.7596L30.984 40.8404C31.884 41.3411 32.9923 40.5833 32.8223 39.5434L30.7107 26.5791L39.644 17.4088C40.3523 16.6811 39.9473 15.4509 38.939 15.2957Z" fill="#D6D6D6"/>
                                </svg>
                            </span>
                        </label>
                      <label htmlFor="star3" className="star-label">
                           <span>
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.939 15.2957L26.6423 13.4145L21.1307 1.65702C20.719 0.779042 19.2807 0.779042 18.869 1.65702L13.359 13.4145L1.0624 15.2957C0.0524035 15.4509 -0.350929 16.6811 0.357403 17.4071L9.29071 26.5775L7.17905 39.5418C7.01072 40.5716 8.10905 41.3444 9.01738 40.8387L20.0007 34.7596L30.984 40.8404C31.884 41.3411 32.9923 40.5833 32.8223 39.5434L30.7107 26.5791L39.644 17.4088C40.3523 16.6811 39.9473 15.4509 38.939 15.2957Z" fill="#D6D6D6"/>
                                </svg>
                            </span>
                       </label>
                      <label htmlFor="star4">
                          <span>
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.939 15.2957L26.6423 13.4145L21.1307 1.65702C20.719 0.779042 19.2807 0.779042 18.869 1.65702L13.359 13.4145L1.0624 15.2957C0.0524035 15.4509 -0.350929 16.6811 0.357403 17.4071L9.29071 26.5775L7.17905 39.5418C7.01072 40.5716 8.10905 41.3444 9.01738 40.8387L20.0007 34.7596L30.984 40.8404C31.884 41.3411 32.9923 40.5833 32.8223 39.5434L30.7107 26.5791L39.644 17.4088C40.3523 16.6811 39.9473 15.4509 38.939 15.2957Z" fill="#D6D6D6"/>
                            </svg>
                          </span>
                      </label>
                      <label htmlFor="star5"> 
                           <span>
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.939 15.2957L26.6423 13.4145L21.1307 1.65702C20.719 0.779042 19.2807 0.779042 18.869 1.65702L13.359 13.4145L1.0624 15.2957C0.0524035 15.4509 -0.350929 16.6811 0.357403 17.4071L9.29071 26.5775L7.17905 39.5418C7.01072 40.5716 8.10905 41.3444 9.01738 40.8387L20.0007 34.7596L30.984 40.8404C31.884 41.3411 32.9923 40.5833 32.8223 39.5434L30.7107 26.5791L39.644 17.4088C40.3523 16.6811 39.9473 15.4509 38.939 15.2957Z" fill="#D6D6D6"/>
                                </svg>
                            </span> 
                       </label>
                  </div>
                  <h4 className="font-18">Share Your Thoughts</h4>
                  <div className="rat-content">
                    <p className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                  </div>
                  <button type="button" className="btn-close top-pos" data-bs-dismiss="modal" aria-label="Close" onClick={exit}></button>
                </div>
                <div className="modal-body">
                    <h4 className="font-18">Leave a Tip</h4> 
                    <div className="rat-content rat-btn-flex">
                      <button className="rat-con-btn">$1</button>
                      <button className="rat-con-btn">$5</button>
                      <button className="rat-con-btn">$10</button>
                      <button className="rat-con-btn last-btn">Custom</button>
                    </div>                   
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn go-btn ms-0"> <a href="./homepage.html">Submit</a> </button>
                </div> 
              </div>
            </div>
        </div>
    </section>
    </HomePage>
  )
}

export default Events