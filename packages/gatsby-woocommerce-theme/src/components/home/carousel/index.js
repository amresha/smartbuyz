import React from "react";
import Slider from "react-slick";
import "./style.scss";
import EduVideo from "../../../images/Education.mp4"
import Home from "../../../images/videos/Home.mp4"
import Bike from "../../../images/videos/Bike.mp4"


import { isEmpty } from "lodash";
import Link from "gatsby-link";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 11500,
    cssEase: "linear",
    pauseOnDotsHover: true,
    pauseOnFocus: true,
  };

  return (
    <div>
      <Slider {...settings}>
      <div>
      <div class="color-overlay"></div>
        <video width="100%" autoplay="true" loop playsinline muted>
      	<source src={Bike} type="video/mp4" />
    		</video>
                   <div class="overlay">
      
                      <h2 style={{color: '#00c4f1'}}>Smart Outdoor
                        <span>FLEXIBLE AND</span>
                        <span>PORTABLE</span>
                        <p>Enjoy your trip without any hassel!</p>
                        <Link
                          to="/product-category/smart-education/"
                          className="btn btn-light"
                        >Explore Store
                        </Link>
                        </h2>
                   </div>                   
      </div>
  
      <div>
      <div class="color-overlay"></div>

        <video width="100%" autoplay="true" loop playsinline muted>
      	<source src={EduVideo} type="video/mp4" />
    		</video>
                   <div class="overlay">
      
                      <h2 style={{color: '#ffd300'}}>Smart Learning
                        <span>CHOOSE SMART</span>
                        <span>LEARNING TOOLS</span>
                        <p>Help your child learn better!</p>
                        <Link
                          to="/product-category/smart-education/"
                          className="btn btn-light"
                        >SHOP NOW
                        </Link></h2>
                   </div>                   
      </div>
      <div>
      <div class="color-overlay"></div>

        <video width="100%" autoplay="true" loop playsinline muted>
      	<source src={Home} type="video/mp4" />
    		</video>
                   <div class="overlay">
      
                      <h2 style={{color: '#1ce000'}}>Smart Home & Garden
                        <span>BUILD YOUR HOME</span>
                        <span>WITH SMART PRODUCTS</span>
                        <Link
                          to="/product-category/smart-education/"
                          className="btn btn-light"
                        >SHOP NOW
                        </Link></h2>
                   </div>                   
      </div>                 
      </Slider>
    </div>
  );
};

export default Carousel;
