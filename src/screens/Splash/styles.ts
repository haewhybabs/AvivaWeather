import { StyleSheet } from "react-native";
import { screenHeight } from "../../constants/dimension";
import colors from "../../constants/colors";
export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageWrapper:{
        height:200,
        width:200,
        resizeMode:'contain'
    },
    imageContainer:{
        marginTop:screenHeight(20),
        alignItems:'center'
    },
    bottomWrapper:{
        justifyContent:'flex-end',
        flex:1,
        alignItems:'center',
    },
    bottomContentContainer:{
        padding:20,
        paddingBottom:screenHeight(10),
    },
    textLogo:{
        color:colors.WHITE,
        fontSize:45,
        fontWeight:'bold',
        textAlign:'center'
    },
    textLogo2:{
        color:colors.SECONDARY,
        fontSize:45,
        fontWeight:'bold',
        textAlign:'center'
    },
    subText:{
        color:colors.LIGHTGRAY,
        textAlign:'center',
        lineHeight:20,
        marginVertical:10
    },
    buttonWrapper:{
        padding:20,
        width:'100%'
    }
})