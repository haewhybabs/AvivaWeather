import { Platform } from 'react-native';
import Geolocation ,{ GeolocationOptions } from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { Dispatch } from 'redux';
import { GOOGLE_API_KEY } from '../../config';
import { getCurrentWeatherByCoordinates, getForecastWeatherByCoordinates, getHourlyWeatherByCoordinates } from '../../api/request';
export const WEATHER_DATA = "WEATHER_DATA";
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE';
export const FETCH_LOCATION_REQUEST = 'FETCH_LOCATION_REQUEST';

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';

export const FETCH_WEATHER_HOURLY_SUCCESS = 'FETCH_WEATHER_HOURLY_SUCCESS';
export const FETCH_WEATHER_HOURLY_FAILURE = 'FETCH_WEATHER_HOURLY_FAILURE';
export const FETCH_WEATHER_HOURLY_REQUEST = 'FETCH_WEATHER_HOURLY_REQUEST';

export const FETCH_WEATHER_FORECAST_SUCCESS = 'FETCH_WEATHER_FORECAST_SUCCESS';
export const FETCH_WEATHER_FORECAST_FAILURE = 'FETCH_WEATHER_FORECAST_FAILURE';
export const FETCH_WEATHER_FORECAST_REQUEST = 'FETCH_WEATHER_FORECAST_REQUEST';

export const fetchLocation = (dispatch:Dispatch) =>{
    Geocoder.init(GOOGLE_API_KEY); 
    dispatch({ type: FETCH_LOCATION_REQUEST });

    if (Platform.OS === 'android') {
        Geolocation.requestAuthorization();
        }
        // Get current location
    Geolocation.getCurrentPosition(
    async position => {
        const { latitude, longitude } = position.coords;
        
        try {
        const response = await Geocoder.from(latitude, longitude);
        const { results } = response;

        if (results.length > 0) {
            const { address_components } = results[0];
            let city = '';
            let country = '';

            for (const component of address_components) {
                if (component.types.includes('locality')) {
                  city = component.long_name;
                }
                if (component.types.includes('country')) {
                  country = component.long_name;
                }
            }
           
            dispatch({
                type: FETCH_LOCATION_SUCCESS,
                payload: { latitude, longitude, city, country, address:results[0].formatted_address },
            });

            //Fetch the weather with the data obtained

            fetchWeather(latitude,longitude,dispatch)
            fetchForecastWeather(latitude,longitude,dispatch)
        }
        } catch (error) {
        console.error('Error getting location details:', error);
        // Handle error and show an appropriate error message
        }
    },
    error => {
        console.error('Error getting current location:', error);
        dispatch({ type: FETCH_LOCATION_FAILURE, payload: error.message });
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
   
}

export const fetchWeather = async(
    latitude: number,
    longitude: number,
    dispatch:Dispatch
  )=>{
    
      dispatch({ type: FETCH_WEATHER_REQUEST });
      try {
        const response = await getCurrentWeatherByCoordinates(latitude, longitude);
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response });
      } catch (error:any) {
        dispatch({ type: FETCH_WEATHER_FAILURE, error: error.message });
      }
    ;
};

export const fetchHourlyWeather = async(
  latitude: number,
  longitude: number,
  dispatch:Dispatch
)=>{
  
    dispatch({ type: FETCH_WEATHER_REQUEST });
    try {
      const response = await getHourlyWeatherByCoordinates(latitude, longitude);
      dispatch({ type: FETCH_WEATHER_HOURLY_SUCCESS, payload: response });
    } catch (error:any) {
      dispatch({ type: FETCH_WEATHER_HOURLY_FAILURE, error: error.message });
    }
  ;
};

export const fetchForecastWeather = async(
  latitude: number,
  longitude: number,
  dispatch:Dispatch
)=>{
  
    dispatch({ type: FETCH_WEATHER_REQUEST });
    try {
      const response = await getForecastWeatherByCoordinates(latitude, longitude);
      const specificHours = ['09:00:00', '10:00:00', '11:00:00','12:00:00','13:00:00']; // Specify the desired hours
      const filteredWeatherData = response.list.filter((item:any) => {
        const hour = item.dt_txt.split(' ')[1];
        return specificHours.includes(hour);
      });
      
      dispatch({ type: FETCH_WEATHER_FORECAST_SUCCESS, payload: response });
      //This is just to beautify the UI on the frontend, incorrect data.
      dispatch({ type: FETCH_WEATHER_HOURLY_SUCCESS, payload: filteredWeatherData});
    } catch (error:any) {
      dispatch({ type: FETCH_WEATHER_FORECAST_FAILURE, error: error.message });
    }
  ;
};
  
  
  
  
  
  
