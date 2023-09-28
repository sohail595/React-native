import { StyleSheet, Text, View, Button, TouchableOpacity,} from 'react-native'
import React from 'react'

const Login = (props) => {
    return (
      <View style={{flex:1,backgroundColor:'yellowgreen', height:50, justifyContent:'center',}}>
        <Text style={{color:'white', textAlign:'center', fontSize:30 }}>
           this is login page
        </Text>
        <Button style={{}}
        title='Go to Home page'
         onPress = {() => props.navigation.navigate('Home Screen')} />
         <Button style={{}}
        title='Go to incremnet'
         onPress = {() => props.navigation.navigate('Increment')} />
         <TouchableOpacity onPress = {() => props.navigation.navigate('Falt List')}>
        <Text style={{color:'white', textAlign:'center', fontSize:30 }}>
            GO to faltlist
        </Text>
        </TouchableOpacity>
      </View>

    )
  }

export default Login

const styles = StyleSheet.create({})