import WeatherCard from "../../components/WeatherCard";

export default async function WeatherPage({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const city = searchParams?.city || 'Berlin'; // Default to Berlin if no city is provided
  
  return (
    <main className="container mx-auto">
      <WeatherCard searchParams={{ city }} />
    </main>
  );
}
