import React from "react";
import { View,StyleSheet } from "react-native";
import colors from "../../constants/colors";
interface DivdierProps{
    style?:any
}
const Divider = ({style}:DivdierProps) => (
  <View style={[styles.container,style]}/>
);

const styles = StyleSheet.create({
    container:{
        height: 0.5,
        opacity: 1,
        backgroundColor: colors.PRIMARY_TEXT,
        marginVertical:10
      }
})
export default Divider;