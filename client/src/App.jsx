import { useState } from "react";
import SearchForm from "./components/searchform";
import CurrentWeather from "./components/currnetWeather";
import "./index.css";

function App() {
    const[weather, setWeather] = useState(null);
    return(
        <div>
            <h1>Weather Dashboard</h1>
            <SearchForm setWeather={setWeather} />
            {weather && <CurrentWeather weather={weather} />}
        </div>
    )
}
export default App;