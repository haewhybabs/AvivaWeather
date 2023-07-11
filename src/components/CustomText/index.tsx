import React from "react";
import {Text,StyleSheet} from "react-native";
import colors from "../../constants/colors";

interface TextsProps{
  children?:any,
  style?:any,
  medium?:any,
  bold?:any,
  regular?:any
}
export default function CustomText({
  children,
  style,
}:TextsProps) {
  
  return (
    <Text
      style={{...styles.text,...style}}>
      {children}
    </Text>
  );
}
const styles= StyleSheet.create({
    text: {
      color:colors.DARK_01,
      fontSize:12
    },
})