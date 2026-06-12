import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import Loading from "./components/Loading";
import useLocalWeather from "./hooks/useLocalWeather";

function App() {
  const { city, newCity, weather, forecast, loading } = useLocalWeather();

  return (
    <div className="app-container">
      <SearchBar
        city={city}
        onSearch={(city) => {
          newCity(city);
        }}
      />
      {loading ? (
        <Loading />
      ) : (
        weather && (
          <>
            <div>
              <h1>{weather.city}</h1>
              <p>{`Nascer do Sol: ${weather.sunrise} | Pôr do Sol: ${weather.sunset}`}</p>
            </div>
            <WeatherCard weather={weather} />
            <ForecastList forecasts={forecast} />
          </>
        )
      )}
    </div>
  );
}

export default App;
