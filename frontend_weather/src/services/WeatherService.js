import axios from "axios";

const url = process.env.REACT_APP_API_BASE_URL;

class WeatherService {
  all() {
    return axios.get(`${url}weather.json`);
  }
};

export default new WeatherService;