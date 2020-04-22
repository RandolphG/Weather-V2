import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// settings for carousel
const settings = {
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const carousel = ({ current, removeKeyStartsWith, convertTime }) => {
  return (
    <>
      {current && (
        <div className="carousel">
          <Slider {...settings}>
            {current &&
              Object.keys(removeKeyStartsWith(current, "weather")).map(
                (item, index) => (
                  <div key={index} className="row">
                    <div className="name">{item.toUpperCase()}</div>
                    <div className="decorated" />
                    <div className="value">
                      {index < 3 ? convertTime(current[item]) : current[item]}
                    </div>
                  </div>
                )
              )}
          </Slider>
        </div>
      )}
    </>
  );
};
export default carousel;
