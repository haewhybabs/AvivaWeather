import * as Actions from '../actions';

interface WeatherData {
  temperature: number;
  description: string;
}

interface LocationData {
  latitude: number;
  longitude: number;
  city: string;
  address: string;
  country: string;
  loading: boolean;
  error: string | null;
}

interface WeatherState {
  weatherData: WeatherData;
  locationData: LocationData;
}

const initialState= {
  weatherData: {},
  locationData: {
    latitude: 0,
    longitude: 0,
    city: '',
    address: '',
    country: '',
    loading: false,
    error: null,
  },
  
  requestLoading:false,
  weatherHourlyData:{},
  requestHourlyLoading:false,

  weatherForecastData:{},
  requestForecastLoading:false,
  errorData:{
    isError:false
  },
};

export default function weatherReducer(
  state = initialState,
  action: any
){
  switch (action.type) {
    case Actions.FETCH_WEATHER_REQUEST:
      return {
        ...state,
        requestLoading:true
      }
    case Actions.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: { ...action.payload },
        requestLoading:false
      };
    case Actions.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        requestLoading:false,
        weatherData:{
            ...state.weatherData,
            error:action.payload
        }
      }


    case Actions.FETCH_WEATHER_HOURLY_REQUEST:
      return {
        ...state,
        requestHourlyLoading:true
      }
    case Actions.FETCH_WEATHER_HOURLY_SUCCESS:
      return {
        ...state,
        weatherHourlyData: [ ...action.payload ],
        requestHourlyLoading:false
      };
    case Actions.FETCH_WEATHER_HOURLY_FAILURE:
      return {
        ...state,
        requestHourlyLoading:false,
        weatherHourlyData:{
            ...state.weatherHourlyData,
            error:action.payload
        }
      }


      case Actions.FETCH_WEATHER_FORECAST_REQUEST:
      return {
        ...state,
        requestForecastLoading:true
      }
    case Actions.FETCH_WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        weatherForecastData: { ...action.payload },
        requestForecastLoading:false
      };
    case Actions.FETCH_WEATHER_FORECAST_FAILURE:
      return {
        ...state,
        requestForecastLoading:false,
        weatherForecastData:{
            ...state.weatherForecastData,
            error:action.payload
        }
      }
    case Actions.FETCH_LOCATION_REQUEST:
      return {
        ...state,
        locationData: {
          ...state.locationData,
          loading: true,
          error: null,
        },
      };
    case Actions.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        locationData: {
          ...state.locationData,
          loading: false,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          city: action.payload.city,
          address: action.payload.address,
          country: action.payload.country,
        },
      };
    case Actions.FETCH_LOCATION_FAILURE:
      return {
        ...state,
        locationData: {
          ...state.locationData,
          loading: false,
          error: action.error,
        },
      };
    case Actions.UPDATE_ERROR_STATE:
      return{
        ...state,
        errorData:{
          isError:action.payload.status,
          error:action.payload.error
        }
        
      }
      
    default:
      return state;
  }
}
