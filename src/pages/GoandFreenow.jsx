import React from 'react';
import ProfilePage from './ProfilePage'
import {
    diamond
} from '../components/images/images.jsx';


const GoandFreenow = () => {

    return (
        <ProfilePage>
            <div className="tab-pane fade show active profilegotofree" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                <div class="tab-heading">
                    <h1 class="font-28">Go Ad Free now</h1>
                </div>
                <div class="profile-main go-main">
                    <div class="profilr-avater">
                        <div class="per-sec avatar-detalis">
                            <img src={diamond} alt="" />
                            <div class="per-text avater-text">
                                <h6 class="font-16">Fan2Stage Premium</h6>
                                <p class="font-14">You can watch your favorite Event streaming Ads free.</p>
                            </div>
                        </div>
                        <h6 class="font-24 plan-sub-sec">$1 / <span class="span-dis">month</span> </h6>
                        <button class="subscribe-btn font-16 plan-sub-sec">Subscribe</button>

                        <h6 class="font-24 plan-sub-sec paln-dis-none"><span>$1 / <span class="span-dis">month</span></span> <span class="span-dis span-dis-remain font-16">20 days remaining</span> </h6>
                        <button class="Cancel-btn font-16 gotocancelbutton plan-sub-sec paln-dis-none">Cancel </button>

                    </div>
                </div>

            </div>
        </ProfilePage>
    );

}

export default GoandFreenow;
