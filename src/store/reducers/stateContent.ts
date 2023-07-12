import * as Actions from '../actions';
const initialState = {
    weatherData:{},
    locationData:{}
};
export default function stateContent(state = initialState, action: any) {
    switch (action.type) {
        case Actions.WEATHER_DATA:
            return {
                ...state,
                weatherData:{...action.payload}
            }
        case Actions.FETCH_LOCATION_REQUEST:
            return {
                ...state,
                locationData:{
                    loading: true,
                    error: null,
                }
                
            };
        case Actions.FETCH_LOCATION_SUCCESS:
            
            return {
                ...state,
                locationData:{
                    loading: false,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                    city:action.payload.city,
                    address:action.payload.address,
                    country:action.payload.country
                }
                
            };
            case Actions.FETCH_LOCATION_FAILURE:
            
                return {
                    ...state,
                    locationData:{
                        loading: false,
                        error:action.payload
                    }
                    
                };
            default:
                return state;
    }
    
    return state
}