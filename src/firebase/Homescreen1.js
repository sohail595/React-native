import { StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Login from '../assets/login'
import Login1 from '../firebase/Login1'

const Homescreen1 = (props) => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex:1,}}>
      <Text style={{color:'black', fontSize:20, marginBottom:100}}>This is home Screen</Text>
  
    <TouchableOpacity
    
     style={{backgroundColor:"yellowgreen",height:60,width:110, justifyContent:'center', alignItems:'center',borderRadius:10,marginBottom:20 }} >
      <Text style={{color:'white', }}>
        Register
       
          </Text>
          
      </TouchableOpacity>

      <TouchableOpacity  
       onPress = {() => props.navigation.navigate('Log in1')}
      style={{backgroundColor:"purple",height:60,width:110, justifyContent:'center', alignItems:'center',borderRadius:10 }} >
      <Text style={{color:'white', }}>
        Log in
          </Text>
       
      </TouchableOpacity>

      <TouchableOpacity  style={{backgroundColor:"red",height:60,width:110, justifyContent:'center', alignItems:'center',borderRadius:10, marginTop:20 }} >
      <Text style={{color:'white', }}>
        Log Out
          </Text>
       
      </TouchableOpacity>
     </View>
  )
}


export default Homescreen1

const styles = StyleSheet.create({})