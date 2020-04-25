import React, { useEffect, useState } from "react";
import { fetchCity } from "./actions/fetchData";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import Dashboard from "./components/dashboard";
import Carousel from "./components/carousel";
import Daily from "./components/daily";
import SideBar from "./components/sideBar";
import { Spin } from "antd";
import { removeKeyStartsWith, convertTime } from "./services/helpers";

/**
 *  loading screen
 * @returns {*}
 */
export function Load() {
  return (
    <div className="loading">
      <Spin className="spinner" size="large" />
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const [load, setLoad] = useState(false);
  const [city, setCity] = useState("zagreb");
  const date = new Date().toDateString().toUpperCase();
  const weatherSelector = useSelector((state) => state.weatherInfo.weatherinfo);
  const dispatch = useDispatch();
  const getDataAction = (city) => dispatch(fetchCity(city));

  useEffect(() => {
    getDataAction(city);
    /*setTimeout(() => {
      setLoad(true);
    }, 3000);*/
    /*let interval = null;
    interval = setInterval(() => {
      getWeatherInfoAction(city);
    }, 10000);*/
  }, []);

  /* data to propagate */
  const { current, daily, hourly } = weatherSelector;
  /*
  if (!load) {
    return <Load />;
  }*/
  return (
    <div className="App">
      <div className="background">
        <div className="container">
          <div className="main">
            <Dashboard
              getDataAction={getDataAction}
              date={date}
              city={city}
              current={current}
              setCity={setCity}
              showDrawer={showDrawer()}
              setVisible={setVisible}
            />
            <Carousel
              current={current}
              removeKeyStartsWith={removeKeyStartsWith}
              convertTime={convertTime}
            />
            <Daily convertTime={convertTime} daily={daily} visible={visible} />
            <SideBar
              onClose={onClose}
              visible={visible}
              convertTime={convertTime}
              hours={hourly}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
