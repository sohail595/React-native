import { StyleSheet, Text, View,Image, ScrollView, } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <ScrollView style={styles.container} >
    
    <View style={styles.post}>
      <Text style={styles.upname}  > Salam America </Text>
     <Image style={styles.image1} source={{
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png"
     }}
       
     />
      <Text style={styles.text}>Writing blog posts can help an entrepreneur promote a business or help novelists supplement their creative writing. Therefore, the time spent learning how to write a blog post can serve as an investment in your broader career.  </Text>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={{width: "100%", height: 200, marginTop:30,}}
        
      />
      <Text style={styles.txt2}>
      There are many different types of blog, but a good blog often has certain characteristics regardless of its subject matter.
      </Text>
    </View>
    

   
    <View style={styles.post}>
      <Text style={styles.upname}  > Salam America </Text>
     <Image style={styles.image1} source={{
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png"
     }}
       
     />
      <Text style={styles.text}>Writing blog posts can help an entrepreneur promote a business or help novelists supplement their creative writing. Therefore, the time spent learning how to write a blog post can serve as an investment in your broader career.  </Text>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={{width: "100%", height: 200, marginTop:30,}}
        
      />
      <Text style={styles.txt2}>
      There are many different types of blog, but a good blog often has certain characteristics regardless of its subject matter.
      </Text>
    </View>
    
    <View style={styles.post}>
      <Text style={styles.upname}  > Salam America </Text>
     <Image style={styles.image1} source={{
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png"
     }}
       
     />
      <Text style={styles.text}>Writing blog posts can help an entrepreneur promote a business or help novelists supplement their creative writing. Therefore, the time spent learning how to write a blog post can serve as an investment in your broader career.  </Text>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/175695/pexels-photo-175695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={{width: "100%", height: 200, marginTop:30,}}
        
      />
      <Text style={styles.txt2}>
      There are many different types of blog, but a good blog often has certain characteristics regardless of its subject matter.
      </Text>
    </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
container:  {
     flex:1,
     backgroundColor:"darkgrey",
},
post: {
   backgroundColor:"white",
   margin:20,
   borderRadius:20,
},

  text:{
    color:"black",
    marginTop:20,
    margin:10,
  },
  image1:{
    width:"20%",
    height:60,
    marginTop:40,
    borderRadius:10,
    marginLeft:10,
    borderRadius:10,
    borderResize:10,
  },
  txt2:{
    marginTop:20,
    marginBottom:10,
    color:"black",
    fontWeight:"bold",
    margin:10,
  },
  upname:{
    color:"black",
     position:"absolute",
     left:80,
     top:40,
     fontSize:20,

  }
})