import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View,TouchableOpacity, Button,Text } from 'react-native';
import Bg from '../../../assets/bg.svg'
import styles, {AndroidSafeArea} from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Jost_500Medium, Jost_400Regular,Jost_700Bold, Jost_600SemiBold_Italic } from '@expo-google-fonts/jost';
import jsonText from '../../utils/texts.json'


const Solution = ({navigation, route}) => {

  const [appIsReady, setAppIsReady] = useState(false);
  const [operatorSolution, setoperatorSolution] = useState('')
  //const [numerator1, setNumerator1] = useState(route.param.paramKey.numerator1)
  //const [numerator2, setNumerator2] = useState(route.param.paramKey.numerator2)
  const [denominator1, setDenominator1] = useState('')
  const [denominator2, setDenominator2] = useState('')
  //const [operator, setOperator] = useState('')
  
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

  if(route.params.paramKey.operator){
      setDenominator1(route.params.paramKey.denominator1)
      setDenominator2(route.params.paramKey.denominator2)
    if (operatorSolution == '+' && denominator1 == denominator2)
        setoperatorSolution(1)
    else if(operatorSolution == '+' && denominator1 != denominator2)
        setoperatorSolution(2)
    else if(operatorSolution == '-' && denominator1 != denominator2)
        setoperatorSolution(3)
    else if(operatorSolution == '-' && denominator1 != denominator2)
        setoperatorSolution(4) 
    else if(operatorSolution == 'x' && denominator1 != denominator2)
        setoperatorSolution(5)
    else if(operatorSolution == '/' && denominator1 != denominator2)
        setoperatorSolution(6)
  }


  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea} onLayout={onLayoutRootView}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
          <Text> Voltar </Text>
        </TouchableOpacity>

          <View style={styles.container}>
            
              <View style={styles.top}>
                <Text style={styles.responsiveText}> Solução Detalhada</Text>
              </View>
              <View style={styles.middle}>
                  {jsonText.map((id)=>{
                      if(id == operatorSolution){
                        return <Text>
                          teste
                        </Text>
                      }
                  })}
              </View>
              <View style={styles.bottom}>

              </View>
          </View>
    </SafeAreaView>
  )
}

export default Solution;