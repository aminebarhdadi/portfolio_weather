import { fetchWeatherApi } from 'openmeteo';

export async function geocodeCity(city: string) {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
  const data = await response.json();
  if (data.length === 0) {
    throw new Error('City not found');
  }
  return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
}

export async function getWeatherData(latitude: number, longitude: number) {
  const params = {
    latitude,
    longitude,
    current: ['temperature_2m', 'apparent_temperature', 'is_day', 'weather_code'],
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'apparent_temperature_max',
      'apparent_temperature_min',
    ],
    timezone: 'auto',
  };
  const url = 'https://api.open-meteo.com/v1/forecast';

  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();

  const current = response.current()!;
  const daily = response.daily()!;

  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  return {
    timezone,
    timezoneAbbreviation,
    latitude,
    longitude,
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      apparentTemperature: current.variables(1)!.value(),
      isDay: current.variables(2)!.value(),
      weatherCode: current.variables(3)!.value(),
    },
    daily: {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      apparentTemperatureMax: daily.variables(3)!.valuesArray()!,
      apparentTemperatureMin: daily.variables(4)!.valuesArray()!,
    },
  };
}

