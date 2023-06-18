import React from 'react'
import HomePage from '../pages/Homepage';
import {
    artists_image1,start1,followheart,followhearthov,filtersvg } from '../components/images/images.jsx';

const ArtistsSearchresult = () => {
  return (
    <HomePage>
        <section className="main_section">
            <div className="custom_container">
            <div className="navgat_otherpage flex-just">
                <h1 className="task_titlt artistsearchtitle">
                Search results for <span> “artists”</span>
                </h1>
                <div className="filter-doted" data-bs-toggle="modal" href="#exampleModalToggle1" role="button">
                <span
                    data-bs-toggle="modal"
                    href="#exampleModalToggle1"
                    role="button"
                    >Filter</span
                >
                <div><img src={filtersvg} alt="" /></div>
                </div>
            </div>
            {/* <!-- Content --> */}
            <div className="followers_section artis-follower">
                <div className="followers_section_card bg_layout">
                <img src={artists_image1} alt="flow_profile" />
                <h4 className="followers_name">
                    Ed Sheeran
                    <button className="font-16">
                    4.5 <img src={start1} alt="" srcSet="" />
                    </button>
                </h4>
                <span className="font-14">Dance pop</span>
                <div className="follow-heart">
                    <img
                    className="img-active"
                    src={followheart}
                    alt=""
                    />
                    <img
                    className="img-inactive"
                    src={followhearthov}
                    alt=""
                    />
                </div>
                </div>
                <div className="followers_section_card bg_layout">
                <img src={artists_image1} alt="flow_profile" />
                <h4 className="followers_name">
                    Ed Sheeran
                    <button className="font-16">
                    4.5 <img src={start1} alt="" srcSet="" />
                    </button>
                </h4>
                <span className="font-14">Dance pop</span>
                <div className="follow-heart">
                    <img
                    className="img-active"
                    src={followheart}
                    alt=""
                    />
                    <img
                    className="img-inactive"
                    src={followhearthov}
                    alt=""
                    />
                </div>
                </div>
                <div className="followers_section_card bg_layout">
                <img src={artists_image1} alt="flow_profile" />
                <h4 className="followers_name">
                    Ed Sheeran
                    <button className="font-16">
                    4.5 <img src={start1} alt="" srcSet="" />
                    </button>
                </h4>
                <span className="font-14">Dance pop</span>
                <div className="follow-heart">
                    <img
                    className="img-active"
                    src={followheart}
                    alt=""
                    />
                    <img
                    className="img-inactive"
                    src={followhearthov}
                    alt=""
                    />
                </div>
                </div>
                <div className="followers_section_card bg_layout">
                <img src={artists_image1} alt="flow_profile" />
                <h4 className="followers_name">
                    Ed Sheeran
                    <button className="font-16">
                    4.5 <img src={start1} alt="" srcSet="" />
                    </button>
                </h4>
                <span className="font-14">Dance pop</span>
                <div className="follow-heart">
                    <img
                    className="img-active"
                    src={followheart}
                    alt=""
                    />
                    <img
                    className="img-inactive"
                    src={followhearthov}
                    alt=""
                    />
                </div>
                </div>
            </div>
            {/* <!-- END --> */}
            </div>
        </section>
  </HomePage>
  ) 
}

export default ArtistsSearchresult