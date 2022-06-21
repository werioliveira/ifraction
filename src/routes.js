import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home/Home'
import Main from './pages/Main/Main'
import Solution from './pages/Solution/Solution'

const Stack = createNativeStackNavigator()

const Routes = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Solution'>
                <Stack.Screen options={{headerShown: false}}
                name="Home" component={Home}
                />
                <Stack.Screen options={{headerShown: false}}
                name="Main" component={Main}
                />
                <Stack.Screen options={{headerShown: false}}
                name="Solution" component={Solution}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes