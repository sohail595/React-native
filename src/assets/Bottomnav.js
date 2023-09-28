import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from './login';
import Home from './Home';
import Increment from '../Screen/Increment';
import  Flatlist from '../Screen/Flatlist';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './login';
import Drawnav from './Drawnav';

const Bottomnav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
     
      tabBarStyle:{
        position:'absolute',
        bottom:10,
        height:80,
        margin:10,
        paddingBottom:10,
        // borderRadius:10,
        borderTopEndRadius:20,
        borderBottomLeftRadius:20,
        backgroundColor:'white',
        
      },
      
    }} 
    >
   <Tab.Screen  name='Log In G0' component={Drawnav} 
   options={{
    headerShown:false,
    tabBarLabel: 'Log in',
    tabBarIcon: ({ color, size }) => (
      <Icon name="user" color='red' size={35} />
    ),
  }}
   />
  
     <Tab.Screen name='Home Screen' component={Home} 
     options={{
      tabBarLabel: 'Home Screen',
      tabBarIcon: ({ color, size }) => (
        <Icon name="home" color='yellowgreen' size={30} />
      ),
    }}  />
     <Tab.Screen name='Increment' component={Increment}   
     options={{
      tabBarLabel: 'Increment',
      tabBarIcon: ({ color, size }) => (
        <Icon name="umbrella" color='purple' size={30} />
      ),
    }} />
     <Tab.Screen name='Falt List' component={Flatlist}  
     options={{
      tabBarLabel: 'Falt List',
      tabBarIcon: ({ color, size }) => (
        <Icon name="th-list" color='brown' size={30} />
      ),
    }}  />
     
     
     </Tab.Navigator>
  )
}



export default Bottomnav

const styles = StyleSheet.create({})