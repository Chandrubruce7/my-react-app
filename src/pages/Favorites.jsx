import React from 'react'
import ProfilePage from './ProfilePage'
import {
  artists_image1, artists_card_star, artists_close
} from '../components/images/images.jsx';

const Favorites = () => {
  return (
    <ProfilePage>
        <div className="tab-pane fade show active" id="v-pills-fav" role="tabpanel" aria-labelledby="v-pills-fav-tab" tabIndex="0">
          <div className="tab-heading">
            <h1 className="font-28">Favorites</h1>
          </div>
          <div className="fav-colunm first-column">
            <div className="fav-list-card">
              <img src={artists_image1} alt="" srcSet="" />
              <div className="artists-detalis">
                <h6 className="font-18">Justin Biber</h6>
                <p className="font-14">Pop. Jazz. Trance</p>
                <span>4.5 <img src={artists_card_star} alt="" srcSet="" /></span>
                <img className="close-icon" src={artists_close} alt="" srcSet="" />
              </div>
            </div>
            <div className="fav-list-card">
              <img src={artists_image1} alt="" srcSet="" />
              <div className="artists-detalis">
                <h6 className="font-18">Justin Biber</h6>
                <p className="font-14">Pop. Jazz. Trance</p>
                <span>4.5 <img src={artists_card_star} alt="" srcSet="" /></span>
                <img className="close-icon" src={artists_close} alt="" srcSet="" />
              </div>
            </div>
            <div className="fav-list-card">
              <img src={artists_image1} alt="" srcSet="" />
              <div className="artists-detalis">
                <h6 className="font-18">Justin Biber</h6>
                <p className="font-14">Pop. Jazz. Trance</p>
                <span>4.5 <img src={artists_card_star} alt="" srcSet="" /></span>
                <img className="close-icon" src={artists_close} alt="" srcSet="" />
              </div>
            </div>
          </div>
        </div>     
    </ProfilePage>
  )
}

export default Favorites;