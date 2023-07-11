import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

interface ShadowProps{
    children?:any,
    style?:any,
  }
const ShadowView = ({ children, style = {} }:ShadowProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        shadowColor: colors.SKYBLUE_01,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5, 
        shadowRadius: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 10,
      },
});

export default ShadowView;
