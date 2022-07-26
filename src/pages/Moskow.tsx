import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import HeaderCity from "../components/HeaderCity";
import { IWeather } from "../models/Weather";
import MoskovWeatherStore from "../store/MoskovWeatherStore";

const Moskow = observer(() => {
  const [weather, setWeather] = useState<IWeather>();

  async function fetchWeather() {
    try {
      const response = await axios.get<IWeather>(
        "https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=true",
        {
          headers: {
            "X-Yandex-API-Key": "9aaa4334-f2ce-4dc2-b14d-d0b858aeb282",
            "Content-Type": "text/plain",
          },
        }
      );
      setWeather(response?.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchWeather();
  }, []);
  console.log(weather);

  return (
    <div>
      <HeaderCity></HeaderCity>
      Moskow
    </div>
  );
});

export default Moskow;

// const [weather, setWeather] = useState<IWeather>();

// async function fetchWeather() {
//   try {
//     const response = await axios.get<IWeather>(
//       "https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=true"
//     );
//     setWeather(response?.data);
//   } catch (e) {
//     console.log("Error");
//   }
// }
// useEffect(() => {
//   fetchWeather();
// }, []);
// console.log(weather);
