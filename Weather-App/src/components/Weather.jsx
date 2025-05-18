import { useEffect, useState } from "react";
import Search from "./Search.jsx";

function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState("");

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=c90c7f963d3946c52cbf3a30ac084643`
      );
      const responseData = await response.json();
      if (response.ok) {
        setWeatherData(responseData);
        setError("");
      } else {
        setWeatherData(null);
        setError("City not found");
      }
    } catch (error) {
      console.log(error);
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    if (search.trim() !== "") {
      fetchWeatherData(search);
    }
  }

  useEffect(() => {
    fetchWeatherData("kolkata");
  }, []);

  console.log(weatherData);
  

  function nowTimeData() {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-200 via-indigo-200 to-rose-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 drop-shadow">
        Weather App
      </h1>

      <div className="w-full max-w-md mb-6">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>

      {loading && <p className="text-lg font-semibold">Loading...</p>}

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {weatherData && weatherData.main && (
        <div className="bg-white/60 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md transition-all">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            {weatherData.name},{" "}
            <span className="text-gray-600">{weatherData.sys?.country}</span>
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            {nowTimeData()}
          </p>

          <p className="text-center text-xl font-semibold capitalize mb-6">
            {weatherData.weather[0].description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <p className="font-medium">Temperature:</p>
            <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>

            <p className="font-medium">Feels Like:</p>
            <p>{Math.round(weatherData.main.feels_like - 273.15)}°C</p>

            <p className="font-medium">Humidity:</p>
            <p>{weatherData.main.humidity}%</p>

            <p className="font-medium">Visibility:</p>
            <p>{(weatherData.visibility / 1000).toFixed(1)} km</p>

            {weatherData.wind?.gust && (
              <>
                <p className="font-medium">Wind Gusts:</p>
                <p>{weatherData.wind.gust} m/s</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
