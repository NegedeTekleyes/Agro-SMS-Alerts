import React, { useState } from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplet, AlertTriangle } from 'lucide-react';

const WeatherInfo: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('Amhara Region');
  
  // Mock data for weather information
  const regions = ['Amhara Region', 'Oromia Region', 'Afar Region', 'Somalia Region'];
  
  const weatherData = {
    'Amhara Region': {
      current: {
        temperature: 26,
        condition: 'Sunny',
        humidity: 55,
        windSpeed: 8,
        rainfall: 0,
        icon: <Sun className="text-yellow-500" size={40} />
      },
      forecast: [
        { day: 'Tue', date: '10', temp: 27, icon: <Sun size={24} className="text-yellow-500" /> },
        { day: 'Wed', date: '11', temp: 28, icon: <Sun size={24} className="text-yellow-500" /> },
        { day: 'Thu', date: '12', temp: 29, icon: <CloudRain size={24} className="text-blue-500" /> },
        { day: 'Fri', date: '13', temp: 26, icon: <CloudRain size={24} className="text-blue-500" /> },
        { day: 'Sat', date: '14', temp: 27, icon: <Cloud size={24} className="text-gray-500" /> },
        { day: 'Sun', date: '15', temp: 28, icon: <Sun size={24} className="text-yellow-500" /> },
        { day: 'Mon', date: '16', temp: 29, icon: <Sun size={24} className="text-yellow-500" /> }
      ],
      alerts: [
        { type: 'info', message: 'Ideal conditions for planting maize in the coming week.' }
      ]
    },
    'Oromia Region': {
      current: {
        temperature: 28,
        condition: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 12,
        rainfall: 0,
        icon: <Cloud className="text-blue-400" size={40} />
      },
      forecast: [
        { day: 'Tue', date: '10', temp: 29, icon: <Cloud size={24} className="text-gray-500" /> },
        { day: 'Wed', date: '11', temp: 30, icon: <CloudRain size={24} className="text-blue-500" /> },
        { day: 'Thu', date: '12', temp: 26, icon: <CloudRain size={24} className="text-blue-500" /> },
        { day: 'Fri', date: '13', temp: 27, icon: <Cloud size={24} className="text-gray-500" /> },
        { day: 'Sat', date: '14', temp: 28, icon: <Sun size={24} className="text-yellow-500" /> },
        { day: 'Sun', date: '15', temp: 29, icon: <Sun size={24} className="text-yellow-500" /> },
        { day: 'Mon', date: '16', temp: 30, icon: <Cloud size={24} className="text-gray-500" /> }
      ],
      alerts: [
        { type: 'warning', message: 'Moderate rainfall expected Wednesday through Thursday. Consider delaying fertilizer application.' }
      ]
    },
    'Afar Region': {
      current: {
        temperature: 30,
        condition: 'Rainy',
        humidity: 80,
        windSpeed: 15,
        rainfall: 12.5,
        icon: <CloudRain className="text-blue-500" size={40} />
      },
      forecast: [
        { day: 'Tue', date: '10', temp: 29, icon: <CloudRain size={24} className="text-blue-500" /> },
        { day: 'Wed', date: '11', temp: 28, icon: <CloudRain size={24} className="text-blue-500" /> },
        { day: 'Thu', date: '12', temp: 27, icon: <Cloud size={24} className="text-gray-500" /> },
        { day: 'Fri', date: '13', temp: 28, icon: <Cloud size={24} className="text-gray-500" /> },
        { day: 'Sat', date: '14', temp: 29, icon: <Sun size={24} className="text-yellow-500" /> },
        { day: 'Sun', date: '15', temp: 30, icon: <Sun size={24} className="text-yellow-500" /> },
        { day: 'Mon', date: '16', temp: 31, icon: <Sun size={24} className="text-yellow-500" /> }
      ],
      alerts: [
        { type: 'alert', message: 'Heavy rainfall and potential flooding in low-lying areas. Take necessary precautions to protect crops and livestock.' }
      ]
    },
    'Somalia Region': {
      current: {
        temperature: 27,
        condition: 'Windy',
        humidity: 60,
        windSpeed: 22,
        rainfall: 0,
        icon: <Wind className="text-gray-500" size={40} />
      },
      forecast: [
        { day: 'Tue', date: '10', temp: 28, icon: <Wind size={24} className="text-gray-500" /> },
        { day: 'Wed', date: '11', temp: 29, icon: <Cloud size={24} className="text-gray-500" /> },
        { day: 'Thu', date: '12', temp: 30, icon: <Sun size={24} className="text-yellow-500" /> },
        { day: 'Fri', date: '13', temp: 31, icon: <Sun size={24} className="text-yellow-500" /> },
        { day: 'Sat', date: '14', temp: 30, icon: <Cloud size={24} className="text-gray-500" /> },
        { day: 'Sun', date: '15', temp: 29, icon: <CloudRain size={24} className="text-blue-500" /> },
        { day: 'Mon', date: '16', temp: 28, icon: <Cloud size={24} className="text-gray-500" /> }
      ],
      alerts: [
        { type: 'info', message: 'Strong winds may affect spray applications. Plan agricultural activities accordingly.' }
      ]
    }
  };
  
  const selectedWeather = weatherData[selectedRegion as keyof typeof weatherData];
  
  // Alert type styles
  const alertStyles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: <Droplet size={20} className="text-blue-500" />
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: <AlertTriangle size={20} className="text-yellow-500" />
    },
    alert: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: <AlertTriangle size={20} className="text-red-500" />
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Weather Information</h1>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedRegion}</h2>
                  <p className="text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="flex items-center">
                  {selectedWeather.current.icon}
                  <span className="text-4xl font-bold text-gray-800 ml-2">
                    {selectedWeather.current.temperature}°C
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
                  <Droplet size={24} className="text-blue-500 mb-2" />
                  <p className="text-gray-500 text-sm">Humidity</p>
                  <p className="text-lg font-semibold text-gray-800">{selectedWeather.current.humidity}%</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
                  <Wind size={24} className="text-blue-500 mb-2" />
                  <p className="text-gray-500 text-sm">Wind Speed</p>
                  <p className="text-lg font-semibold text-gray-800">{selectedWeather.current.windSpeed} km/h</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
                  <CloudRain size={24} className="text-blue-500 mb-2" />
                  <p className="text-gray-500 text-sm">Rainfall</p>
                  <p className="text-lg font-semibold text-gray-800">{selectedWeather.current.rainfall} mm</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-4">7-Day Forecast</h3>
              <div className="grid grid-cols-7 gap-2">
                {selectedWeather.forecast.map((day) => (
                  <div key={day.day} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50">
                    <p className="text-sm font-medium text-gray-700">{day.day}</p>
                    <p className="text-xs text-gray-500 mb-2">{day.date}</p>
                    {day.icon}
                    <p className="text-sm font-semibold text-gray-800 mt-2">{day.temp}°</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-800">Weather Alerts</h3>
            </div>
            <div className="p-4">
              {selectedWeather.alerts.length > 0 ? (
                <div className="space-y-3">
                  {selectedWeather.alerts.map((alert, index) => {
                    const style = alertStyles[alert.type as keyof typeof alertStyles];
                    return (
                      <div 
                        key={index} 
                        className={`${style.bg} ${style.text} border ${style.border} rounded-lg p-4`}
                      >
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5">
                            {style.icon}
                          </div>
                          <div>
                            <p className="font-medium">{alert.message}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500">No active alerts for this region</p>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-6">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-800">Agricultural Recommendations</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Planting Advice</h4>
                  <p className="text-sm text-gray-600">
                    {selectedRegion === 'Northern Region' 
                      ? 'Conditions are favorable for planting maize and beans in the coming week.' 
                      : selectedRegion === 'Central Region'
                      ? 'Moderate rainfall expected. Consider delaying new planting until Friday.'
                      : selectedRegion === 'Southern Region'
                      ? 'Heavy rainfall may lead to waterlogging. Focus on drainage management.'
                      : 'Windy conditions may affect seedling establishment. Consider wind breaks.'}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Pest & Disease Watch</h4>
                  <p className="text-sm text-gray-600">
                    {selectedRegion === 'Northern Region' 
                      ? 'Low humidity reduces fungal disease risk. Monitor for aphids as temperatures rise.' 
                      : selectedRegion === 'Central Region'
                      ? 'Increased humidity may promote fungal diseases. Consider preventative fungicide application.'
                      : selectedRegion === 'Southern Region'
                      ? 'Wet conditions favor late blight in tomatoes and potatoes. Apply protective sprays.'
                      : 'Monitor for powdery mildew in dry, windy conditions.'}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Irrigation Needs</h4>
                  <p className="text-sm text-gray-600">
                    {selectedRegion === 'Northern Region' 
                      ? 'Regular irrigation recommended for newly established crops.' 
                      : selectedRegion === 'Central Region'
                      ? 'Natural rainfall should be sufficient this week. Avoid over-irrigation.'
                      : selectedRegion === 'Southern Region'
                      ? 'No irrigation needed. Focus on proper drainage to prevent waterlogging.'
                      : 'Increased irrigation may be needed due to drying winds.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;