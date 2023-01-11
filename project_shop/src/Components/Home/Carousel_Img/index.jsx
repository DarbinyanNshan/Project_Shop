import React from "react";
import './style.css';

import Carousel1 from "../../../assets/images/carousel-1.jpg";
import Carousel2 from "../../../assets/images/carousel-2.jpg";
import Carousel3 from "../../../assets/images/carousel-3.jpg";
import Slider_1 from "../Carousel";


export default function Carousel_img() {

    const slides = [
        {
            img: Carousel1,
            title: "Men Fashion",
            text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
            btnText: "Shop Now"
        },
        {
            img: Carousel2,
            title: "Women Fashion",
            text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
            btnText: "Shop Now"
        },
        {
            img: Carousel3,
            title: "Kids Fashion",
            text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
            btnText: "Shop Now"
        }
    ] 
    
    return( <>
                <div className="col col3">
                    <Slider_1  slides={slides} />
                </div>
                
                </>)
}



