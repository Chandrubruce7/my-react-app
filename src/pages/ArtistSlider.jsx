import React, { useState } from 'react'
import {
    favart1
} from '../components/images/images.jsx';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ArtistSlider = () => {
    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        slidesToShow: 10,
        infinite: false,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 374,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    const artists = [
        {
            img: favart1,
            name: 'Justin Biber',
            events: 'Dance Pop'
        },
        {
            img: favart1,
            name: 'Justin Biber',
            events: 'Dance Pop'
        },
        {
            img: favart1,
            name: 'Justin Biber',
            events: 'Dance Pop'
        },
        {
            img: favart1,
            name: 'Justin Biber',
            events: 'Dance Pop'
        },
        {
            img: favart1,
            name: 'Justin Biber',
            events: 'Dance Pop'
        },
        {
            img: favart1,
            name: 'Justin Biber',
            events: 'Dance Pop'
        },
        {
            img: favart1,
            name: 'Justin Biber',
            events: 'Dance Pop'
        },
        {
            img: favart1,
            name: 'Justin Biber',
            events: 'Dance Pop'
        },
        {
            img: favart1,
            name: 'Justin Biber',
            events: 'Dance Pop'
        }
    ]

    return (
        <>
            <div className="fav-arti">
                <div className="fav-head-wrapper">
                    <h3 className="font-22">Artists</h3>
                    <button className="btn font-16">Show all</button>
                </div>
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {artists.map((item, index) => (
                        <div key={index} className="fav-artis-wrap">
                            <div className="fav-artis-wrap-inner">
                                <a href="/ArtistProfile">
                                    <div className="fav-ar-img"><img src={item.img} alt="" /></div>
                                    <h3 className="font-18">{item.name}r</h3>
                                    <p className="font-14">{item.events}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default ArtistSlider