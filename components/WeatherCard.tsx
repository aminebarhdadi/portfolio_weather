import React from "react";
import Image from 'next/image'

async function getWeather(city: string) {
  const apiKey = process.env.METEOSOURCE_API_KEY;
  if (!apiKey) {
    console.error("API key is undefined");
    throw new Error("API key is not configured");
  }

  try {
    const response = await fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${city}&sections=current,daily&timezone=UTC&language=en&units=metric&key=${apiKey}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", errorText);
      throw new Error(`Failed to fetch weather: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error in getWeather:", error);
    return null;
  }
}

export default async function WeatherCard({ 
  searchParams 
}: { 
  searchParams: { city?: string }
}) {
  const params = await Promise.resolve(searchParams);
  const city = params?.city || '';
  let weather = null;
  let error = null;
  
  if (city) {
    try {
      weather = await getWeather(city);
      console.log(weather)
    } catch (e) {
      error = e.message;
      console.error("Error fetching weather:", e);
    }
  }

  return (
    <div className="flex flex-col container sm:max-w-3xl w-full mx-auto items-center p-4 mt-13">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Weather App</h1>
      
      <form className="flex gap-4 w-full" action="" method="get">
        <input
          className="input flex-1"
          type="text"
          name="city"
          placeholder="Enter city name"
          defaultValue={city || ""}
        />
        <button 
          className="btn btn-primary"
          type="submit" 
        >
          Get Weather
        </button>
      </form>

      {weather && (
        <div className="mt-8 w-full">
          <h2 className="text-2xl mb-6">Das Wetter in {city}</h2>
          
          {/* Current Weather */}
          {weather.current && (
            <div className="p-6 bg-base-200/50 shadow-md rounded-lg mb-6">
              <h3 className="text-xl mb-4">Das Wetter heute</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center">
                  <Image
                    src={`/img/${weather.current.icon_num}.svg`}
                    width={100}
                    height={100}
                    alt={weather.current.summary || 'weather icon'}
                    priority
                  />
                </div>
                <div>
                  <p className="text-3xl md:text-5xl font-semibold">{weather.current.temperature}°C</p>
                  
                  <p>Wind&shy;geschwindigkeit: {weather.current.wind.speed} km/h</p>
                  
                </div>
              </div>
            </div>
          )}

          {/* Weekly Forecast */}
          {weather.daily && (
            <>
              <h3 className="text-xl mb-4">Tägliche Vorhersage</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {weather.daily.data.slice(1).map((day: any, index: number) => (
                  <div key={index} className="p-2 bg-base-200/50 shadow-md rounded-lg">
                    <h4 className="text-lg mb-2 font-bold">
                      {index === 0 ? 'Morgen' : new Date(day.day).toLocaleDateString('de-DE', { 
                        month: 'short',
                        day: 'numeric'
                      })}
                    </h4>
                    <Image
                      src={`/img/${day.icon}.svg`}
                      width={100}
                      height={100}
                      alt={weather.current.summary || 'weather icon'}
                      priority
                    />
                    <div>
                      <p className="text-sm font-semibold">{day.all_day.temperature_max}°C / {day.all_day.temperature_min}°C</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}
    </div>
  );
}

