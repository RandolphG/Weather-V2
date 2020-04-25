import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import Icon from "./icon";

const settings = {
  dots: false,
  centerMode: true,
  centerPadding: "90px",
  slidesToShow: 3,
  // autoplay: true,
  // autoplaySpeed: 3000,
  speed: 500,
  dotsClass: "colavo-carousel-dots",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "40px",
      },
    },
  ],
};

/**
 *
 * @param convertTime
 * @param daily
 * @param woo
 * @param visible
 * @param woo
 * @param visible
 * @returns {*}
 * @constructor
 */
function Daily({ convertTime, daily, woo }) {
  const [index, setIndex] = useState(0);
  const Slider1 = useRef();

  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  const goo = (prev, next) => {
    setIndex(next);
  };

  // daily && console.log(daily.length);
  return (
    <>
      <div className={"wrapper"}>
        {/*{console.log("mounted")}*/}
        <Slider {...settings} arrows={false} ref={Slider1} beforeChange={goo}>
          {daily &&
            daily.map(
              (
                {
                  dt,
                  sunrise,
                  sunset,
                  pressure,
                  humidity,
                  dew_point,
                  wind_speed,
                  wind_deg,
                  clouds,
                  uvi,
                },
                idx
              ) => (
                <div key={idx} className="thumbnail">
                  <div className="info">
                    <div className="element">
                      <Icon />
                      DAY TIME {convertTime(dt)}
                    </div>
                    <div className="element">
                      <Icon type={"sunrise"} />
                      SUNRISE {convertTime(sunrise)}
                    </div>
                    <div className="element">
                      <Icon type={"sunsets"} />
                      SUNSET {convertTime(sunset)}
                    </div>
                    <div className="element">
                      <Icon type={"pressure"} />
                      PRESSURE {pressure}
                    </div>
                    <div className="element">
                      <Icon type={"humidity"} />
                      HUMIDITY {humidity}
                    </div>
                    <div className="element">
                      <Icon type={"dew"} />
                      DEW POINT {dew_point}
                    </div>
                    <div className="element">
                      <Icon type="wind-speed" />
                      WIND SPEED {wind_speed}
                    </div>
                    <div className="element">
                      <Icon type={"degree"} />
                      DEGREES {wind_deg}
                    </div>
                    <div className="element">
                      <Icon type={"clouds"} />
                      CLOUDS {clouds}
                    </div>
                    <div className="element">
                      <Icon type={"uv"} />
                      UVI {uvi}
                    </div>
                  </div>
                </div>
              )
            )}
        </Slider>
      </div>
    </>
  );
}

export default Daily;
