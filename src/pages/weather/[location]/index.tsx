import { useParams } from "next/navigation";
import React from "react";
import { getCurrentWeather } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { Response } from "@/pages/weather/[location]/type";

export default function Detail() {
  const { location } = useParams() as {location : string}

  const { data, isLoading } = useQuery<Response[]>(['zxc'], () => getCurrentWeather(location));

  return (
    <>
      <div>Detail {location}</div>
    </>
  )
}

