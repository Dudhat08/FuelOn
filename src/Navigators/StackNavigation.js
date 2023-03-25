import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import SignupScreen from '../screens/SignupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import newDemo from '../screens/newDemo';
import BottomNavigation from './BottomNavgation';

 const Stack = createNativeStackNavigator();
const StackNavigation = () => {
   
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
             name='splash'
             component={SplashScreen} 
             options={{headerShown:false}}/>
            <Stack.Screen 
             name = "signUp" 
            component = {SignupScreen}
            options={{headerShown:false}}
            />
              <Stack.Screen 
             name = "new" 
            component = {newDemo}
            options={{headerShown:false}}
            />
              <Stack.Screen 
             name = "Bottam"
            component = {BottomNavigation}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
};



const styles = StyleSheet.create({})
export default StackNavigation;