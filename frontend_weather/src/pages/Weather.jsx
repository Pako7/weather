import React, { useEffect, useState } from 'react';
import WeatherService from '../services/WeatherService';
import { Link } from 'react-router-dom';
import { getWeatherIcon } from "../utils/weatherUtils";
import { DateFormat } from "../utils/dateFormat";
import { FormatTime } from "../utils/timeFormat";

const Weather = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    setLoading(true);

    WeatherService.all()
      .then((response) => {
        setCities(response.data.sort((a, b) => a.state.localeCompare(b.state)));
      })
      .catch((error) => {
        console.error('An error occurred:', error.message);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
    {
      !loading && (
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Pronóstico del clima</h1>
          <h1 className="text-xl font-bold text-center mb-6 uppercase">
          { DateFormat(cities[0]?.weathers[0]?.datetime) }
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.id} index={city.id} className="bg-white shadow-lg rounded-2xl p-6 min-w-[250px]">
                <Link to={`/weather/${city.id}`} className="text-blue-500">
                  <h2 className="text-xl font-semibold">{city.display}, {city.state}, {city.country}</h2>
                  <div className="flex items-center gap-2">
                    {getWeatherIcon(city.weathers[0]?.climatic_condition)}
                    <p className="text-gray-800 font-bold">{city.weathers[0]?.climatic_condition}</p>
                    <p className="text-gray-700">Temp: {city.weathers[0]?.temp} °C</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )
    }
    </>

  );
};

export default Weather;
