import React, { useCallback, useEffect, useState } from 'react';
import { View,SafeAreaView,TouchableOpacity, Text, TextInput } from 'react-native';
import Bg from '../../../assets/bg-top.svg'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Jost_500Medium, Jost_400Regular,Jost_700Bold, Jost_600SemiBold_Italic } from '@expo-google-fonts/jost';
import styles,{AndroidSafeArea} from './styles';

const Main = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  
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
  return (

    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea} onLayout={onLayoutRootView}>
      <Bg style={styles.bg}/>
      <View style={styles.top}>
        <View style={styles.containerFrac}>
              <View style={styles.containerEsc}>
                <TextInput style={styles.textInputs}
                    placeholder="1"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                />
                <View style={styles.lineDivisor}></View>
                <TextInput style={styles.textInputs2}
                    placeholder="1"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                />
            </View>
            <View>
            <View style={styles.containerCenter}>
              <View style={styles.containerOperator}>
                <TextInput style={styles.operatorInput}
                      placeholder="1"
                      keyboardType="numbers-and-punctuation"
                      placeholderTextColor="#1CB279"
                  />
              </View>
              </View>
            </View>
            <View style={styles.containerDir}>
                <TextInput style={styles.textInputs}
                    placeholder="1"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                />
                <View style={styles.lineDivisor}></View>
                <TextInput style={styles.textInputs2}
                    placeholder="1"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                />
            </View>
            
            
            </View>
            <View style={styles.containerResultado}>
                <Text style={{fontFamily: 'Jost_600SemiBold_Italic', fontSize: 24, color: '#28DF99'}}>Resultado</Text>
                <Text style={styles.inputResult}></Text>

                
                <View style={styles.lineDivisor2}></View>
                <Text style={styles.inputResult}>
    
                </Text>
            </View>
      </View>
      <View style={styles.bottom}>

      </View>
      <View style={styles.box}>
      <TouchableOpacity style={[styles.button, styles.button2]}>
          <Text style={[styles.responsiveText,styles.whiteText]}> RESOLVER FRAÇÃO </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.buttonLine]} onPress={()=> navigation.navigate('Solution')}>
          <Text style={{color: '#28DF99',fontSize: 20, fontFamily: 'Jost_700Bold'}}> PASSO A PASSO </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
}

const structure = {

  firstNumerator: 1,
  firstDenominator: 2,
  secondNumerator: 2,
  secondDenominator: 5,
  operator: '+'

}
const texts = {
  some: 'Denominadores iguais basta somar os valores'
}


export default Main;