import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, Sun, Moon, Thermometer, ThermometerSun, Wind } from 'lucide-react';
import { geocodeCity, getWeatherData } from './Weather';

const getWeatherIcon = (weatherCode: number) => {
  switch (true) {
    case weatherCode < 3:
      return { icon: Sun, description: 'Klarer Himmel' };
    case weatherCode < 50:
      return { icon: Cloud, description: 'Teilweise bewölkt' };
    case weatherCode < 60:
      return { icon: CloudDrizzle, description: 'Nieselregen' };
    case weatherCode < 70:
      return { icon: CloudRain, description: 'Regen' };
    case weatherCode < 80:
      return { icon: CloudSnow, description: 'Schnee' };
    case weatherCode < 90:
      return { icon: CloudLightning, description: 'Gewitter' };
    case weatherCode < 100:
      return { icon: Wind, description: 'Windig' };
    default:
      return { icon: CloudFog, description: 'Nebelig' };
  }
};

const roundTemperature = (temp: number) => Math.round(temp);

export default async function WeatherPage({ searchParams }: { searchParams: { city: string } }) {
  const city = await searchParams?.city || '';
  let weatherData = null;
  let error = null;

  if (city) {
    try {
      const { lat, lon } = await geocodeCity(city);
      weatherData = await getWeatherData(lat, lon);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten';
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Wettervorhersage</h1>

      <form action="/weather" className="w-full max-w-md mb-6">
        <div className="flex items-center border-b border-blue-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="city"
            placeholder="Stadtname eingeben"
            aria-label="Stadtname"
            defaultValue={city}
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Suchen
          </button>
        </div>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <>
          <div className="w-full max-w-md mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold mb-4">Aktuelles Wetter in {city}</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="flex items-center">
                    <Thermometer className="mr-2" />
                    Temperatur: {roundTemperature(weatherData.current.temperature2m)}°C
                  </p>
                  <p className="flex items-center mt-2">
                    <ThermometerSun className="mr-2" />
                    Gefühlt wie: {roundTemperature(weatherData.current.apparentTemperature)}°C
                  </p>
                  <p className="flex items-center mt-2">
                    {weatherData.current.isDay ? <Sun className="mr-2" /> : <Moon className="mr-2" />}
                    {weatherData.current.isDay ? "Tag" : "Nacht"}
                  </p>
                </div>
                <div className="text-right">
                  {(() => {
                    const { icon: WeatherIcon, description } = getWeatherIcon(weatherData.current.weatherCode);
                    return (
                      <>
                        <WeatherIcon size={48} />
                        <p className="mt-2">{description}</p>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-6xl bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold mb-4">Tägliche Vorhersage</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {weatherData.daily.time.map((date: Date, index: number) => {
                  const { icon: DailyIcon, description: dailyDescription } = getWeatherIcon(weatherData.daily.weatherCode[index]);
                  return (
                    <div key={index} className="flex flex-col items-center p-2 bg-gray-50 rounded-lg shadow">
                      <p className="font-semibold text-sm mb-2">{date.toLocaleDateString('de-DE', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                      <DailyIcon size={36} />
                      <p className="text-xs text-center mt-2">{dailyDescription}</p>
                      <p className="mt-2 text-sm">
                        <span className="text-red-500">{roundTemperature(weatherData.daily.temperature2mMax[index])}°</span>
                        {' / '}
                        <span className="text-blue-500">{roundTemperature(weatherData.daily.temperature2mMin[index])}°</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
