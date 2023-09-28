import { Alert, StyleSheet, Text, View,Button, } from 'react-native'
import React,{useState} from 'react'


const Increment = () => {
    const [counter,setCounter]=useState(0);
     const Plus = ()=> { 
        
        setCounter(prev => prev+1);
     }
     const Minus = ()=> { 
        
        setCounter(counter-1);
     }
     const Zero = ()=> { 
        
        setCounter(prev=> prev=0);
     }
  return (
    <View style={styles.container}>
    <View style={styles.txtdiv}>
      <Text style={{color:'black',textAlign:'center',marginTop:10}}> This is testing for incremnet</Text>

     

      
    </View>
    <View style={styles.btndiv}>
        <Text style={{fontSize:100,color:'black', marginLeft:100, }}> {counter}</Text>
    <Button
      title='press to Decrement'
      color="yellowgreen"
      onPress={Plus }
      />
      <Button
      title='press For Zero'
      color="yellowgreen"
      
      onPress={ Zero }
      />
      <Button
      title='press to increment'
      color="yellowgreen"
      
      onPress={Minus  }
      />
      
    </View>
    </View>
  )
}

export default Increment

const styles = StyleSheet.create({
   container:{
     backgroundColor: "lightgray",
     flex:1,
   },

   txtdiv:{
    height:50,
    margin:40,
    backgroundColor:"lightblue"
    },

   btndiv:{
    position:'relative',
    top:200,
    margin:20,
   }

})