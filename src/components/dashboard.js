import Icon from "./icon";
import React, { useState } from "react";
import { Rainy } from "./weatherIcons/icons";
import TextField from "@material-ui/core/TextField";

function Dashboard({
  setCity,
  getDataAction,
  date,
  city,
  current,
  showDrawer,
}) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const onEnterPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      setCity(search);
      getDataAction(search);
      console.log("submitted:", search);
    }
  };
  return (
    <div className="dashboard">
      <div className="temperature">
        <div className="actual">
          <div className="desc">
            <div className="svg">
              <Rainy className="icon" />
            </div>
            <div className="text">
              <div className="location">
                <Icon name={"location-icon"} type={"location"} />
                <div className="text-city">{city.toUpperCase()}</div>
              </div>
              <div className="date">{date}</div>
            </div>
          </div>
          <div className="number">{current && current.temp.toFixed()}&deg;</div>
        </div>
        <div className="feels">
          <div className="text">FEELS LIKE</div>
          <div className="number">
            {current && current.feels_like.toFixed(1)}&deg;
          </div>
        </div>
        <Icon type={"48hours"} name={"hours48"} onClick={showDrawer} />
      </div>
      <form onChange={handleChange} noValidate autoComplete="off">
        <TextField
          type={"text"}
          name={"search"}
          inputProps={{ style: { color: "rgb(81, 121, 190)" } }}
          id="standard-basic"
          label="Standard"
          value={search}
          onFocus={() => console.log("onFocus")}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => {
            onEnterPressed(e);
          }}
        />
      </form>
    </div>
  );
}

export default Dashboard;
