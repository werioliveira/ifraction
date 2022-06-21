import { Dimensions, StyleSheet,Platform,StatusBar } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //paddingVertical: Platform.OS == 'ios' ? 20 : 0
    },
    top:{
      flex: 0.50,
      //backgroundColor: '#ff0055',
      alignItems: 'center',
      justifyContent: 'center',
      //borderWidth: 1,
      //borderColor: '#ff0055'
    },
    bottom: {
      flex: 0.4,
      //backgroundColor: '#ff0ffa',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

    },
    box:{
      flex: 0.3,
      display: 'flex',

      alignItems: 'center'
    },
    responsiveText:{
      fontSize: RFValue(20),
      color: '#1CB279',
      fontFamily: 'Jost_500Medium'
    },
    whiteText:{
      color: '#fff'
    },
    bg:{
      position: 'absolute',
      top: 0,
    },
    button: {
      backgroundColor: '#FFFFFF',
      borderRadius: 15,
      width: 330,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button2: {
      backgroundColor: '#28DF99',
      borderRadius: 15,
      width: 330,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonLine: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#28DF99'
    },
    containerResultado:{
      flex: 1,
      height: 150,
      backgroundColor: '#fff',
      borderRadius: 20,
      width: 170,
      alignItems: 'center',

    },
    containerFrac:{
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
  
    },
    containerEsc:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerCenter:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    lineDivisor:{
      width: 80,
      height: 2,
      backgroundColor: '#fff',
    },
    lineDivisor2:{
      width: 80,
      height: 2,
      backgroundColor: '#28DF99',
    },
    textInputs:{
      fontSize: 24,
      fontFamily: 'Jost_400Regular',
      color: '#FFFFFF',
      width: 100,
      height: 40,
      marginTop: 25,
      marginLeft: 80
    },
    textInputs2:{
      fontSize: 24,
      fontFamily: 'Jost_400Regular',
      color: '#FFFFFF',
      width: 100,
      height: 40,
      marginTop: 10,
      marginLeft: 80
    },
    inputResult:{
          fontSize: 24,
          fontFamily: 'Jost_400Regular',
          color: '#28DF99',
          width: 100,
          height: 40,
          marginTop: 10,
          marginLeft: 80 
    },
    operatorInput:{
      fontSize: 24,
      fontFamily: 'Jost_400Regular',
      color: '#1CB279',
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    containerOperator:{
      width: 50,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
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