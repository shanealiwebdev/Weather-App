const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:city", async (req, res) => {
    try {
        const city = req.params.city;
        const apiKey = process.env.WEATHER_API_KEY
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const weatherData = {
            city: response.data.name,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            weather: response.data.weather[0].main,
            description: response.data.weather[0].description,
            windspeed: (response.data.wind.speed * 3.6).toFixed(0),
        }
        res.json(weatherData);
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json({ message: "City not found! :(" });
        }
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;