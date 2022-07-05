import { RFValue } from 'react-native-responsive-fontsize'
import { StyleSheet,Platform,StatusBar, Dimensions } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#28DF99'
      //paddingVertical: Platform.OS == 'ios' ? 20 : 0
    },
    bg:{
      position: 'absolute',
      bottom: 0,
    },
    top: {
      flex: 1.25,
      //borderWidth: 2,
      //borderColor: '#fafefe'
    },
    middle: {
      flex: 2,
      //borderWidth: 2,
      //borderColor: '#fafe'
      marginHorizontal: 10,
    },
    bottom:{
      flex: 0.75,
     // borderWidth: 2,
      //borderColor: 'red'
    },
    backbutton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 2,
      borderColor: '#fafe',
      height: 30,
      textAlign: 'center',
      alignItems: 'center',
    },
    responsiveText: {
      fontSize: RFValue(20),
      color: '#fff',
      fontFamily: 'Jost_500Medium',
      textAlign: 'center',
      marginTop: 10
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    lineDivisor:{
      width: 30,
      height: 2,
      backgroundColor: '#fff',
    },
    containerDir:{
      justifyContent: 'center',
      alignItems: 'center',
    },
})
export default styles
export const AndroidSafeArea = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
  });