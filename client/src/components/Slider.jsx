import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightCard from "./RightCard.jsx";
import SliderRight from "./RightSlider.jsx";

export default function RightSlider() {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="">
                    <SliderRight
                        alt="image alt"
                        image="https://images.unsplash.com/photo-1710948651901-e61d9e9934f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
                        text="Subscribe to unlock new features and if eligible, receive"
                    />
                </div>
                <div className="">
                    <SliderRight
                        alt="image alt"
                        image="https://images.unsplash.com/photo-1714632432377-0d5b8aecdd5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
                        text="Subscribe to unlock new features and if eligible, receive"
                    />
                </div>
                <div>
                    <SliderRight
                        alt="image alt"
                        image="https://images.unsplash.com/photo-1711285761238-b8818aae4051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
                        text="Subscribe to unlock new features and if eligible, receive"
                    />
                </div>
                <div>
                    <SliderRight
                        alt="image alt"
                        image="https://plus.unsplash.com/premium_photo-1691938887399-e969643a517f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
                        text="Subscribe to unlock new features and if eligible, receive"
                    />
                </div>
                <div>
                    <SliderRight
                        alt="image alt"
                        image="https://images.unsplash.com/photo-1710948651946-474430a465b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
                        text="Subscribe to unlock new features and if eligible, receive"
                    />
                </div>
            </Slider>
        </div>
    )
}
