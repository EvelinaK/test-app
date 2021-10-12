import React, { useState } from 'react';

import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderImage({images}) {

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1  ,
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
                
          }
        }
      ]
  };

  const [settings, setSettings] = useState(config);

 

  return (
    <div className="container-slider">
      <Slider {...settings}>
        {images.map((x, i) => {
          return <div key={i} className="img-card">
            <img className="img" src={x.url} alt='image-slide'/>
            <div className="card-body">
              <div className="card-title">{x.name}</div>
              <div className="card-text">{x.temperament}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default SliderImage;