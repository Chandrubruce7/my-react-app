import React,{useState} from 'react'
import HomePage from '../pages/Homepage.jsx'
import {
  homepagebg,homepagecartuser,whiteheart,homePagecard1,liveEventcard2,liveEventcard3,arrowleft } from '../components/images/images.jsx';

const ArtistProfile = () => {

  const [liactive, liActive] = useState(true);
  const [seactive, seActive] = useState(false);

  const toggle = () => {
    liActive(true);
    seActive(false);
  };
  const toggle2 = () => {
    seActive(true);
    liActive(false);
  };


  return (
    <HomePage>
    <a href="/EventDetail"><h1 class="font-28 navgatePage custom_container"> <img src={arrowleft} alt="arrow"/>Artist Profile</h1></a>
          <section class="main_section">
        <div class="home_banner">
          <img src={homepagebg} alt="bg" />
  
        </div>
        <div class="inner_main_section custom_container d-flex artist-profile">
            <div class=" section_profile">
               
                <div class="profile_card">
                    <div class="profile_img_section">
                      <div class="profile-img-wrapper">
                        <img
                        class="profile_img"
                        src={homepagecartuser}
                        alt="profile"
                      />
                      <div class="profile-img-heart"><img src={whiteheart} alt=""/></div>
                      </div>
                     
                      <h2>Justin biber</h2>
                      <p>Late Night Union</p>
                    </div>
                    <div class="profile_section_inner">
                      <div class="profilr_part_section">
                        <h6 class="sub_header">Bio:</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna...
                        </p>
                      </div>
                      <div class="profilr_part_section">
                        <h6 class="sub_header">Genre:</h6>
                        <p>Dance pop, Trance, Vocal</p>
                      </div>
                      <div class="profilr_part_section">
                        <h6 class="sub_header">Social Links :</h6>
          
                        <div class="social_icon">
                          <span class="face_book"></span>
                          <span class="instagram"></span>
                          <span class="itnes"></span>
                          <span class="youtube"></span>
                          <span class="world"> </span>
                        </div>
                      </div>
          
          
                    </div>
                  </div>
            </div>
         
          <div class="event_list_section">
            <div class="event_list_section_tab">
                <ul class="nav nav-pills " id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        className={`nav-link  ${(liactive) ? 'active' : ''}`}
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        onClick={toggle}
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                      Live Events
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        className={`nav-link  ${(seactive) ? 'active' : ''}`}
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        onClick={toggle2}
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                      Scheduled Events
                      </button>
                    </li>
                  </ul>
            </div>

            <div class="tab-content p-0" id="pills-tabContent">
              <div
                className={`tab-pane fade show  ${(liactive) ? 'active' : ''}`}
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div class="event_tabe_section">
                  <a href="/EventDetail">
                    <div class="event_card">
                      <img src={homePagecard1} alt="card" />
                      <div class="today_btn"><button>Live</button></div>
                      <div class="event_card_bottom">
                        <div class="event_card_bottom_left">
                          <h3>The Right Wing Tree</h3>
                          <p>11 Am - 2 Pm</p>
                        </div>
                        <div class="event_card_bottom_right">
                          <button>Join Now</button>
                        </div>
                      </div>
                    </div>
                   </a>
                  <div class="event_card">
                      <img src={liveEventcard2} alt="card" />
                      <div class="today_btn"><button>Live</button></div>
                      <div class="event_card_bottom">
                        <div class="event_card_bottom_left">
                          <h3>The Right Wing Tree</h3>
                          <p>11 Am - 2 Pm</p>
                        </div>
                        <div class="event_card_bottom_right">
                          <button>Join Now</button>
                        </div>
                      </div>
                    </div>
  
                </div>
              </div>
              <div
                className={`tab-pane fade show  ${(seactive) ? 'active' : ''}`}
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
              <div class="event_tabe_section">
                <div class="event_card">
                  <img src={homePagecard1} alt="card" />
                  <div class="today_btn"></div>
                  <div class="event_card_bottom">
                    <div class="event_card_bottom_left">
                      <h3>The Right Wing Tree</h3>
                      <p>11 Am - 2 Pm</p>
                    </div>
                    <div class="event_card_bottom_right">
                      <button>Book Now</button>
                    </div>
                  </div>
                </div>
                <div class="event_card">
                    <img src={liveEventcard3} alt="card" />
                    <div class="today_btn"></div>
                    <div class="event_card_bottom">
                      <div class="event_card_bottom_left">
                        <h3>The Right Wing Tree</h3>
                        <p>11 Am - 2 Pm</p>
                      </div>
                      <div class="event_card_bottom_right">
                        <button>Book Now</button>
                      </div>
                    </div>
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

export default ArtistProfile