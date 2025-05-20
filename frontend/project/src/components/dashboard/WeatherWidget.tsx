import React from 'react';
import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeatherWidget: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const weatherData = {
    current: {
      location: 'Central Region',
      temperature: 28,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      icon: <Cloud className="text-blue-400" size={40} />
    },
    forecast: [
      { day: 'Tue', temp: 30, icon: <Sun size={20} className="text-yellow-500" /> },
      { day: 'Wed', temp: 29, icon: <CloudRain size={20} className="text-blue-500" /> },
      { day: 'Thu', temp: 27, icon: <Cloud size={20} className="text-gray-500" /> },
      { day: 'Fri', temp: 29, icon: <Sun size={20} className="text-yellow-500" /> },
    ]
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">Weather Conditions</h3>
          <Link to="/weather" className="text-sm text-green-600 hover:underline">
            View all regions
          </Link>
        </div>
      </div>
      
      <div className="p-5 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-medium text-gray-800">{weatherData.current.location}</h4>
            <p className="text-sm text-gray-500">{weatherData.current.condition}</p>
          </div>
          {weatherData.current.icon}
        </div>
        
        <div className="flex justify-between mb-6">
          <div className="text-3xl font-bold text-gray-800">
            {weatherData.current.temperature}°C
          </div>
          <div className="flex space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Wind size={16} className="mr-1 text-blue-500" />
              <span>{weatherData.current.windSpeed} km/h</span>
            </div>
            <div className="flex items-center">
              <CloudRain size={16} className="mr-1 text-blue-500" />
              <span>{weatherData.current.humidity}%</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-4">
          <h4 className="text-sm font-medium text-gray-600 mb-3">4-Day Forecast</h4>
          <div className="flex justify-between">
            {weatherData.forecast.map((day) => (
              <div key={day.day} className="flex flex-col items-center">
                <span className="text-xs text-gray-500">{day.day}</span>
                <div className="my-1">{day.icon}</div>
                <span className="text-sm font-medium">{day.temp}°</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;