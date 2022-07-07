import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View,TouchableOpacity, Button,Text } from 'react-native';
import Bg from '../../../assets/bg.svg'
import styles, {AndroidSafeArea} from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Soma from '../../components/soma';
import Subtracao from '../../components/subtracao';
import Multiplicacao from '../../components/multiplicacao';
import Divisao from '../../components/divisao';

const Solution = ({navigation, route}) => {

  const [appIsReady, setAppIsReady] = useState(false);
  const [operatorSolution, setoperatorSolution] = useState(route.params.paramKey.operatorSol)
  const [numerator1, setNumerator1] = useState(route.params.paramKey.firstNumerator)
  const [numerator2, setNumerator2] = useState(route.params.paramKey.secondNumerator)
  const [denominator1, setDenominator1] = useState(route.params.paramKey.firstDenominator)
  const [denominator2, setDenominator2] = useState(route.params.paramKey.secondDenominator)
  const [resultNumerator, setResultNumerator] = useState(route.params.paramKey.resultNumerator)
  const [resultDenominator, setResultDenominator] = useState(route.params.paramKey.resultDenominator)
  const [operator, setOperator] = useState('')
  const [dataProp, setData] = useState({})
  
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
    function solutionFractions(){
      let data = {
        numerator1,
        numerator2,
        denominator1,
        denominator2,
        resultDenominator,
        resultNumerator
      }
      if (operatorSolution == "+"){
        setData(data)
        setOperator('Soma')
      }
      else if(operatorSolution == "-"){
        setData(data)
        setOperator('Subtração')
      }
      else if(operatorSolution == "x"){
        setData(data)
        setOperator('Multiplicação')
      }
      else if(operatorSolution == "/"){
        setData(data)
        setOperator('Divisão')
      }
        
    }
    prepare();
    solutionFractions();

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


  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea} onLayout={onLayoutRootView}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
          <Text> Voltar </Text>
        </TouchableOpacity>

          <View style={styles.container}>
            
              <View style={styles.top}>
                <View style={styles.containerDir}>
                <Text style={styles.responsiveText}> Solução Detalhada de {operator}</Text>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                <View style={{marginRight: 40}}>
                    <Text style={styles.responsiveText}>{numerator1}</Text>
                      <View style={styles.lineDivisor}/>
                    <Text style={styles.responsiveText}>{denominator1}</Text>  
                  </View>

                  <View>
                    <Text style={styles.responsiveText}>{numerator2}</Text>
                      <View style={styles.lineDivisor}/>
                    <Text style={styles.responsiveText}>{denominator2}</Text>  
                  </View>
                </View>
                <View style={styles.containerDir}>
                <Text style={[styles.responsiveText,{fontSize: 15}]}> Resultado {operator}</Text>
                </View>
                {isNaN(resultDenominator) ?
                  <View>
                    <Text style={styles.responsiveText}>{resultNumerator}</Text>
                    <View style={styles.lineDivisor}/>
                  </View>

                : 
                  <View>
                    <Text style={styles.responsiveText}>{resultNumerator}</Text>
                      <View style={styles.lineDivisor}/>
                    <Text style={styles.responsiveText}>{resultDenominator}</Text>  
                  </View>
                
                }

                </View>
              </View>
              <View style={styles.middle}>
                <View style={styles.spaceTop}>


                    {operatorSolution == '+' ? 
                    <View>
                        <Soma props={dataProp}/>
                    </View>
      
                    : operatorSolution == '-' ?

                    <View>
                        <Subtracao props={dataProp}/>
                    </View>
                    : operatorSolution == 'x' ?
                    <View>
                      <Multiplicacao props={dataProp}/>
                    </View>
                    :
                    <View>
                      <Divisao props={dataProp}/>  
                    </View>

                    }

              </View>
              </View>
              <View style={styles.bottom}>

              </View>
          </View>
    </SafeAreaView>
  )
}

export default Solution;