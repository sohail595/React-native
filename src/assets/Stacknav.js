import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './Home';
import login from './login';
import Increment from '../Screen/Increment';
import  Flatlist from '../Screen/Flatlist';
import MyMaps from './MyMaps';
import Streetview1 from './Streetview1';
import Homescreen1 from '../firebase/Homescreen1';
import Login1 from  '../firebase/Login1'


const Stacknav = () => {
    const Stack = createNativeStackNavigator();
    
  return (
    <Stack.Navigator>
    
      <Stack.Screen name='HOME SCREEN' component={Homescreen1}    />
      <Stack.Screen options={{headerShown:false}} name='Log in1' component={Login1}    />
    {/* <Stack.Screen name='Log In' component={login}    />
      <Stack.Screen name='Home Screen' component={Home}    />
      <Stack.Screen name='Increment' component={Increment}    />
      <Stack.Screen name='Falt List' component={Flatlist}    /> */}
     {/* <Stack.Screen name='MyMaps' component={MyMaps}    />
     <Stack.Screen name='Streetview1' component={Streetview1}    />
      */}
     
    </Stack.Navigator> 
  )
}

export default Stacknav

const styles = StyleSheet.create({})