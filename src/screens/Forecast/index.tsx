import { View, Text,Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { styles } from './styles'
import GradientContainer from '../../components/GradientContainer'
import CustomText from '../../components/CustomText'
import ShadowView from '../../components/ShadowView'
import appIcons from '../../constants/icons'
interface ForecastProps{
  route?:any
  navigation?:any
}
export default function Forecast({navigation,route}:ForecastProps) {
  const renderBoxItem = () =>{
    return(
      <View style={styles.cardWrapper}>
        <View style={styles.alignCenter}>
          <Image source={appIcons.umbrella.source} style={appIcons.umbrella.style} />
          <CustomText style={styles.numberText}>30%</CustomText>
          <CustomText style={styles.subText}>Precipitation</CustomText>
        </View>

        <View style={styles.alignCenter}>
          <Image source={appIcons.humidity.source} style={appIcons.humidity.style} />
          <CustomText style={styles.numberText}>20%</CustomText>
          <CustomText style={styles.subText}>Humidity</CustomText>
        </View>

        <View style={styles.alignCenter}>
          <Image source={appIcons.wind.source} style={appIcons.wind.style} />
          <CustomText style={styles.numberText}>30Km/h</CustomText>
          <CustomText style={styles.subText}>Wind</CustomText>
        </View>
      </View>
    )
  }
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
              <CustomText style={styles.headerActionText}>21°</CustomText>
              <CustomText>Thunders showers</CustomText>
            </View>
          </View>
          
          {renderBoxItem()}
        </ShadowView>
      </View>
      <View style={styles.lineBreak}/>
      
     
    </View>
  )
}