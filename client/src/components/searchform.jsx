import { useState } from "react";
import axios from "axios";
import "./searchform.css";

function SearchForm({ setWeather }) {
    const [Msg, setMsg] = useState("");
    const [city, setCity] = useState("");

    const getWeather = async (e) => {
        e.preventDefault();
        try {
            setMsg("");
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/weather/${city}`;
            const response = await axios.get(url);
            setCity("");
            setWeather(response.data);
        } catch (error) {
            setMsg("City Not Found! :(");
        }
    }

    return (
        <div>
            <form className="search-form" onSubmit={getWeather}>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="search-input" placeholder="City" required />
                <button type="submit" onClick={getWeather} className="search-button">Search</button>
                {Msg && <p className="error-message">{Msg}</p>}
            </form>
        </div>

    )
}
export default SearchForm;