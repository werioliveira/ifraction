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
      flex: 2,
      borderWidth: 2,
      borderColor: '#fafefe'
    },
    middle: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#fafe'
    },
    bottom:{
      flex: 1,
      borderWidth: 2,
      borderColor: 'red'
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
    }
})
export default styles
export const AndroidSafeArea = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
  });