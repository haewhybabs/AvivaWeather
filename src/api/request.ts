import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { OPEN_WEATHERAPI_KEY } from '../config';
import { ForecastLink, Weather, Hourly } from './urls';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = OPEN_WEATHERAPI_KEY;

const apiService: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleResponse = <T>(response: AxiosResponse<T>): T => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

const handleError = (error: any): never => {
  console.error('API Error:', error);
  throw error;
};

export const getWeatherByCity = (city: string): Promise<WeatherResponse> => {
  return apiService
    .get<WeatherResponse>('weather', {
      params: {
        q: city,
        appid: API_KEY,
      },
    })
    .then(handleResponse)
    .catch(handleError);
};

export const getCurrentWeatherByCoordinates = (
    latitude: number,
    longitude: number
  ): Promise<WeatherResponse> => {
    return apiService
      .get<WeatherResponse>(Weather, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: API_KEY,
        },
      })
      .then(handleResponse)
      .catch(handleError);
};
export const getHourlyWeatherByCoordinates = (
  latitude: number,
  longitude: number
): Promise<WeatherResponse> => {
  return apiService
    .get<WeatherResponse>(Hourly, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
      },
    })
    .then(handleResponse)
    .catch(handleError);
};
export const getForecastWeatherByCoordinates = (
  latitude: number,
  longitude: number
): Promise<WeatherResponse> => {
  return apiService
    .get<WeatherResponse>(ForecastLink, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
      },
    })
    .then(handleResponse)
    .catch(handleError);
};
  
export interface WeatherResponse {
  weather: Weather[];
  main: {
    temp: number;
    humidity: number;
  };
  name: string;
  hourly: HourlyWeather[];
  rain: {
    '1h': number;
  };
  snow: {
    '1h': number;
  };
  list:[]
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface HourlyWeather {
  dt: number;
  temp: number;
  humidity: number;
}

export default apiService;