import { Platform } from 'react-native';
import Geolocation ,{ GeolocationOptions } from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
export const WEATHER_DATA = "WEATHER_DATA";
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE';
export const FETCH_LOCATION_REQUEST = 'FETCH_LOCATION_REQUEST';

export const fetchLocation = (dispatch:any) =>{
    Geocoder.init('AIzaSyD8AU07vIB4FoF6iiV5KSm_calvk6gx0Ug'); 
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
