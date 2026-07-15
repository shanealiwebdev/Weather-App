import { useState } from "react";
import axios from "axios";
import "./searchform.css";

function SearchForm({setWeather}) {
    const [Msg, setMsg] = useState("");
    console.log("SearchForm Render");
    const [city, setCity] = useState("");

    const getWeather = async () => {
        try{
            setMsg(""); 
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/weather/${city}`;

        console.log("Request URL:", url);

        const response = await axios.get(url);

        console.log("Backend Response:", response.data);

        setWeather(response.data);
        } catch (error){
            setMsg("City Not Found! :(");
}
    }

    const getCurrentLocation = () => {
        console.log("Get Current Location button clicked");
        if (!navigator.geolocation) {
            setMsg("Geolocation is not supported by your browser");
            return;
        }
        navigator.geolocation.getCurrentPosition(async (position) => {
            console.log("Permission given");
            const [latitude, longitude] = position.coords;
            console.log("Latitude:", latitude, "Longitude:", longitude);
            try{
                setMsg("");
                const url = `${import.meta.env.VITE_BACKEND_URL}/api/weather/coordinates?lat=${latitude}&lon=${longitude}`;
                console.log("Request URL:", url);
            const response = await axios.get(url);
            setWeather(response.data);
        } catch (error) {
            console.log(error);
            console.log(error.code);
            console.log(error.message);

            setMsg("Unable to retrieve weather for your location");
        }
        }, (error) => {
            if (error.code === error.PERMISSION_DENIED) {
                setMsg("Permission to access location was denied");
            } else {
                setMsg("Unable to retrieve your location");
            }
        }
        )
    }
    return(
            <div className="search-form">
            <div className="search-input-container">
                 <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="search-input" required/> 
                 <label className="search-label">City</label>
                 <button onClick={getWeather} className="search-button">Search</button>
            </div>
            <button onClick={getCurrentLocation} className="location-button">Get Current Location</button>
            {Msg && <p className="error-message">{Msg}</p>}
        </div>

    )
}
export default SearchForm;