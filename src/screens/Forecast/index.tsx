import { View, Text,Image,FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { styles } from './styles'
import GradientContainer from '../../components/GradientContainer'
import CustomText from '../../components/CustomText'
import ShadowView from '../../components/ShadowView'
import appIcons from '../../constants/icons'
import { useSelector, useDispatch } from 'react-redux';
import { calculateTemp, formatDate2, getWeatherNextDay, renderOnlyTime, string15, windSpeedKm } from '../../constants/functions'
interface ForecastProps{
  route?:any
  navigation?:any
}
export default function Forecast({navigation,route}:ForecastProps) {
  const data = useSelector((state: any) => state.stateContent);
  const {weatherForecastData} =data;
  const weatherNextDay = weatherForecastData ? getWeatherNextDay(weatherForecastData?.list):[];
  const {main,weather,wind,rain,snow} =weatherNextDay[0];
  const humidity = main?.humidity;
  const precipitation = rain ? rain['1h'] || 'N/A' : snow ? snow['1h'] || 'N/A' : 'N/A';
  const windSpeed = windSpeedKm(wind?.speed)
  const weatherCondition = weather && weather.length > 0 ? weather[0]?.description || '' : '';
  
  const forecasts = weatherForecastData?.list;
  
  const renderBoxItem = () =>{
    return(
      <View style={styles.cardWrapper}>
        <View style={styles.alignCenter}>
          <Image source={appIcons.umbrella.source} style={appIcons.umbrella.style} />
          <CustomText style={styles.numberText}>{precipitation}</CustomText>
          <CustomText style={styles.subText}>Precipitation</CustomText>
        </View>

        <View style={styles.alignCenter}>
          <Image source={appIcons.humidity.source} style={appIcons.humidity.style} />
          <CustomText style={styles.numberText}>{humidity} %</CustomText>
          <CustomText style={styles.subText}>Humidity</CustomText>
        </View>

        <View style={styles.alignCenter}>
          <Image source={appIcons.wind.source} style={appIcons.wind.style} />
          <CustomText style={styles.numberText}>{windSpeed}Km/h</CustomText>
          <CustomText style={styles.subText}>Wind</CustomText>
        </View>
      </View>
    )
  }
  const renderForecastData = ({ item }: { item: any }) => {
    const date = new Date(item.dt_txt);
    const formattedDate = formatDate2(date);
    const { description } = item.weather[0];
    const temperature = item.main.temp;
    return (
      <View style={[styles.rowWrapper, styles.topPadding]}>
        <View>
          <CustomText style={styles.subText_03}>{formattedDate}</CustomText>
        </View>
        <View style={styles.rowWrapper}>
          <Image source={appIcons.clouds.source} style={[appIcons.clouds.style, styles.pushImageUp]} />
          <CustomText style={styles.subText_03}>{description}</CustomText>
        </View>
        <View>
          <CustomText style={styles.subText_03}>{calculateTemp(temperature)}</CustomText>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header onPress={()=>navigation.goBack()} title={"5-day-forecast"}/>
      <GradientContainer 
      start={{ x: 1, y: 1 }}
      end={{ x: 0.5, y: 0.5 }}
      style={styles.headerWrapper}>
      </GradientContainer>
      <View style={styles.headerWrapperMain}>
        <ShadowView style={styles.headerWrapper2}>
          <View style={styles.rowWrapper}>
            <Image source={appIcons.cloudy.source} style={appIcons.cloudy.style}/>
            <View>
              <CustomText style={styles.subText_01}>Tomorrow</CustomText>
              <CustomText style={styles.headerActionText}>{calculateTemp(main?.temp)}°C</CustomText>
              <CustomText>{weather[0].description}</CustomText>
            </View>
          </View>
          
          {renderBoxItem()}
        </ShadowView>
      </View>
      <View style={styles.lineBreak}/>

      <FlatList
        data={forecasts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderForecastData}
        showsVerticalScrollIndicator={false}
      />
     
      
     
    </View>
  )
}