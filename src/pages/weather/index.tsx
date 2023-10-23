import Link from "next/link";

const getCurrentWeather = async () => {
  const res = await fetch('http://api.weatherapi.com/v1/current.json?key=5a97e41a7b4846dc96765720232310&q=seoul&aqi=no')
  return res.json()
}

async function Weather() {
  const res = await getCurrentWeather()
  console.log(res)
  return (
    <div>
      Weather
      <br/>
      <br/>
      <br/>
      <ul>
        <li>
          <Link href="/weather/seoul">서울</Link>
          <Link href="/weather/japan">일본</Link>
        </li>
      </ul>
    </div>
  );
}

export default Weather;