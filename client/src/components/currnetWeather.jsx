import clear from "..//assissts/clear-day.svg"
import cloudy from "..//assissts/cloudy.svg"
import rain from "..//assissts/rain.svg"
import snow from "..//assissts/snow.svg"
import thunderstorm from "..//assissts/thunderstorms.svg"
import drizzle from "..//assissts/drizzle.svg"
import mist from "..//assissts/mist.svg"
import haze from "..//assissts/haze.svg"
import fog from "..//assissts/fog.svg"
import "./currentWeather.css"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
    const maxTemp = 60; // Maximum expected temperature
    const progress = (weather.feelsLike / maxTemp) * 100;
    return (
            <div className="current-weather-container">
                <div className="city-container">
                    <div className="CityIcon">
                        <img src={getWeatherIcon()} alt={weather.weather} className="weather-icon" />
                    </div>
                    <div className="CityWeather">
                        <h2 className="cityName">{weather.city}</h2>
                        <p className="temp"><strong>Temperature:</strong> {weather.temperature}°C</p>
                    </div>
                </div>
                <div className="weatherupdate">
                    <p className="weather"><strong>Weather:</strong> {weather.weather}</p>
                    <p className="description"><strong>Description:</strong> {weather.description}</p>
                </div>
                <div className="weather-details">
                    <div className="feels-like">
                        <strong>Feels Like:</strong>
                        <CircularProgressbar value={progress} text={`${weather.feelsLike}°C`} className="circularprogress"/>
                    </div>
                    <div className="humidity">
                        <strong>Humidity: </strong>
                        <CircularProgressbar value={weather.humidity} text={`${weather.humidity}%`} className="circularprogress"/>
                    </div>
                    <div className="wind-speed">
                        <strong>Wind Speed:</strong>
                        <CircularProgressbar value={weather.windspeed} text={`${weather.windspeed} km/h`} className="circularprogress"/>
                    </div>
                </div>
            </div>
    )
}
export default CurrentWeather