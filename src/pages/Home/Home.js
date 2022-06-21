import React, { useCallback, useEffect, useState } from 'react';
import { View, SafeAreaView, Text,TouchableOpacity } from 'react-native';
import Bg from '../../../assets/bg.svg'
import Logo from '../../../assets/logo.svg'
import styles, { AndroidSafeArea } from './styles'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Jost_500Medium, Jost_400Regular,Jost_700Bold } from '@expo-google-fonts/jost';

const Home = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({Jost_400Regular,Jost_500Medium,Jost_700Bold});
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
          <View style={styles.container}>
                    
            <View style={styles.top}>
              <Logo/>
            </View>
            
            <View style={styles.bottom}>


              
            </View>
            <View style={styles.box}>
              <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('Main')
              }}>
                  <Text style={styles.responsiveText}> INICIAR </Text>
                </TouchableOpacity>
            </View>
           
          </View>
        </SafeAreaView>
    )


}

export default Home;