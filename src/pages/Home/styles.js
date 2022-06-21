import { Dimensions, StyleSheet,Platform,StatusBar } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //paddingVertical: Platform.OS == 'ios' ? 20 : 0
    },
    top:{
      flex: 0.4,
      //backgroundColor: '#ff0055',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bottom: {
      flex: 0.6,
      //backgroundColor: '#ff0ffa',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

    },
    box:{
      flex: 0.2,
      display: 'flex',

      alignItems: 'center'
    },
    responsiveText:{
      fontSize: RFValue(20),
      color: '#1CB279',
     // fontFamily: 'jost-medium'
    },
    bg:{
      position: 'absolute',
      bottom: 0,
    },
    button: {
      backgroundColor: '#FFFFFF',
      borderRadius: 15,
      width: 330,
      height: 60,
      justifyContent: 'center',
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