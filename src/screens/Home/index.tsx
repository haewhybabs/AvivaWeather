import { View, Text,SafeAreaView,StatusBar,Image, TouchableOpacity,ScrollView,ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { styles } from './styles'
import CustomText from '../../components/CustomText'
import LinearGradient from 'react-native-linear-gradient'
import ShadowView from '../../components/ShadowView'
import appIcons from '../../constants/icons'
import { useSelector, useDispatch } from 'react-redux';
import { calculateTemp, detectCloud, formatedDate, renderOnlyTime, string15, windSpeedKm } from '../../constants/functions'

interface HomeProps{
  route?:any
  navigation?:any
}
export default function Home({navigation,route}:HomeProps) {
  const data = useSelector((state: any) => state.stateContent);
  const {city,country,address} = data?.locationData;
  const weatherData =data?.weatherData;
  const { main, wind, weather,rain, snow,hourlyTemperatures  } = weatherData;
  const temperature = calculateTemp(main?.temp||0);
  const humidity = main?.humidity;
  const precipitation = rain ? rain['1h'] || 'N/A' : snow ? snow['1h'] || 'N/A' : 'N/A';
  const windSpeed = windSpeedKm(wind?.speed)
  const weatherCondition = weather && weather.length > 0 ? weather[0]?.description || '' : '';
  const hourlyData = data.weatherHourlyData || [];
  const handleSearch =() =>{
    navigation.navigate('SearchPage')
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.LIGHT_01}/>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View />
        <View style={styles.headerContentWrapper}>
          <Image source={appIcons.placeholder.source} style={appIcons.placeholder.style}/>
          <CustomText style={styles.headerText}>{ city ||country ?string15(`${city}, ${country}`,20):string15(address,20)}</CustomText>
        </View>

        <TouchableOpacity style={styles.searchCover} onPress={handleSearch}>
          <Image source={appIcons.zoom.source} style={appIcons.zoom.style} />
        </TouchableOpacity>
      </View>
      <CustomText style={styles.headerSubText}>{formatedDate()}</CustomText>
      {data?.requestLoading || data?.locationData.loading? <ActivityIndicator/> 
      : 
      <ScrollView showsVerticalScrollIndicator={false}>

        <View>
          <LinearGradient
            style={styles.headerCard}
            colors={[colors.SKYBLUE_01,colors.PRIMARY_MIX_02,colors.SKYBLUE_02]}
            end={{ x: 0.9, y: 0.3 }}
            start={{ x: 0.1, y: 0.3 }}
          >
            <View style={styles.degreeWrapper}>
              <View style={styles.degreeContainer}>
                <View style={styles.degreeDot}/>
              </View>
            </View>

            <View>
              <CustomText style={styles.weatherMainText}>{temperature || 0}</CustomText>
            </View>
            <View style={[styles.flexRow]}>
              <Image source={require('../../assets/images/clouds.png')} style={styles.cloudImage}/>
              <CustomText style={styles.cloudText}>{string15(weatherCondition,10)}</CustomText>
            </View>

          </LinearGradient>
        </View>
        
        <View style={styles.titleWrapper}>
          <ShadowView style={styles.cardWrapper}>
            <View style={styles.alignCenter}>
              <Image source={appIcons.umbrella.source} style={appIcons.umbrella.style} />
              <CustomText style={styles.numberText}>{precipitation}</CustomText>
              <CustomText style={styles.subText}>Precipitation</CustomText>
            </View>

            <View style={styles.alignCenter}>
              <Image source={appIcons.humidity.source} style={appIcons.humidity.style} />
              <CustomText style={styles.numberText}>{humidity}%</CustomText>
              <CustomText style={styles.subText}>Humidity</CustomText>
            </View>

            <View style={styles.alignCenter}>
              <Image source={appIcons.wind.source} style={appIcons.wind.style} />
              <CustomText style={styles.numberText}>{windSpeed}Km/h</CustomText>
              <CustomText style={styles.subText}>Wind</CustomText>
            </View>
          </ShadowView>
        </View>
        <View style={[styles.titleWrapper,styles.contentRow]}>
          <CustomText style={styles.subText_02}>Today</CustomText>
          <TouchableOpacity onPress={()=>navigation.navigate("Forecast")}>
            <CustomText style={styles.subText_03}>5-day Forecast {'>'}</CustomText>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollWrapper}>
           {hourlyData && hourlyData.length > 0 ? (
              hourlyData.map((item: any, index: number) => (
                <View style={styles.timeWrapper} key={index}>
                  <CustomText style={styles.subText_04}>{renderOnlyTime(item.dt_txt)}</CustomText>
                  <Image
                    source={detectCloud(item?.weather[0]?.id) ? appIcons.clouds.source : appIcons.sun.source}
                    style={appIcons.clouds.style}
                  />
                  <CustomText style={styles.subText_04}>{calculateTemp(item?.main?.temp)}°</CustomText>
                </View>
              ))
            ) : (
              <View>
                {/* Render a fallback UI when hourlyData is empty or null */}
                <CustomText>No hourly data available</CustomText>
              </View>
            )}

        </ScrollView>
      </ScrollView>
      }
  
    </SafeAreaView>
  )
}