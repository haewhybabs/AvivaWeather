import { View, Text,SafeAreaView,StatusBar,Image, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { styles } from './styles'
import CustomText from '../../components/CustomText'
import LinearGradient from 'react-native-linear-gradient'
import ShadowView from '../../components/ShadowView'
interface HomeProps{
  route?:any
  navigation?:any
}
export default function Home({navigation,route}:HomeProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.LIGHT_01}/>
      {/* Header */}
      <View style={styles.headerContentWrapper}>
        <Image source={require('../../assets/images/placeholder.png')} style={styles.headerLocationIcon}/>
        <CustomText style={styles.headerText}>London UK</CustomText>
      </View>
      <CustomText style={styles.headerSubText}>Monday 7th, January 2023</CustomText>
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
            <CustomText style={styles.weatherMainText}>22</CustomText>
          </View>
          <View style={[styles.flexRow]}>
            <Image source={require('../../assets/images/clouds.png')} style={styles.cloudImage}/>
            <CustomText style={styles.cloudText}>Mostly clear</CustomText>
          </View>

        </LinearGradient>
      </View>
      {/* Content */}
      <View style={styles.titleWrapper}>
        <ShadowView style={styles.cardWrapper}>
          <View style={styles.alignCenter}>
            <Image source={require('../../assets/images/umbrella.png')} style={styles.icon} />
            <CustomText style={styles.numberText}>30%</CustomText>
            <CustomText style={styles.subText}>Precipitation</CustomText>
          </View>

          <View style={styles.alignCenter}>
            <Image source={require('../../assets/images/humidity.png')} style={styles.icon} />
            <CustomText style={styles.numberText}>20%</CustomText>
            <CustomText style={styles.subText}>Humidity</CustomText>
          </View>

          <View style={styles.alignCenter}>
            <Image source={require('../../assets/images/wind.png')} style={styles.icon} />
            <CustomText style={styles.numberText}>30Km/h</CustomText>
            <CustomText style={styles.subText}>Wind</CustomText>
          </View>
        </ShadowView>
      </View>
      <View style={[styles.titleWrapper,styles.contentRow]}>
        <CustomText style={styles.subText_02}>Today</CustomText>
        <TouchableOpacity>
          <CustomText style={styles.subText_03}>5-day Forecast {'>'}</CustomText>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollWrapper}>
            <View style={styles.timeWrapper}>
              <CustomText style={styles.subText_04}>9:00</CustomText>
              <Image source={require('../../assets/images/clouds.png')} style={styles.smallIcon} />
              <CustomText style={styles.subText_04}>20°</CustomText>
            </View>
            <View style={styles.timeWrapper}>
              <CustomText style={styles.subText_04}>10:00</CustomText>
              <Image source={require('../../assets/images/sun.png')} style={styles.smallIcon} />
              <CustomText style={styles.subText_04}>20°</CustomText>
            </View>
            <View style={styles.timeWrapper}>
              <CustomText style={styles.subText_04}>9:00</CustomText>
              <Image source={require('../../assets/images/clouds.png')} style={styles.smallIcon} />
              <CustomText style={styles.subText_04}>20°</CustomText>
            </View>
            <View style={styles.timeWrapper}>
              <CustomText style={styles.subText_04}>10:00</CustomText>
              <Image source={require('../../assets/images/sun.png')} style={styles.smallIcon} />
              <CustomText style={styles.subText_04}>20°</CustomText>
            </View><View style={styles.timeWrapper}>
              <CustomText style={styles.subText_04}>9:00</CustomText>
              <Image source={require('../../assets/images/clouds.png')} style={styles.smallIcon} />
              <CustomText style={styles.subText_04}>20°</CustomText>
            </View>
            <View style={styles.timeWrapper}>
              <CustomText style={styles.subText_04}>10:00</CustomText>
              <Image source={require('../../assets/images/sun.png')} style={styles.smallIcon} />
              <CustomText style={styles.subText_04}>20°</CustomText>
            </View>
      </ScrollView>
  
    </SafeAreaView>
  )
}