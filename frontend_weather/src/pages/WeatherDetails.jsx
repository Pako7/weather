import React, { useEffect, useState } from 'react';
import WeatherService from '../services/WeatherService';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import { getWeatherIcon } from "../utils/weatherUtils";
import { DateFormat } from "../utils/dateFormat";

const WeatherDetails = () => {
  const [city, setCity] = useState({});
  const [weathers, setWeathers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cityId } = useParams();

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    setLoading(true);

    WeatherService.show(cityId)
    .then((response) => {
      setCity(response.data);
      setWeathers(response.data.weathers.filter((weather, index, array) => {
        const currentDate = new Date(weather.datetime).toLocaleDateString('es-MX');
        const previousDate = index > 0 ? new Date(array[index - 1].datetime).toLocaleDateString('es-MX') : null;
        return currentDate !== previousDate;
      }));
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
          <div className='absolute left-12 top-8'>
            <Link to={'/'}>
              <IoChevronBack className='w-6 h-6'/>
            </Link>
          </div>
          <h1 className="text-xl font-bold text-center mb-6">Pronóstico</h1>
          <h2 className="text-3xl font-semibold text-blue-500">{city.display}, {city.state}, {city.country}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weathers.map((weather) => (
              <div key={weather.id} index={weather.id} className="bg-white shadow-lg rounded-2xl p-6 min-w-[250px]">
                <p className="text-gray-600 capitalize">{DateFormat(weather.datetime)}</p>
                <div className="flex items-center gap-2">
                  {getWeatherIcon(weather.climatic_condition)}
                  <p className="text-gray-800 font-bold">{weather.climatic_condition}</p>
                  <p className="text-gray-700">Min: {weather.temp_min} °C</p>
                  <p className="text-gray-700">Max: {weather.temp_max} °C</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    </>
  );
};

export default WeatherDetails;
