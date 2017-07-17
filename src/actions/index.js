import axios from 'axios';

const API_KEY = 'a609eb4dab7b45dccf9f2227614df3f4';
const ROOT_URL = `https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) =>{
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
