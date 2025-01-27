import React, { useEffect, useState } from 'react';
import WeatherService from '../services/WeatherService';
import { Sun, CloudSun, Cloud, CloudRain, CloudMoon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Weather = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    setLoading(true);

    WeatherService.all()
      .then((response) => {
        console.log(response.data)
        setRecords(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized: Redirecting to login.');
        } else {
          console.error('An error occurred:', error.message);
          // Handle other types of errors here if necessary
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "clear sky":
        return <Sun className="text-yellow-500 w-10 h-10" />;
      case "scattered clouds":
        return <CloudSun className="text-gray-500 w-10 h-10" />;
      case "broken clouds":
        return <Cloud className="text-gray-600 w-10 h-10" />;
      case "moderate rain":
        return <CloudRain className="text-blue-500 w-10 h-10" />;
      case "few clouds":
        return <CloudMoon className="text-gray-400 w-10 h-10" />;
      default:
        return <Cloud className="text-gray-400 w-10 h-10" />;
    }
  };

  const DateFormat = (date_as_string) => {
    const date = new Date(date_as_string);

    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return formattedDate;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Weather Forecast</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {records.map((data) => (
          <div key={data.id} className="bg-white shadow-lg rounded-2xl p-6">
            <Link to={`/weather/${data.city.id}`} className="text-blue-500">
              <h2 className="text-xl font-semibold">{data.city.display}, {data.city.state}, {data.city.country}</h2>
              <p className="text-gray-600 capitalize">{DateFormat(data.date)}</p>
              <div className="flex items-center gap-2">
                {getWeatherIcon(data.climatic_condition)}
                <p className="text-gray-800 font-bold">{data.climatic_condition}</p>
              </div>
              <p className="text-gray-700">Temperature: {data.temperature} K</p>
              <p className="text-gray-700">Min: {data.temperature_min} K, Max: {data.temperature_max} K</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
