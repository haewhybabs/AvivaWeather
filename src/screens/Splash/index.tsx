import { View, Text,Image,Platform } from 'react-native'
import React,{useEffect,useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors';
import { styles } from './styles';
import CustomText from '../../components/CustomText';
import Button from '../../components/Button';
import appIcons from '../../constants/icons';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLocation } from '../../store/actions';
interface SplashProps{
  route?:any
  navigation?:any
}
export default function Splash({navigation,route}:SplashProps) {
  const location = useSelector((state: any) => state.stateContent);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchLocation(dispatch)
  }, [dispatch]);
  return (
    <LinearGradient
    style={styles.container}
    colors={[colors.PRIMARY_MIX_02,colors.PRIMARY_MIX,]}
    end={{ x: 0.5, y: 0.2 }}
    start={{ x: 0.5, y: 1 }}
    locations={[0.2, 0.8]}
  >
    <View style={styles.imageContainer}>
      <Image source={appIcons.cloud.source} style={appIcons.cloud.style}/>
    </View>

    <View style={styles.bottomWrapper}>
      <View style={styles.bottomContentContainer}>
        <CustomText style={styles.textLogo}>AVIVA</CustomText>
        <CustomText style={styles.textLogo2}>Forecasts</CustomText>
        <CustomText style={styles.subText}>Providing a comprehensive outlook for today and tomorrow, this forecast offers detailed information on the anticipated weather conditions, temperatures.</CustomText>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="GET STARTED" onPress={()=>navigation.navigate('AppStack')} />
      </View>     
    </View>

    </LinearGradient>
  )
}