import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
// import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';



const Pushnotify = () => {
  const [loading,setLoading] = useState(false);
  useEffect( ()=> {
    requestUserPermission();
    notficationlistner()
  
  }, []);
  
  // useEffect( ()=> {
  //   notficationlistner
    
  
  // }, []);
  
  return (
    <View>
      <Text>kuch bhi</Text>
    </View>
  )
} 

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const notficationlistner= ()=>{

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    navigation.navigate(remoteMessage.data.type);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      setLoading(false);
    });

}

const Getoken =async ()=> {
  await messaging().registerDeviceForRemoteMessages();
const token = await messaging().getToken();
  console.log('this is token  ');
  console.log(token);
  console.log('================>  ');
}

export default Pushnotify

const styles = StyleSheet.create({})