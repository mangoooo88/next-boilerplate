import { useParams } from "next/navigation";
import React from "react";
function Detail() {
  const { location } = useParams() as {location : string}

  return (
    <div>Detail {location}</div>
  )
}

export default Detail;