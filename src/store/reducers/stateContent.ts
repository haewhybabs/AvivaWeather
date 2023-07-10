import * as Actions from '../actions';
const initialState = {
    weatherData:{},
};
export default function stateContent(state = initialState, action = {payload:[],type:''}) {
    switch (action.type) {
        case Actions.WEATHER_DATA:
            return {
                ...state,
                weatherData:{...action.payload}
            }
        
    }
    
    return state
}