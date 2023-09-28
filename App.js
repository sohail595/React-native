import { StyleSheet, Text, View,Button,Alert } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native' 
import Stacknav from './src/assets/Stacknav'
import Bottomnav from './src/assets/Bottomnav'
import Topnav from './src/assets/Topnav'
import Drawnav from './src/assets/Drawnav'
import Asyncstorage from './src/Screen/Asyncstorage'
import Maps from './src/assets/MyMaps'
import Map2 from './src/assets/Map2'
import Homescreen  from './src/firebase/Homescreen1'
import Authwithphn from './src/firebase/Authwithphn'
import Fireauth from './src/firebase/Fireauth'
import ResetpassEmail from './src/firebase/ResetpassEmail'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Pushnotify from './src/firebase/Pushnotify'
const App = () => {
  
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  
  // GoogleSignin.configure({
  //   webClientId: '335741137137-ted5sdu9g1nn0rf6gho45asfhqlug5rq.apps.googleusercontent.com',
  // });
  return (
    // <NavigationContainer>
   
    //    {/* <Stacknav/> */}

    //     {/* <Bottomnav/> */}

    //     {/* <Topnav/> */}
    
    //  {/* <Drawnav/> */}
    //  {/* <Stacknav/> */}
  
     

    //  </NavigationContainer>
  
          // <Asyncstorage/>
          // <Maps/>
    //  <Map2/>
    // <Fireauth/>
    // <Authwithphn/>
    // <ResetpassEmail/>
    <Pushnotify/>
  )
}






export default App

const styles = StyleSheet.create({})



// import {StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Flatlist from './src/Screen/Flatlist'
// import Increment from './src/Screen/Increment'
// import Post from './src/Screen/post'

// const App = () => {
//   return (
//   // <Flatlist/>
 
//     //  <Increment/>

//     <Post/>
//     )
// }


// export default App

// const styles = StyleSheet.create({})