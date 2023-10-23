import Link from "next/link";

function Weather() {
  return (
    <div>
      Weather
      <br/>
      <br/>
      <br/>
      <ul>
        <li><Link href="/weather/seoul">서울</Link></li>
        <li><Link href="/weather/pyongyang">평양</Link></li>
        <li><Link href="/weather/japan">일본</Link></li>
      </ul>
    </div>
  );
}

export default Weather;