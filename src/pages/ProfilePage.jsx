import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { user,email,phone,password,eyeHide,eyeOpen,
    avater,birthdayicon,prefer,artistscardstar,artistsclose,
   } from '../components/images/images.jsx';

const ProfilePage = () => {

    return (
        <>
        <Header/>
            <section className="main_section">
                <div className="custom_container">
                    <div className="row d-flex align-items-start res-flex-wrap">
                    <SideNav/>
                        <div className="tab-content col-lg-9 col-md-12 col-sm-12 col-xs-12 profiletab-wrapper" id="v-pills-tabContent ">
                        {/* Myprofile */}
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                            <div className="tab-heading arrow-align">
                            <h1 className="font-28">Profile</h1>                    
                            </div>
                            <div className="profile-main profile-icon-flex">
                                <div className="profilr-avater">
                                    <div className="avatar-detalis">
                                        <img src={avater} alt="" srcSet=""/>
                                        <div className="avater-text">
                                            <h6 className="font-18">Tony Stark</h6>
                                            <p className="font-14">Jarvis19@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="avater-btn">
                                        <button className="font-16">Change Avatar</button>
                                    </div>
                                </div>
                                <div className="profile-inform">
                                    <h5 className="font-22">Basic Details</h5>
                                    <div className="first-column">
                                            <div className="form-section">
                                                <div className="svg-sec">
                                                <img src={user} alt="" srcSet=""/>
                                                </div> 
                                                <div className="label-sec">
                                                <label htmlFor="">Full Name</label>
                                                <span className="edit-text">Tony Stark</span>
                                                <input className="edit-input" type="text" name="" id="name" placeholder="Name" defaultValue="Justin Biber"/>                                 
                                                </div>
                                            </div>
                                            <div className="form-section">
                                                <div className="svg-sec">
                                                <img src={email} alt="" srcSet=""/>
                                                </div>
                                                <div className="label-sec">
                                                <label htmlFor="">Email Address</label>
                                                <span className="edit-text">Justinbibermusic@gmail.com</span>
                                                <input className="edit-input" type="email" name="" id="email" placeholder="Email Address" defaultValue="Email Address"/>
                                                </div>
                                            </div>
                                            <div className="form-section">
                                                <div className="svg-sec">
                                                <img src={phone} alt="" srcSet=""/>
                                                </div>
                                                <div className="label-sec">
                                                <label htmlFor="">Mobile Number</label>
                                                <span className="edit-text">+1 9847 - 56 - 1234</span>
                                                <div className="email-icon mbl-num-sec edit-mbl">
                                                    <input type="" id="phoneNumber" placeholder="Mobile Number" maxLength="16"/>
                                                    <div className="num-drp">
                                                        <p>+91</p>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-section">
                                                <div className="svg-sec">
                                                <img src={birthdayicon} alt="" srcSet=""/>
                                                </div>
                                                <div className="label-sec">
                                                <label htmlFor="">Date of Birth</label>
                                                <span className="edit-text font-16">24 / 02 / 1999</span>
                                                
                                                
                                                <div id="datepicker4" className="input-group date seach_field profile-calender" data-date-format="mm-dd-yyyy">
                                                    <input className="form-control input-group-addon" id="inner-date" type="text" placeholder="From Date"/>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="form-section">
                                                <div className="svg-sec">
                                                <img src={prefer} alt="" srcSet=""/>
                                                </div>
                                                <div className="label-sec">
                                                <label htmlFor="">Preferred genre</label>
                                                <span className="edit-text font-16">Pop, Jazz, Vocal, Trance</span>
                                                <select name="" id="" className="edit-select form-select">
                                                    <option defaultValue="PST">Pop, Jazz, Vocal, Trance</option>
                                                    <option defaultValue="PST">PST</option>
                                                </select>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="tab-heading arrow-align">
                                        <div className="edit-btn">
                                        <button type="button" className="font-16 page_moving">Edit profile</button>
                                        </div> 
                                        <div className="edit-btn edit-btn-none">
                                        <button type="button" className="font-16 page_moving page-move-cancel">Cancel</button>
                                        <button type="button" className="font-16 save-btn page_moving page-move-cancel">Save</button>              
                                        </div>                     
                                    </div>
                                </div>
                            </div>
                            <div className="profile-main">
                            <div className="profile-inform">
                                <h5 className="font-22">Change password</h5>
                            </div>
                            <div className="form-input-section com-psd-inpt">
                                <form action="">
                                    <div className="first-column">
                                    <div className="password-section">
                                    <label htmlFor="" className="font-16">Old Password</label>
                                    <div className="psd-eye">
                                        <span className="psd-icon"> <img src={password} alt="" srcSet=""/> </span>
                                        <input className="font-16" type="password" placeholder="Enter Password"  defaultValue="0000000000"/>
                                        <span className="eye-icon">                                    
                                                <img id="pw-close" src={eyeHide} alt="" srcSet=""/>
                                                <img id="pw-open" src={eyeOpen} alt="" srcSet=""/>
                                        </span>
                                    </div>
                                    </div>
                                    <div className="password-section">
                                    <label htmlFor="" className="font-16">New Password</label>
                                    <div className="psd-eye">
                                        <span className="psd-icon"> <img src={password} alt="" srcSet=""/> </span>
                                        <input className="font-16" type="password" placeholder="Enter Password" defaultValue="Admin@123"/>
                                        <span className="eye-icon">                                    
                                                <img id="pw-close" src={eyeHide} alt="" srcSet=""/>
                                                <img id="pw-open" src={eyeOpen} alt="" srcSet=""/>
                                        </span>
                                    </div>
                                    </div>
                                    <div className="password-section">
                                    <label htmlFor="" className="font-16">Confirm New Password</label>
                                    <div className="psd-eye">
                                        <span className="psd-icon"> <img src={password} alt="" srcSet=""/> </span>
                                        <input className="font-16" type="password" placeholder="Enter Password" defaultValue="0000000000" />
                                        <span className="eye-icon">                                    
                                                <img id="pw-close" src={eyeHide} alt="" srcSet=""/>
                                                <img id="pw-open" src={eyeOpen} alt="" srcSet=""/>
                                        </span>
                                    </div>
                                    </div>                            
                                </div>
                                <div className="login-btn">
                                    <button type="submit" className="font-16  " >Update Password</button>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        {/* <!-- END --> */}
                        
                        {/* <!-- Fav --> */}

                        <div className="tab-pane fade" id="v-pills-fav" role="tabpanel" aria-labelledby="v-pills-fav-tab" tabIndex="0">
                            <div className="tab-heading">
                            <h1 className="font-28">Favorites</h1>
                            </div>
                            <div className="fav-colunm first-column">
                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image1.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                    <h6 className="font-18">Justin Biber</h6>
                                    <p className="font-14">Pop. Jazz. Trance</p>
                                    <span>4.5 <img src={artistscardstar} alt="" srcSet=""/></span>
                                    <img className="close-icon" src={artistsclose} alt="" srcSet=""/>
                                </div>
                            </div>
                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image2.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                    <h6 className="font-18">Dua Lipa</h6>
                                    <p className="font-14">Pop. Jazz. Trance</p>
                                    <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                    <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>
                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image3.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                    <h6 className="font-18">Jony</h6>
                                    <p className="font-14">Pop. Jazz. Trance</p>
                                    <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                    <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>
                            
                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image4.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Ariana Grande</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>
                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image5.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Indila</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>
                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image6.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Ed Sheeran</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>

                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image7.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Sonu Nigam</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>

                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image8.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Arijit Singh</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>

                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image9.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">AR Rahman</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>

                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image1.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Justin Biber</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>

                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image3.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Jony</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>

                            <div className="fav-list-card">
                            <img src="./assets/images/artists_image3.png" alt="" srcSet=""/>
                            <div className="artists-detalis">
                                <h6 className="font-18">Dua Lipa</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                            </div>
                            </div>

                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image6.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Ed Sheeran</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>

                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image5.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Ariana Grande</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>
                            <div className="fav-list-card">
                                <img src="./assets/images/artists_image4.png" alt="" srcSet=""/>
                                <div className="artists-detalis">
                                <h6 className="font-18">Indila</h6>
                                <p className="font-14">Pop. Jazz. Trance</p>
                                <span>4.5 <img src="./assets/images/artists_card_star.svg" alt="" srcSet=""/></span>
                                <img className="close-icon" src="./assets/images/artists-close.svg" alt="" srcSet=""/>
                                </div>
                            </div>
                            </div>                                
                        </div>

                        {/* <!-- END --> */}

                        {/* <!--Go and free now --> */}

                        <div className="tab-pane fade profilegotofree" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                            <div className="tab-heading">
                            <h1 className="font-28">Go Ad Free now</h1>
                            </div>
                            <div className="profile-main go-main">
                                <div className="profilr-avater">
                                    <div className="per-sec avatar-detalis">
                                    <img src="./assets/images/diamond.png" alt=""/>
                                    <div className="per-text avater-text">
                                        <h6 className="font-16">Fan2Stage Premium</h6>
                                        <p className="font-14">You can watch your favorite Event streaming Ads free.</p>
                                    </div>
                                    </div>
                                    {/* <!-- <div className="plan-sub-sec"> --> */}
                                    <h6 className="font-24 plan-sub-sec">$1 / <span className="span-dis">month</span> </h6>
                                    <button className="subscribe-btn font-16 plan-sub-sec">Subscribe</button>
                                {/* <!-- </div> --> */}
                                {/* <!-- <div className="plan-sub-sec paln-dis-none"> --> */}
                                    <h6 className="font-24 plan-sub-sec paln-dis-none"><span>$1 / <span className="span-dis">month</span></span> <span className="span-dis span-dis-remain font-16">20 days remaining</span> </h6>
                                    <button className="Cancel-btn font-16 gotocancelbutton plan-sub-sec paln-dis-none">Cancel </button>
                                {/* <!-- </div> --> */}
                                </div>
                            </div>
                                        
                        </div>

                        {/* <!-- END --> */}
                        <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex="0">
                            <div className="tab-heading">
                            <h1 className="font-28">About</h1>
                            </div>
                            <div className="terms-main">
                            <div className="scroll-sec">                      
                                <div className="terms-con-txt">
                                    <h6 className="font-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>                    
                                <div className="terms-con-txt">
                                    <h6 className="font-18">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua” Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>

                                <div className="terms-con-txt">
                                    <h6 className="font-18">c. Conset and Information Colletion and Use</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>

                                <div className="terms-con-txt">
                                    <h6 className="font-18">d. Getting Started</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-terms" role="tabpanel" aria-labelledby="v-pills-terms-tab" tabIndex="0">
                            <div className="tab-heading">
                                <h1 className="font-28">Terms and Conditions</h1>
                            </div>
                            <div className="terms-main">
                                <div className="scroll-sec">   
                                    <div className="terms-con-txt">
                                        <h6 className="font-18">a. Age Restrictions</h6>
                                        <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                                    </div>                    
                                    <div className="terms-con-txt">
                                    <h6 className="font-18">b. Basic Use Requirments</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                                    </div>

                                    <div className="terms-con-txt">
                                    <h6 className="font-18">c. Conset and Information Colletion and Use</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    </div>
            
                                    <div className="terms-con-txt">
                                    <h6 className="font-18">d. Getting Started</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                                    </div>
                                </div>
                            </div>                  
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
                            <div className="tab-heading">
                            <h1 className="font-28">Privacy Policy</h1>
                            </div>
                            <div className="terms-main">
                            <div className="scroll-sec">   
                                    <div className="terms-con-txt">
                                        <h6 className="font-18">a. Age Restrictions</h6>
                                        <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                                    </div>                    
                                    <div className="terms-con-txt">
                                    <h6 className="font-18">b. Basic Use Requirments</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                                    </div>

                                    <div className="terms-con-txt">
                                    <h6 className="font-18">c. Conset and Information Colletion and Use</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    </div>

                                    <div className="terms-con-txt">
                                    <h6 className="font-18">d. Getting Started</h6>
                                    <p className="font-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        </div>
                    </div>                    
                </div> 
            </section>
        </>
    );
};

export default ProfilePage;