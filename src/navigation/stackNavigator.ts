import Home from "../screens/Home";
import Splash from '../screens/Splash';
import Forecast from '../screens/Forecast';


export const WelcomeStack = 
[
  {
    screen:Splash,
    name:"Splash"
  },
];

export const AppStack = 
[
  {
    screen:Home,
    name:"Home"
  },
  {
    screen:Forecast,
    name:"Forecast"
  }
]