import React, { useCallback, useEffect, useState } from 'react';
import { View,SafeAreaView,TouchableOpacity, Text, TextInput } from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import Bg from '../../../assets/bg-top.svg'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Jost_500Medium, Jost_400Regular,Jost_700Bold, Jost_600SemiBold_Italic } from '@expo-google-fonts/jost';
import styles,{AndroidSafeArea} from './styles';
import * as math from '../../utils/functions'

const Main = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [numerator1, setNumerator1] = useState('')
  const [numerator2, setNumerator2] = useState('')
  const [denominator1, setDenominator1] = useState('')
  const [denominator2, setDenominator2] = useState('')
  const [operator, setOperator] = useState('')
  const [resultNumerator, setResultNumerator] = useState(0);
  const [resultDenominator, setResultDenominator] = useState(0);

  const calculateFract = () => {


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
        await Font.loadAsync({Jost_400Regular,Jost_500Medium,Jost_700Bold,Jost_600SemiBold_Italic});
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
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
    operator: operator,
    resultNumerator,
    resultDenominator,
  
  }
  return (

    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea} onLayout={onLayoutRootView}>
      <Bg style={styles.bg}/>
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


              <ScrollPicker style={styles.operatorInput}
                  dataSource={[
                       '+',
                       '-',
                       'x',
                       '/',
                  ]}
                  selectedIndex={0}
                  renderItem={(data, index, isSelected) => {
                      //
                  }}
                  onValueChange={(data, selectedIndex) => {
                      setOperator(data)
                  }}
                  wrapperHeight={50}
                  wrapperWidth={30}
                  itemHeight={55}
                  

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
                {resultDenominator}
                </Text>
            </View>
      </View>
      <View style={styles.bottom}>

      </View>
      <View style={styles.box}>
      <TouchableOpacity style={[styles.button, styles.button2]}>
          <Text style={[styles.responsiveText,styles.whiteText]} onPress={ calculateFract}> RESOLVER FRAÇÃO </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.buttonLine]} onPress={()=> navigation.navigate('Solution',{
          paramKey: structure
        })}>
          <Text style={{color: '#28DF99',fontSize: 20, fontFamily: 'Jost_700Bold'}}> PASSO A PASSO </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
}



export default Main;