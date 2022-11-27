import React, { useState, useEffect } from "react";
import { response } from "../services/appwriteConfig";

export default function NearbyPlays() {
  const [info, setInfo] = useState({});

  response.then(
      function (res) {
          setInfo(res);
      },
      function (error) {
          console.error(error.message);
      }
  );

  const { country } = info;
  const { city } = info;

  return (
    <div>
      <div className="grid place-items-center py-6">
        <h1 className="text-5xl font-bold text-white">Nearby Theater Play🔍</h1>
        <div className="h-1 w-72 bg-secondary my-2"></div>
      </div>

      <div className="px-12 text-2xl text-white">
        <strong>Your Location</strong>: {city} ,{country}
      </div>

      <div className="grid place-items-center py-8">
        <p className="py-2 text-lg text-white">Theater play near me</p>
        <div className="flex flex-col">
          <div className="bg-gray-800 text-4xl ">
            🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️
          </div>
          <div className="border-gray-800 border-r-[2rem] border-l-[2rem]">
            <iframe
              src="/map/index.html"
              className="rounded-xl "
              height="500"
              width="1300"
              title="map"
            />
          </div>

          <div className="bg-gray-800 text-4xl ">
            🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️
          </div>
        </div>
      </div>
    </div>
  );
}
