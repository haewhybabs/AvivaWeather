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