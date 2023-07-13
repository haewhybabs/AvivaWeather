import { View, Text,SafeAreaView,StatusBar,Image, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { styles } from './styles'
import CustomText from '../../components/CustomText'
import LinearGradient from 'react-native-linear-gradient'
import ShadowView from '../../components/ShadowView'
import appIcons from '../../constants/icons'
import { useSelector, useDispatch } from 'react-redux';
import { calculateTemp, renderOnlyTime, string15, windSpeedKm } from '../../constants/functions'

interface HomeProps{
  route?:any
  navigation?:any
}
export default function Home({navigation,route}:HomeProps) {
  const data = useSelector((state: any) => state.stateContent);
  const dispatch = useDispatch();
  const {city,country} = data?.locationData;
  const weatherData =data?.weatherData;
  const { main, wind, weather,rain, snow,hourlyTemperatures  } = weatherData;
  const temperature = calculateTemp(main.temp);
  const humidity = main.humidity;
  const precipitation = rain ? rain['1h'] || 'N/A' : snow ? snow['1h'] || 'N/A' : 'N/A';
  const windSpeed = windSpeedKm(wind.speed)
  const weatherCondition = weather[0].description;



  const hourlyData = Array.from({ length: 5 }, (_, index) => data.weatherHourlyData[index.toString()]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.LIGHT_01}/>
      {/* Header */}
      <View style={styles.headerContentWrapper}>
        <Image source={appIcons.placeholder.source} style={appIcons.placeholder.style}/>
        <CustomText style={styles.headerText}>{string15(`${city}, ${country}`,20)}</CustomText>
      </View>
      <CustomText style={styles.headerSubText}>Monday 7th, January 2023</CustomText>
      {/* Content */}
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
              <CustomText style={styles.weatherMainText}>{temperature}</CustomText>
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
              <CustomText style={styles.numberText}>{precipitation}%</CustomText>
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
            {
              hourlyData.map((item,index)=>(
                <View style={styles.timeWrapper} key={index}>
                  <CustomText style={styles.subText_04}>{renderOnlyTime(item.dt_txt)}</CustomText>
                  <Image source={appIcons.clouds.source} style={appIcons.clouds.style} />
                  <CustomText style={styles.subText_04}>{calculateTemp(item?.main?.temp)}°C</CustomText>
                </View>
              ))
            }
              
              <View style={styles.timeWrapper}>
                <CustomText style={styles.subText_04}>10:00</CustomText>
                <Image source={appIcons.sun.source} style={appIcons.sun.style} />
                <CustomText style={styles.subText_04}>20°</CustomText>
              </View>
              <View style={styles.timeWrapper}>
                <CustomText style={styles.subText_04}>9:00</CustomText>
                <Image source={appIcons.clouds.source} style={appIcons.clouds.style} />
                <CustomText style={styles.subText_04}>20°</CustomText>
              </View>
              <View style={styles.timeWrapper}>
                <CustomText style={styles.subText_04}>10:00</CustomText>
                <Image source={appIcons.sun.source} style={appIcons.sun.style} />
                <CustomText style={styles.subText_04}>20°</CustomText>
              </View><View style={styles.timeWrapper}>
                <CustomText style={styles.subText_04}>9:00</CustomText>
                <Image source={appIcons.clouds.source} style={appIcons.clouds.style} />
                <CustomText style={styles.subText_04}>20°</CustomText>
              </View>
              <View style={styles.timeWrapper}>
                <CustomText style={styles.subText_04}>10:00</CustomText>
                <Image source={appIcons.sun.source} style={appIcons.sun.style} />
                <CustomText style={styles.subText_04}>20°</CustomText>
              </View>
        </ScrollView>
      </ScrollView>
  
    </SafeAreaView>
  )
}