import React from 'react'
import HomePage from './Homepage';
import {
  homepagebg, liveEventcard2, homePagecard2, homePagecard1
} from '../components/images/images.jsx';
import ArtistSlider from './ArtistSlider';

const Home = () => {
  return (
    <HomePage>
      <section className="main_section">
        <div className="home-banner"><img src={homepagebg} alt="" />
          <div className="home-fav">
            <p className="font-40">Enjoy Your Favorite
              <span className="event-wrapper"><span className="event-inner">Events</span></span>
            </p>
          </div>
        </div>
        <div className="current-homepage custom_container">
          <ArtistSlider />
          <div className="fav-events liveevents">

            <div className="fav-head-wrapper">
              <h3 className="font-22">Live Events</h3>
              <button className="btn font-16">Show all</button>
            </div>

            <div className="event_tabe_section">
              <a href="./Event-Detail.html">
                <div className="bg_layout event_card">
                  <img src={homePagecard2} alt="card" />
                  <div className="today_btn"> <button>live</button></div>
                  <div className="event_card_bottom">
                    <div className="event_card_bottom_left">
                      <h3>The Right Wing Tree</h3>
                      <p>11 Am - 2 Pm</p>
                    </div>
                    <div className="event_card_bottom_right">
                      <button>Join Now</button>
                    </div>
                  </div>
                </div>
              </a>
              <div className="bg_layout event_card">
                <img src={liveEventcard2} alt="card" />
                <div className="today_btn"> <button>live</button></div>
                <div className="event_card_bottom">
                  <div className="event_card_bottom_left">
                    <h3>The Right Wing Tree</h3>
                    <p>11 Am - 2 Pm</p>
                  </div>
                  <div className="event_card_bottom_right">
                    <button>Join Now</button>
                  </div>
                </div>
              </div>
              <div className="bg_layout event_card">
                <img src={liveEventcard2} alt="card" />
                <div className="today_btn"> <button>live</button></div>
                <div className="event_card_bottom">
                  <div className="event_card_bottom_left">
                    <h3>The Right Wing Tree</h3>
                    <p>11 Am - 2 Pm</p>
                  </div>
                  <div className="event_card_bottom_right">
                    <button>Join Now</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="fav-events fav-schedule">
            <div className="fav-head-wrapper">
              <h3 className="font-22">Scheduled Events</h3>
              <button className="btn font-16">Show all</button>
            </div>
            <div className="event_tabe_section">
              <a href="/Eventbook">
                <div className="bg_layout event_card">
                  <img src={liveEventcard2} alt="card" />
                  <div className="today_btn"></div>
                  <div className="event_card_bottom">
                    <div className="event_card_bottom_left">
                      <h3>The Right Wing Tree</h3>
                      <p>11 Am - 2 Pm</p>
                    </div>
                    <div className="event_card_bottom_right">
                      <button>Book Now</button>
                    </div>
                  </div>
                </div>
              </a>
              <div className="bg_layout event_card">
                <img src={liveEventcard2} alt="card" />
                <div className="today_btn">

                </div>
                <div className="event_card_bottom">
                  <div className="event_card_bottom_left">
                    <h3>The Right Wing Tree</h3>
                    <p>11 Am - 2 Pm</p>
                  </div>
                  <div className="event_card_bottom_right">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
              <div className="bg_layout event_card">
                <img src={liveEventcard2} alt="card" />
                <div className="today_btn"></div>
                <div className="event_card_bottom">
                  <div className="event_card_bottom_left">
                    <h3>The Right Wing Tree</h3>
                    <p>11 Am - 2 Pm</p>
                  </div>
                  <div className="event_card_bottom_right">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
              <div className="bg_layout event_card">
                <img src={homePagecard1} alt="card" />
                <div className="today_btn"></div>
                <div className="event_card_bottom">
                  <div className="event_card_bottom_left">
                    <h3>The Right Wing Tree</h3>
                    <p>11 Am - 2 Pm</p>
                  </div>
                  <div className="event_card_bottom_right">
                    <button>Book Now</button>
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

export default Home