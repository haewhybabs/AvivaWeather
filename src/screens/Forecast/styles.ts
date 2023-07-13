import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../constants/dimension";
import colors from "../../constants/colors";
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.LIGHT_01
    },
    headerWrapper:{
        padding:20,
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        height:180
    },
    headerWrapper2: {
        backgroundColor:colors.WHITE,
        position: 'absolute',
        top:-190,
        left: 20, 
        right:20,
        paddingVertical:30,
        borderRadius:20,
        paddingHorizontal:40,
       
      },
    headerWrapperMain:{
        paddingHorizontal:20
    },
    headerImage:{
        height:100,
        width:100,
        resizeMode:'contain'
    },
    subText_01:{
        fontSize:15,
        fontWeight:'600'
    },
    subText_02:{
        fontSize:13,
        fontWeight:'600',
        
    },
    subText_03:{
        fontSize:13,
        fontWeight:'600',
        marginLeft:10
        
    },
    headerActionText:{
        fontSize:48,
        paddingVertical:10,
        color:colors.PRIMARY_MIX_02,
        fontWeight:'600'

    },
    rowWrapper:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    rowBetween:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cardWrapper:{
        paddingVertical:20,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    titleWrapper:{
        padding:20,
    },
    icon:{
        height:20,
        width:20,
        resizeMode:'contain',
        paddingVertical:10
    },
    numberText:{
        color:colors.PRIMARY_MIX_02,
        fontSize:17,
        fontWeight:'600',
        paddingVertical:5
    },
    subText:{
        color:colors.BLUESTONE,
        fontWeight:'600'
    },
    alignCenter:{
        alignItems:'center'
    },
    lineBreak:{
        marginTop:100
    },
    spacing:{
        marginHorizontal:10
    },
    topPadding:{
        paddingVertical:20
    },
    pushImageUp:{
        marginTop:-7
    },
    averageWidth:{
        width:'33.3%'
    }
})