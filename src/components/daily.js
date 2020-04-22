import React, { useState, useRef, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Modal } from "antd";
import Click from "./click";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 40vh;
  .colavo-carousel-dots {
    display: inline-block;
    vertical-align: middle;
    padding: 0;
    margin: auto;
    text-align: center;
    & li {
      list-style: none;
      display: inline-block;
      margin: 20px 5px;
      & button {
        border: none;
        color: transparent;
        cursor: pointer;
        display: block;
        height: 10px;
        width: 10px;
        border-radius: 5px;
        transition: all 0.2s;
      }
    }
    .slick-active button {
      width: 30px;
      transition: all 0.2s;
    }
  }
  .slick-center {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    transform: scale(1) !important;
    opacity: 1 !important;
    transition: ease-in-out 0.1s;
    /* item */
  }
  .slick-slide {
    transform: scale(0.9);
    opacity: 0.4;
  }
`;

const Thumbnail = styled.div`
  /* outline: none; */
  border-radius: 3px;
  text-align: left;
  max-width: 100%;
  color: white;
  h1 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .info {
    font-family: "Century Gothic", serif;
    padding: 20px;
    font-size: 0.7rem;
  }
  .text {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  img {
    width: 97%;
    height: 40px;
    object-fit: cover;
    object-position: top;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const settings = {
  dots: true,
  centerMode: true,
  centerPadding: "90px",
  slidesToShow: 3,
  // autoplay: true,
  // autoplaySpeed: 1000,
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
 * @param daily
 * @returns {*}
 * @constructor
 */
function Daily({ daily }) {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [click, toggle] = useState(true);
  const Slider1 = useRef();
  const Slider2 = useRef();

  const foo = useCallback(() => {
    setVisible(true);
  }, []);
  const woo = () => {
    toggle(!click);
    setVisible(false);
  };
  const goo = (prev, next) => {
    console.log(next);
    setIndex(next);
  };

  daily && console.log(daily.length);
  return (
    <>
      <Modal
        visible={visible}
        footer={false}
        onCancel={woo}
        destroyOnClose={true}
      >
        <Slider ref={Slider2} initialSlide={index}>
          {daily &&
            daily.map((d, idx) => (
              <Thumbnail key={idx} className="item">
                {/*<img src={d.imgUrl} alt={d.name} />*/}
                <div className="info">
                  <div>Service</div>
                  <b>name</b>
                  <h1>title</h1>
                  <div className="text">text</div>
                </div>
              </Thumbnail>
            ))}
        </Slider>
      </Modal>
      <Wrapper className={"item"}>
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
                <Thumbnail key={idx} className="item">
                  {/*<img src={imgUrl} alt={d.name} />*/}
                  <div className="info">
                    <div>DAY TIME{dt}</div>
                    <div>SUNRISE{sunrise}</div>
                    <div>SUNSET{sunset}</div>
                    <div>PRESSURE{pressure}</div>
                    <div>HUMIDITY{humidity}</div>
                    <div>DEW POINT{dew_point}</div>
                    <div>WIND SPEED{wind_speed}</div>
                    <div>DEGREES{wind_deg}</div>
                    <div>CLOUDS{clouds}</div>
                    <div>UVI{uvi}</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Click click={click} foo={foo} />
                  </div>
                </Thumbnail>
              )
            )}
        </Slider>
      </Wrapper>
    </>
  );
}

export default Daily;
