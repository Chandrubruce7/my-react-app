import React from 'react';
import ProfilePage from './ProfilePage'
import {
    diamond
} from '../components/images/images.jsx';


const GoandFreenow = () => {

    return (
        <ProfilePage>
            <div className="tab-pane fade show active profilegotofree" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                <div className="tab-heading">
                    <h1 className="font-28">Go Ad Free now</h1>
                </div>
                <div className="profile-main go-main">
                    <div className="profilr-avater">
                        <div className="per-sec avatar-detalis">
                            <img src={diamond} alt="" />
                            <div className="per-text avater-text">
                                <h6 className="font-16">Fan2Stage Premium</h6>
                                <p className="font-14">You can watch your favorite Event streaming Ads free.</p>
                            </div>
                        </div>
                        <h6 className="font-24 plan-sub-sec">$1 / <span className="span-dis">month</span> </h6>
                        <button className="subscribe-btn font-16 plan-sub-sec">Subscribe</button>

                        <h6 className="font-24 plan-sub-sec paln-dis-none"><span>$1 / <span className="span-dis">month</span></span> <span className="span-dis span-dis-remain font-16">20 days remaining</span> </h6>
                        <button className="Cancel-btn font-16 gotocancelbutton plan-sub-sec paln-dis-none">Cancel </button>

                    </div>
                </div>

            </div>
        </ProfilePage>
    );

}

export default GoandFreenow;
