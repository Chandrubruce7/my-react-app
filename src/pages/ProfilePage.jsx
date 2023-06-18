import React from 'react';
import SideNav from '../components/SideNav';
import HomePage from '../pages/Homepage';


const ProfilePage = (props) => {

    return (
            <HomePage>
            <section className="main_section">
                <div className="custom_container">
                    <div className="row d-flex align-items-start res-flex-wrap">
                        <SideNav />
                        <div className="tab-content col-lg-9 col-md-12 col-sm-12 col-xs-12 profiletab-wrapper" id="v-pills-tabContent ">

                            {props.children}

                        </div>
                    </div>
                </div>
            </section>
        </HomePage>
    );
};

export default ProfilePage;