import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import login from './login';
import Home from './Home';
import Increment from '../Screen/Increment';
import  Flatlist from '../Screen/Flatlist';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './login';
// import Drawnav from './Drawnav';
import Bottomnav from './Bottomnav';
import Drawnav from './Drawnav';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Topnav = () => {
    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 10,  color:'white', },
      tabBarItemStyle: { width: 90, },
      tabBarStyle:{
        // position:'absolute',
        // top:10,
        marginTop:10,
        maxHeight:90,
        // paddingTop:10,
        // borderRadius:10,
        borderTopEndRadius:20,
        borderBottomLeftRadius:20,
        backgroundColor:'white',
        // Fontsize:30
        backgroundColor:'black',
       
      },
      
    }} 
    >
   <Tab.Screen  name='Log In' component={Login} 
   options={{
    tabBarLabel: 'Log in',
    tabBarIcon: ({ color, size,}) => (
      <Icon name="user" color='red' size={30} />
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
     <Tab.Screen name='Falt List' component={Bottomnav}
     options={{
      tabBarLabel: 'Falt List',
      tabBarIcon: ({ color, size }) => (
        <Icon name="th-list" color='brown' size={30} />
      ),
    }}  />

     
     </Tab.Navigator>
  )
}

export default Topnav

const styles = StyleSheet.create({})