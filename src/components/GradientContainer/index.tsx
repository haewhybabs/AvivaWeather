import { Animated, TouchableWithoutFeedback, ViewStyle} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../constants/colors';
interface GradientContainerProps {
    style?: ViewStyle; 
    children?: React.ReactNode; 
    gColors?: string[]; 
    start?: { x: number; y: number }; 
    end?: { x: number; y: number }; 
    onPress?: () => void;
 }

export default function GradientContainer({style,children,gColors,start,end,onPress}:GradientContainerProps) {
  return (
    <Animated.View>
        <TouchableWithoutFeedback onPress={onPress}>
            <LinearGradient
                style={style}
                start={start?start:{ x: 0, y: 1 }}
                end={end?end:{ x: 1, y: 0 }}
                colors={gColors?gColors:[colors.PRIMARY_MIX,colors.PRIMARY_MIX_03]}
            >
                {children}
            </LinearGradient>
        </TouchableWithoutFeedback>
       
    </Animated.View>
  )
}
