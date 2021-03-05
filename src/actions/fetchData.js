
/**
 * fetch latitude & longitude
 */
export function fetchCity(city) {
  const token = "274dda2cf8adb0";
  const url = `https://us1.locationiq.com/v1/search.php?key=${token}&q=${city}&format=json`;
  console.log(`fetched city function : ${city}`);
  console.log(`fetched from url : ${url}`);
  return function (dispatch) {
    fetch(url)
      .then((response) => {
        if (response.error) {
          throw response.error;
        }
        return response.json();
      })
      .then((data) => {
        fetchData(data[0], dispatch);
      });
  };
}

/**
 * fetch city
 * @returns {function(*): Response | void}
 * @param city
 * @param dispatch
 */
async function fetchData(city, dispatch) {
  console.log(`fetch Data function`);
  const { lat, lon } = city || {};

  const openWeatherApi = {
    app_id: "68f7849261554f85749a74265bdc800c",
    baseUrl: `https://api.openweathermap.org/data/2.5/onecall?lat=`,
    lat: lat,
    long: lon,
    units: "metric",
  };

  const url = `${openWeatherApi.baseUrl}${openWeatherApi.lat}&lon=${openWeatherApi.long}&units=${openWeatherApi.units}&appid=${openWeatherApi.app_id}`;
  console.log(`fetched from url : ${url}`);

  const wholeData = fetch(url)
    //current data
    .then((response) => {
      console.log(`fetched response`);
      if (response.error) {
        throw response.error;
      }
      return response.json();
    })
    .then((data) => {
      console.log("promise returned");
      dispatch({ type: "FETCH_DATA", payload: data });
    })
    .catch((err) => {
      console.log(err);
    });

  // hourly data
  const hourlyData = fetch(url)
    .then((response) => {
      if (response.error) {
        throw response.error;
      }
      return response.json();
    })
    .then((data) => {
      dispatch({ type: "FETCH_HOURLY", payload: data.hourly });
    })
    .catch((err) => {
      console.log(err);
    });
  // daily data
  const dailyData = fetch(url)
    .then((response) => {
      if (response.error) {
        throw response.error;
      }
      return response.json();
    })
    .then((data) => {
      dispatch({ type: "FETCH_DAILY", payload: data.daily });
    })
    .catch((err) => {
      console.log(err);
    });
  Promise.all([wholeData, hourlyData, dailyData]).then((r) => console.log(r));
}
