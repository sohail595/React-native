import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React,{useState} from "react";
import auth from '@react-native-firebase/auth';


const App = () => {
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  const register = () => {
    if (email && pass) {
        auth().createUserWithEmailAndPassword(email, pass)
        .then((user) => {
            console.log("USER REGISTERED ==>>>", user);
            Alert.alert("USER REGISTERED")
        })
        .catch((error) => {
          console.log("ERROR", error);
          Alert.alert( error.code)
        })
    } else {
      Alert.alert("email or pass empty")
    }
  }

const logout = () => {
  auth().signOut()
  .then(() => {
    Alert.alert("user Logged Out", )
    .catch( (error) => {
      Alert.alert(error.code)
    })
  })
}

const login = () => {
  if (email && pass) {
    auth().signInWithEmailAndPassword(email, pass)
    .then((user) => {
        console.log("USER REGISTERED ==>>>", user);
        Alert.alert("USER LOGGED IN")
    })
    .catch((error) => {
      console.log("ERROR", error);
      Alert.alert( error.code)
    })
} else {
  Alert.alert("email or pass empty")
}
}

React.useEffect(() => {
  const subscribe = auth().onAuthStateChanged((user) => {
      console.log("USER ==>>>", user);
      Alert.alert(JSON.stringify(user?.uid || user))
  })

  return subscribe
},[])


  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor:"#FFFFFF"
    }}>
      <TextInput
        placeholder='email'
        placeholderTextColor={"red"}
        style={{
          borderWidth: 2,
          width: '80%',
          height: 50,
          marginVertical: 10,
          color:"#000000",
          borderRadius:10
        }}
        value={email}
        onChangeText={(txt) => {
          setemail(txt)
        }}
      />

      <TextInput
        placeholder='password'
        placeholderTextColor={"red"}
        style={{
          borderWidth: 2,
          width: '80%',
          height: 50,
          marginVertical: 10,
          color:"#000000",
          borderRadius:10,
        }}
        value={pass}
        onChangeText={(txt) => setpass(txt)}

      />
     <View style={styles.button}>
      <View style={{marginBottom:30, borderRadius:30}}>
      <Button title='REGISTER'  onPress={() => register()}/>
      </View>
      <View style={{marginBottom:30, borderRadius:30}}>
      <Button title='SIGN IN'  onPress={() => login()}/>
      </View>
      <Button title='LOGOUT'  onPress={() => logout()}/>
      </View>

    </View>
  )
};
export default App;

const styles = StyleSheet.create({
    button:{
       padding:30,
       backgroundColor:'black',
       borderRadius:30,
       marginTop:30
      
    }

})