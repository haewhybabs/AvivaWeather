import {View,StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import CustomText from '../CustomText'
import colors from '../../constants/colors'
interface ButtonProps{
    style?:ViewStyle,
    onPress?:()=>void
    title?:string
    disabled?:boolean

}
export default function Button({
    style,
    onPress,
    title,
    disabled
}:ButtonProps) {
  return (
    <>
        {
            disabled?
            <View style={{...styles.buttonWrapper,...style,opacity:0.6}}>
                <CustomText style={styles.buttonText}>{title}</CustomText>
            </View>
            :
            <TouchableOpacity style={{...styles.buttonWrapper,...style}} onPress={onPress}>
                <CustomText style={styles.buttonText}>{title}</CustomText>
            </TouchableOpacity>
        }
    </>
  )
}

export const styles = StyleSheet.create({
    buttonWrapper:{
        width:'100%',
        height:45,
        backgroundColor:colors.SECONDARY,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:colors.DARK_01,
        fontSize:15,
        fontWeight:'bold'
    },
})