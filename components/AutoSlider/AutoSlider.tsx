'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function AutoSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoSlider;

/* <section>
<h3>Skills Overview</h3>
<div className="skills slider-container">
  <Slider {...settings}>
    
      <div className="skills__item skills__item--html skills__item-fade-in">
        <Image src="/logos/html.png" alt="" width={100} height={100} />
        <div className="skills__item-name">HTML</div>
      </div>
      <div className="skills__item skills__item--react skills__item-fade-in">
        <Image src="/logos/react.png" alt="" width={100} height={100} />
        <div className="skills__item-name">REACT</div>
      </div>
      <div className="skills__item skills__item--npm skills__item-fade-in">
        <Image src="/logos/vue.png" alt="" width={100} height={100} />
        <div className="skills__item-name">VUE.JS</div>
      </div>

      <div className="skills__item skills__item--js skills__item-fade-in">
        <Image src="/logos/javascript.png" alt="" width={100} height={100} />
        <div className="skills__item-name">JAVASCRIPT</div>
      </div>
      <div className="skills__item skills__item--css skills__item-fade-in">
        <Image src="/logos/css.png" alt="" width={100} height={100} />
        <div className="skills__item-name">CSS</div>
      </div>
      <div className="skills__item skills__item--git skills__item-fade-in">
        <Image src="/logos/git.png" alt="" width={100} height={100} />
        <div className="skills__item-name">GIT</div>
      </div>

      <div className="skills__item skills__item--sass skills__item-fade-in">
        <Image src="/logos/sass.png" alt="" width={100} height={100} />
        <div className="skills__item-name">SASS</div>
      </div>
      <div className="skills__item skills__item--webpack skills__item-fade-in">
        <Image src="/logos/next.png" alt="" width={100} height={100} />
        <div className="skills__item-name">NEXT.JS</div>
      </div>
      <div className="skills__item skills__item--r skills__item-fade-in">
        <Image src="/logos/node.png" alt="" width={100} height={100} />
        <div className="skills__item-name">NODE.JS</div>
      </div>
  </Slider>
</div>
</section> */