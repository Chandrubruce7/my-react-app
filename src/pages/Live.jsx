import React,{useState} from 'react'
import HomePage from '../pages/Homepage.jsx'
import {
    arrowleft,clapsvg,boosvg,partysvg,musicsvg,surprisedsvg,smilesvg,homepagecartuser,liveeye,premiumimg } from '../components/images/images.jsx';

const Live = () => {

    const [active, isActive] = useState(true);
    const [eventExit, isExit] = useState(false);

    const Close=()=>isActive(!active);

    const exit=()=>isExit(!eventExit);



  return (
    <HomePage>
    <section className="main_section">
    <div className="custom_container live-content">
            <div className="navgat_otherpage">
                <h1 className="task_titlt"><a href="./Edit-profile.html"><span><img src={arrowleft} alt="arrow"/></span></a> The Right Wing Tree</h1>
                <div className="button_gorup">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={exit}>Exit Event</button> 
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-7 col-md-12 d-grid">
                  <div className="event_bg live-img-sec">
                    <div className="imgsection">
                        <video controls>
                            <source src="https://beyonity.ch/wp-content/uploads/2021/06/Beyonity-Hero.mp4" type="video/mp4"/>
                          </video>
                    </div>
                  </div>
        
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="event_htmlFormsection live-bar-heignt">
                    <div className="user-text">
                        <div className="user-img view-sec">
                            <img src={homepagecartuser} alt=""/>
                            <div className="user-name">
                                <h4 className="font-20">Justin Biber</h4>
                                <p className="font-14">Artist</p>
                            </div> 
                            <div className="live-view">
                                <img src={liveeye} alt=""/><span className="font-15">1.2k</span><a className="font-15">Live</a>
                            </div>                               
                        </div>
                    </div>
                    <div className="slider_header height-calc">
        
                        <div className="main_live">
                            <div className="emog_section pos-icon"><img src={clapsvg} alt=""/></div>
                        <div className="range-slider" data-slider-value="0">
                            <input type="range" orient="vertical" min="0" max="100" defaultValue="0"/>
                            <div className="range-slider__bar" style={{height: "calc(0% + 0px)"}}></div>
                            <div className="range-slider__thumb" style={{bottom: "0%"}}>0%</div>
                        </div>
                        <div className="emog_section"><img src={clapsvg} alt=""/></div></div>
                
                        <div className="main_live">
                        <div className="emog_section pos-icon"><img src={boosvg} alt=""/></div>
                        <div className="range-slider" data-slider-value="0">
                            <input type="range" orient="vertical" min="0" max="100" defaultValue="0"/>
                            <div className="range-slider__bar theme1" style={{height: "calc(0% + 0px)"}}></div>
                            <div className="range-slider__thumb" style={{bottom: "0%"}}>0%</div>
                        </div>
                        <div className="emog_section"><img src={boosvg} alt=""/></div></div>
                
                        <div className="main_live">
                            <div className="emog_section pos-icon"><img src={partysvg} alt=""/></div>
                        <div className="range-slider" data-slider-value="0">
                            <input type="range" orient="vertical" min="0" max="100" defaultValue="0"/>
                            <div className="range-slider__bar theme2" style={{height: "calc(0% + 0px)"}}></div>
                            <div className="range-slider__thumb" style={{bottom: "0%"}}>0%</div>
                        </div>
                        <div className="emog_section"><img src={partysvg} alt=""/></div></div>
                
                        <div className="main_live">
                        <div className="emog_section pos-icon"><img src={musicsvg} alt=""/></div>
                        <div className="range-slider" data-slider-value="0">
                            <input type="range" orient="vertical" min="0" max="100" defaultValue="0"/>
                            <div className="range-slider__bar theme3" style={{height: "calc(0% + 0px)"}}></div>
                            <div className="range-slider__thumb" style={{bottom: "0%"}}>0%</div>
                        </div>
                        <div className="emog_section"><img src={musicsvg} alt=""/></div></div>
                        <div className="main_live">
                        <div className="emog_section pos-icon"><img src={surprisedsvg} alt=""/></div>
                        <div className="range-slider" data-slider-value="0">
                            <input type="range" orient="vertical" min="0" max="100" defaultValue="0"/>
                            <div className="range-slider__bar theme2" style={{height: "calc(0% + 0px)"}}></div>
                            <div className="range-slider__thumb" style={{bottom: "0%"}}>0%</div>
                        </div>
                        <div className="emog_section"><img src={surprisedsvg} alt=""/></div></div>
                
                        <div className="main_live">
                        <div className="emog_section pos-icon"><img src={smilesvg} alt=""/></div>
                        <div className="range-slider" data-slider-value="0">
                            <input type="range" orient="vertical" min="0" max="100" defaultValue="0"/>
                            <div className="range-slider__bar theme3" style={{height: "calc(0% + 0px)"}}></div>
                            <div className="range-slider__thumb" style={{bottom: "0%"}}>0%</div>
                        </div>
                        <div className="emog_section"><img src={smilesvg} alt=""/></div></div>
                
                    </div>
                  </div>
        
                </div>
            </div>
        </div>

        {/* <!-- onload Modal --> */}
        <div className="modal fade onload-pop show" style={{display:(active)?'block':'none'}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                 <img src={premiumimg} alt="" srcSet=""/>    
                <h5 className="modal-title font-24" id="exampleModalLabel">Fan2Stage Premium</h5>
                <button type="button" className="btn-close top-pos" data-bs-dismiss="modal" aria-label="Close" onClick={Close}></button>
                </div>
                <div className="modal-body">
                 <p className="font-18">Wish watching your favorite Event streaming Ads free?</p>
                 <span className="font-16">Subscribe at just $1 a month</span>
                </div>
                <div className="modal-footer premium-footer">
                <button type="button" className="btn skip-bth" data-bs-dismiss="modal" onClick={Close}>Skip</button>
                <button type="button" className="btn go-btn">Go Ads Free </button>
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

export default Live