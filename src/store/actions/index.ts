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
export const UPDATE_ERROR_STATE='UPDATE_ERROR_STATE';
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
          dispatch({
            type:UPDATE_ERROR_STATE,
            payload:{error,status:true}
          })
        }
    },
    error => {
        console.error('Error getting current location:', error);
        dispatch({ type: FETCH_LOCATION_FAILURE, payload: error.message });
        dispatch({
            type:UPDATE_ERROR_STATE,
            payload:{error:error.message,status:true}
        })
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
        dispatch({
          type:UPDATE_ERROR_STATE,
          payload:{error:error.message,status:true}
        })
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
      const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
      const filteredWeatherData = response.list.filter((item:any) => {
        const dateTime = item.dt_txt.split(' ');
        const date = dateTime[0];
        const hour = dateTime[1];
  
        return date === currentDate;
      });
      dispatch({ type: FETCH_WEATHER_FORECAST_SUCCESS, payload: response });
      dispatch({ type: FETCH_WEATHER_HOURLY_SUCCESS, payload: filteredWeatherData});
    } catch (error:any) {
      dispatch({ type: FETCH_WEATHER_FORECAST_FAILURE, error: error.message });
      dispatch({
        type:UPDATE_ERROR_STATE,
        payload:{error:error.message,status:true}
      })
    }
  ;
};

export const updateAddress = async(details:any,data:any,dispatch:Dispatch,callback: () => void)=>{
  dispatch({ type: FETCH_WEATHER_REQUEST });
  const { description } = data;
    const { formatted_address, geometry } = details;
    const { lat, lng } = geometry.location;
    let city = '';
    let country = '';
    let fullAddress='';

    // Extract city and country from the formatted address
    const addressComponents = formatted_address.split(', ');
    if (addressComponents.length >= 3) {
      city = addressComponents[addressComponents.length - 3];
      country = addressComponents[addressComponents.length - 1];
    }

    if (addressComponents.length > 0) {
      fullAddress = addressComponents.join(', ');
    }

    dispatch({
      type: FETCH_LOCATION_SUCCESS,
      payload: { latitude:lat, longitude:lng, city:city, country:country, address:fullAddress },
    });
    await Promise.all([
      fetchWeather(lat, lng, dispatch),
      fetchForecastWeather(lat, lng, dispatch),
    ]);
    callback();
    
}

export const clearError = (dispatch:Dispatch) =>{
  dispatch({
    type:UPDATE_ERROR_STATE,
    payload:{
      status:false,
      error:''
    }
  })
}
  
  
  
  
  
  
