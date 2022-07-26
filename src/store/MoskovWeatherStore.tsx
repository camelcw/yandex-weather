import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IWeather } from "../models/Weather";

export default class MoskovWeatherStore {
  isLoading: boolean;
  weather: IWeather;
  constructor() {
    this.isLoading = false;
    this.weather = {
      now: 0,
      now_dt: "",
      info: {
        n: false,
        geoid: 0,
        tzinfo: {
          name: "",
          abbr: "",
          dst: false,
          offset: 0,
        },
      },
    };
    makeAutoObservable(this);
  }

  setWeather(weather: IWeather) {
    this.weather = weather;
  }

  get Weather() {
    return this.weather;
  }

  async fetchWeather() {
    try {
      this.isLoading = true;
      const response = await axios.get<IWeather>(
        "https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=true"
      );
      this.weather = response?.data;
      this.isLoading = false;
    } catch (e) {
      console.log("Error");
    }
  }
}
