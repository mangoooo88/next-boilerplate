import { useParams } from "next/navigation";
import React from "react";
import { getCurrentWeather } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { IResponse } from "@/pages/weather/[location]/type";

export default function Detail() {
  const {location} = useParams() as { location: string }

  const {data} = useQuery<any>({
    queryKey: ['location', location],
    queryFn: () => getCurrentWeather(location)
  });

  console.log(data)

  return (
    <>
      <div>Detail {location}</div>
      <p>{data}</p>
    </>
  )
}

