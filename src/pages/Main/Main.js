import React, { useCallback, useEffect, useState } from 'react';
import { View,SafeAreaView,TouchableOpacity, Text, TextInput, Alert, Dimensions } from 'react-native';
import ScrollPicker from 'react-native-picker-scrollview';
import Bg from '../../../assets/bg-top.svg'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import styles,{AndroidSafeArea} from './styles';
import * as math from '../../utils/functions'
import * as Yup from 'yup'

const Main = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [numerator1, setNumerator1] = useState(null)
  const [numerator2, setNumerator2] = useState(null)
  const [denominator1, setDenominator1] = useState(null)
  const [denominator2, setDenominator2] = useState(null)
  const [operator, setOperator] = useState('+')
  const [resultNumerator, setResultNumerator] = useState(null);
  const [resultDenominator, setResultDenominator] = useState(null);


  async function validateField(){
    try {
      const schema = Yup.object().shape({
        numerator1: Yup.number()
        .typeError('Numerador obrigatório')
        .required("Numerador obrigatório").max(999),
        numerator2: Yup.number()
        .typeError('Numerador obrigatório')
        .required("Numerador obrigatório").max(999),
        denominator1: Yup.number()
        .typeError('Denominador obrigatório')
        .required("Denominador obrigatório").max(999),
        denominator2: Yup.number()
        .typeError('Denominador obrigatório')
        .required("Denominador obrigatório").max(999)
      })
      await schema.validate({numerator1,numerator2,denominator1,denominator2})
      calculateFract()
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        Alert.alert(error.message)

      }
        
    }
  }
  async function validateResult(){
    try {
      const schema = Yup.object().shape({
        resultNumerator: Yup.number()
        .typeError('Resolva a fração primeiro')
        .required("Resolva a fração primeiro"),
      })
      await schema.validate({resultNumerator})
      navigation.navigate('Solution',{
        paramKey: structure
      })
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        Alert.alert(error.message)
      }
        
    }
  }
  function calculateFract() {

    if (operator == '+'){
        let data = {
          numerator1,
          numerator2,
          denominator1,
          denominator2
        }
              
        let response = math.getSome(data)

        if(response.denominator != 'NaN' || response.numerator != 'NaN'){
          setResultDenominator(parseInt(response.denominator))
          setResultNumerator(parseInt(response.numerator))
        }
        else{
          setResultDenominator('')
          setResultNumerator('')
        }
        

    }else if(operator == '-'){
      let data = {
        numerator1,
        numerator2,
        denominator1,
        denominator2
      }
      let response = math.getMinus(data)

      
      if(response.denominator != 'NaN' || response.numerator != 'NaN'){
        setResultDenominator(parseInt(response.denominator))
        setResultNumerator(parseInt(response.numerator))
      }
      else{
        setResultDenominator('')
        setResultNumerator('')
      }
        

    }
    else if(operator == 'x'){
      let data = {
        numerator1,
        numerator2,
        denominator1,
        denominator2
      }
      let response = math.getMultiply(data)

      
      if(response.denominator != 'NaN' || response.numerator != 'NaN'){
        setResultDenominator(parseInt(response.denominator))
        setResultNumerator(parseInt(response.numerator))
      }
      else{
        setResultDenominator('')
        setResultNumerator('')
      }
        

    }
    else if(operator == '/'){
      let data = {
        numerator1,
        numerator2,
        denominator1,
        denominator2
      }
      let response = math.getDivided(data)

      
      if(response.denominator != 'NaN' || response.numerator != 'NaN'){
        setResultNumerator(parseInt(response.numerator))
        setResultDenominator(parseInt(response.denominator))
      }
      else{
        setResultDenominator('')
        setResultNumerator('')
      }
    }
  }
  
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Jost_400Regular': require('../../../assets/fonts/Jost-Regular.ttf'),
          'Jost_500Medium': require('../../../assets/fonts/Jost-Medium.ttf'),
          'Jost_700Bold': require('../../../assets/fonts/Jost-Bold.ttf'),
          'Jost_600SemiBold_Italic': require('../../../assets/fonts/Jost-SemiBoldItalic.ttf'),
        });
        // Artificially delay for two seconds to simulate a slow loading
        
        // experience. Please remove this if you copy and paste the code!
        //await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  var structure = {

    firstNumerator: numerator1,
    firstDenominator: denominator1,
    secondNumerator: numerator2,
    secondDenominator: denominator2,
    operatorSol: operator,
    resultNumerator,
    resultDenominator,
  
  }
  return (

    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea} onLayout={onLayoutRootView}>
      <Bg style={[styles.bg,{width: Dimensions.get('screen').width}]}/>
      <View style={styles.top}>
        
        <View style={styles.containerFrac}>
              <View style={styles.containerEsc}>
                <TextInput style={styles.textInputs}
                    placeholder="0"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                    onChangeText={value => setNumerator1(value)}
                    selectionColor="#fff"
                    maxLength={3}
                />
                <View style={styles.lineDivisor}></View>
                <TextInput style={styles.textInputs2}
                    placeholder="0"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                    onChangeText={value => setDenominator1(value)}
                    selectionColor="#fff"
                    maxLength={3}
                />
            </View>
            <View>
            <View style={styles.containerCenter}>
              <View style={styles.containerOperator}>
              <ScrollPicker
 
                  dataSource={[
                      '+',
                      '-',
                      'x',
                      '/',
                  ]}
                  selectedIndex={0}
                  itemHeight={60}
                  wrapperHeight={60}
                  wrapperColor={'#ffffff'}
                  highlightColor={'#d8d8d8'}
                  renderItem={(data, index, isSelected) => {
                    
                      return(
                        
                          <View>
                              <Text >{data}</Text>
                          </View>
                      )
                  }}
                  onValueChange={(data, selectedIndex) => {
                      setOperator(data)
                  }}
                  />
              
              
              </View>
              </View>
            </View>
            <View style={styles.containerDir}>
                <TextInput style={styles.textInputs}
                    placeholder="0"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                    onChangeText={value => setNumerator2(value)}
                    selectionColor="#fff"
                    maxLength={3}
                />
                <View style={styles.lineDivisor}></View>
                <TextInput style={styles.textInputs2}
                    placeholder="0"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                    onChangeText={value => setDenominator2(value)}
                    selectionColor="#fff"
                    maxLength={3}
                />
            </View>
            
            
            </View>
            <View style={styles.containerResultado}>
                <Text style={styles.textResult}>Resultado</Text>
                <Text style={styles.inputResult}>
                  {resultNumerator}
                </Text>
                <View style={styles.lineDivisor2}/>
                <Text style={styles.inputResult}>
                {isNaN(resultDenominator) ? '' : resultDenominator }
                </Text>
            </View>
      </View>
      <View style={styles.bottom}>

      </View>
      <View style={styles.box}>
      <TouchableOpacity style={[styles.button, styles.button2]} onPress={ validateField }>
          <Text style={[styles.responsiveText,styles.whiteText]} > RESOLVER FRAÇÃO </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.buttonLine]} onPress={validateResult }>
           <Text style={{color: '#28DF99',fontSize: 20, fontFamily: 'Jost_700Bold'}}> PASSO A PASSO </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
}



export default Main;