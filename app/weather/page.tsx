//import Image from "next/image";
import Head from "next/head";
import WeatherCard from "../../components/WeatherCard";

export default async function Home({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const params = await Promise.resolve(searchParams);

  return (
    <>
      <main>
        <WeatherCard searchParams={params} />
      </main>
    </>
  );
}
