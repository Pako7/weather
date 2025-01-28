import axios from "axios";

const url = process.env.REACT_APP_API_BASE_URL;

class WeatherService {
  all() {
    return axios.get(`${url}weather.json`);
  }
  show(cityId) {
    return axios.get(`${url}weather/${cityId}.json`);
  }
};

export default new WeatherService;