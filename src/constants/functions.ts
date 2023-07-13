export const string15 = (str:String, length = 15) => {
    if (str) {
      let val = str;
      let newVal = val.substr(0, length);
      let valDot = val.length > length ? '...' : '';
      newVal = newVal + valDot;
      return newVal;
    }
};
export const calculateTemp = (temp:number)=>{
  return Math.round(temp - 273.15)
}
export const windSpeedKm = (speed:number) =>{
  return (speed * 3.6).toFixed(1); 
}
export const renderOnlyTime = (dateTime:any)=>{
  const time = dateTime.match(/\d{2}:\d{2}/)[0];
  return time;
}
export const detectCloud = (weatherCondition:number)=>{
  if (weatherCondition >= 801 && weatherCondition < 800) {
    return true; // Cloudy
  } else if (weatherCondition === 800) {
    return false; // Sunny
  } else {
    return true; // Other weather conditions
  }
}
export const getWeatherNextDay = (weatherForecastData:any) => {
  const currentDate = new Date();

  // Get the next day's date
  const nextDay = new Date();
  nextDay.setDate(currentDate.getDate() + 1);

  // Filter the weather data for the next day
  const weatherDataNextDay = weatherForecastData && weatherForecastData.length > 0
  ? weatherForecastData.filter((item: any) => {
      const itemDate = new Date(item.dt_txt);
      return (
        itemDate.getDate() === nextDay.getDate() &&
        itemDate.getMonth() === nextDay.getMonth() &&
        itemDate.getFullYear() === nextDay.getFullYear()
      );
    })
  : [];

  return weatherDataNextDay;
};

export const formatedDate = () =>{
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return formattedDate
}


export const formatDate2 = (date: Date): string => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysOfMonth = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

  const day = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonthSuffix = daysOfMonth[day % 10 === 1 && day !== 11 ? 1 : day % 10 <= 3 ? day % 10 : 0];

  const hours = date.getHours();
  const formattedHours = hours > 12 ? hours - 12 : hours;
  const amPm = hours >= 12 ? 'pm' : 'am';

  return `${dayOfWeek} ${day}${dayOfMonthSuffix} ${formattedHours}${amPm}`;
};