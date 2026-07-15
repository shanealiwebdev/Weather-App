import clear from"..//assissts/clear-day.svg"
import cloudy from "..//assissts/cloudy.svg"
import rain from "..//assissts/rain.svg"
import snow from "..//assissts/snow.svg"
import thunderstorm from "..//assissts/thunderstorms.svg"
import drizzle from "..//assissts/drizzle.svg"
import mist from "..//assissts/mist.svg"
import haze from "..//assissts/haze.svg"
import fog from "..//assissts/fog.svg"
import "./currentWeather.css"
function CurrentWeather({ weather }) {
    const getWeatherIcon = () => {
        switch (weather.weather) {
            case "Clear":
                return clear;
            case "Clouds":
                return cloudy;
            case "Rain":
                return rain;
            case "Snow":
                return snow;
            case "Thunderstorm":
                return thunderstorm;
            case "Drizzle":
                return drizzle;
            case "Mist":
                return mist;
            case "Haze":
            case "Smoke":
            case "Dust":
            case "Sand":
            case "Ash":
                return haze;
            case "Fog":
                return fog;
            default:
                return clear;
        }
    }
      console.log("CurrentWeather Render:", weather);
    return (
        <div className="current-weather-container">
            <div className="city-container">
                <img src={getWeatherIcon()} alt={weather.weather} className="weather-icon" />
                <h2 className="cityName">{weather.city}</h2>
            </div>
            <div className="weather-details">
              <p className="temp"><strong>Temperature:</strong> {weather.temperature} °C</p>  
              <p className="feels-like"><strong>Feels Like:</strong> {weather.feelsLike} °C</p>
              <p className="humidity"><strong>Humidity:</strong> {weather.humidity}%</p>
              <p className="weather"><strong>Weather:</strong> {weather.weather}</p>
              <p className="description"><strong>Description:</strong> {weather.description}</p>
              <p className="wind-speed"><strong>Wind Speed:</strong> {weather.windspeed} km/h</p>
            </div>
        </div>
        
    )
}
export default CurrentWeather