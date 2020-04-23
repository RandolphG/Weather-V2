import React from "react";

/**
 * sun shower
 * @returns {*}
 * @constructor
 */
export function SunShower() {
  return (
    <div className="icon-weather sun-shower">
      <div className="cloud" />
      <div className="sun">
        <div className="rays" />
      </div>
      <div className="rain" />
    </div>
  );
}

/**
 * thunderstorm
 * @returns {*}
 * @constructor
 */
export function ThunderStorm() {
  return (
    <div className="icon-weather thunder-storm">
      <div className="cloud" />
      <div className="lightning">
        <div className="bolt" />
        <div className="bolt" />
      </div>
    </div>
  );
}

/**
 * cloudy
 * @returns {*}
 * @constructor
 */
export function Cloudy() {
  return (
    <div className="icon-weather cloudy">
      <div className="cloud" />
      <div className="cloud" />
    </div>
  );
}

/**
 * flurries
 * @returns {*}
 * @constructor
 */
export function Flurries() {
  return (
    <div className="icon-weather flurries">
      <div className="cloud" />
      <div className="snow">
        <div className="flake" />
        <div className="flake" />
      </div>
    </div>
  );
}

/**
 * sunny
 * @returns {*}
 * @constructor
 */
export function Sunny() {
  return (
    <div className="icon-weather sunny">
      <div className="sun">
        <div className="rays" />
      </div>
    </div>
  );
}

/**
 * rainy
 * @returns {*}
 * @constructor
 */
export function Rainy() {
  return (
    <div className="icon-weather rainy">
      <div className="cloud" />
      <div className="rain" />
    </div>
  );
}
