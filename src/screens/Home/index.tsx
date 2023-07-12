import { View, Text,SafeAreaView,StatusBar,Image, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { styles } from './styles'
import CustomText from '../../components/CustomText'
import LinearGradient from 'react-native-linear-gradient'
import ShadowView from '../../components/ShadowView'
import appIcons from '../../constants/icons'
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
        <Image source={appIcons.placeholder.source} style={appIcons.placeholder.style}/>
        <CustomText style={styles.headerText}>London UK</CustomText>
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
              <CustomText style={styles.weatherMainText}>22</CustomText>
            </View>
            <View style={[styles.flexRow]}>
              <Image source={require('../../assets/images/clouds.png')} style={styles.cloudImage}/>
              <CustomText style={styles.cloudText}>Mostly clear</CustomText>
            </View>

          </LinearGradient>
        </View>
        
        <View style={styles.titleWrapper}>
          <ShadowView style={styles.cardWrapper}>
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
              <View style={styles.timeWrapper}>
                <CustomText style={styles.subText_04}>9:00</CustomText>
                <Image source={appIcons.clouds.source} style={appIcons.clouds.style} />
                <CustomText style={styles.subText_04}>20°</CustomText>
              </View>
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