const FETCH_DATA = "FETCH_DATA";
const FETCH_HOURLY = "FETCH_HOURLY";
const FETCH_DAILY = "FETCH_DAILY";
const FETCH_CITY = "FETCH_CITY";
export const weatherInfo = (
  state = {
    weatherinfo: [],
    hourly: {},
    daily: [],
    city: "",
  },
  action
) => {
  // check action type
  if (action.type === FETCH_DATA) {
    state = { ...state, weatherinfo: action.payload };
  }
  if (action.type === FETCH_HOURLY) {
    state = { ...state, hourly: action.payload };
  }
  if (action.type === FETCH_DAILY) {
    state = { ...state, daily: action.payload };
  }
  if (action.type === FETCH_CITY) {
    state = { ...state, city: action.payload };
  }
  return state;
};

export default weatherInfo;
