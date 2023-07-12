import { View,StyleSheet,StatusBar,Image, TouchableOpacity, SafeAreaView, ViewStyle } from 'react-native'
import React from 'react'
import CustomText from '../CustomText'
import colors from '../../constants/colors'
import GradientContainer from '../GradientContainer'
interface HeaderProps {
    title?:String
    style?:ViewStyle,
    onPress?:()=>void,
}
export default function Header({
    title,
    style,
    onPress
}:HeaderProps) {
   
  return (
    <GradientContainer
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    >
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
        <View style={styles.wrapper}>
            <SafeAreaView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={onPress}>
                        <Image source={require('../../assets/images/back.png')} style={styles.iconImage}/>
                    </TouchableOpacity>
                    <CustomText style={styles.titleText}>{title}</CustomText>
                    <View/>
                </View>
            </SafeAreaView>
        </View>
    </GradientContainer>
      
  )
}
const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal:20,
        padding:30
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    iconImage:{
        height:20,
        width:20,
        resizeMode:"contain",
        marginTop:5
    },
    titleText:{
        paddingTop:5,
        fontSize:16,
        color:colors.LIGHT_01,
        fontWeight:'bold'
    }
})