import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';

// Had you placed index.js in another folder like `./app`, you could instead do your import with this shorthand:
// import ReactApp from './app'

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  
AppRegistry.registerComponent('AwesomeProject', () => gestureHandlerRootHOC(App))

