import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from '../screens/SignupScreen';

import { NavigationContainer } from '@react-navigation/native';
import Main from '../Components/main';
import Screen1 from '../screens/BottamScreen/Screen1';
import Screen2 from '../screens/BottamScreen/Screen2';
import Screen3 from '../screens/BottamScreen/Screen3';
// import Src2 from '../screens/BottamScreen/src2';
// import Src3 from '../screens/BottamScreen/src3';
// import Src4 from '../screens/BottamScreen/src4';
// import Src5 from '../screens/BottamScreen/src5';
// import src1 from '../screens/BottamScreen/src1';
// import src5 from '../screens/BottamScreen/src5';

// import DrawerNavigator from './DrawerNavigator';

const Bottom = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    // <NavigationContainer>
    
  <Bottom.Navigator initialRouteName='Screen1' screenOptions={()=>({headerShown:false})} tabBar={props => <Main {...props}/>}>
    <Bottom.Screen name="Screen1"
     component={Screen1}
    //  options ={{headerShown : false}}
    />
  {/* <Bottom.Navigator> */}
    <Bottom.Screen name="Screen2"
     component={Screen2}
    //  options ={{headerShown : false}}
    />
  {/* <Bottom.Navigator> */}
    <Bottom.Screen name="Screen3"
     component={Screen3}
    //  options ={{headerShown : false}}
    />
  {/* <Bottom.Navigator> */}
    {/* <Bottom.Screen name="src4"
     component={Src4}
    //  options ={{headerShown : false}}
    />
    <Bottom.Screen name="src5"
     component={Src5}
    //  options ={{headerShown : false}}
    /> */}
  </Bottom.Navigator>
  /* </NavigationContainer>  */
  )
}

export default BottomNavigation;