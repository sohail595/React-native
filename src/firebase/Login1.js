import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const login = () => {
       
        if (email && password) {
            // Check if both email and password are provided.
            auth()
                .signInWithEmailAndPassword(email, password) // Attempt to sign in with provided email and password.
                .then((user) => {
                    const person = firebase.auth().currentUser

                    // If successful, a user object is returned.
                    // console.log("USER REGISTERED ==>>>", JSON.stringify(user?.uid));
                    // Alert.alert("USER LOGGED IN", user?.uid);
                    console.log(JSON.stringify(person.uid))
                    Alert.alert('show message', person.uid)
                    navigation.navigate('Welcome')

                })
                .catch((error) => {
                    // If there's an error during the login attempt.
                    console.log("ERROR", error);

                    if (error.code === "auth/user-not-found") {
                        Alert.alert("User not found. Please register.");
                    } else if (error.code === "auth/wrong-password") {
                        Alert.alert("Wrong password. Please try again.");
                    } else {
                        Alert.alert("An error occurred. Please try again later.");
                    }
                });
        } else {
            // If either email or password is empty.
            Alert.alert("email or password is empty");
        }
    }

  
    const onGoogleButtonPress= async ()=> {
        try{

            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
          
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
        }
        catch(errors){
            errors
        }
      }

    return (
        <View style={styles.container}>
            {/* <Text>{userId}</Text> */}
            <Image style={styles.image} source={require("../images/295128.png")} />

            {/* <StatusBar style="auto" /> */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}

                />
            </View>

            <TouchableOpacity >
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Login</Text>
            </TouchableOpacity>
            {/* ye remove krna ha */}
            {/* <TouchableOpacity style={styles.loginBtn}
     onPress={()=>
      {Login1(email,password)}}>
      <Text style={styles.loginText}>LOGIN</Text>
     
    </TouchableOpacity> */}


            {/* 
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.loginBtn}  onPress={login} >
                <Text style={styles.loginText}>Log in 👊</Text>
                {/* onPress={() => navigation.navigate('Register')} */}
               
            </TouchableOpacity>
            <GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={ 
    onGoogleButtonPress }
//   disabled={this.state.isSigninInProgress}
/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 50,
        height: 200,
        width: 200
    },

    inputView: {
        backgroundColor: "lightgreen",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        top: 10,
        alignItems: 'center',
        height: 20,
        // position: 'absolute',
        justifyContent: 'center',
        marginBottom: 30,
        // padding: 
    },

    loginBtn: {
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "brown",
    },
    loginText: {
        color: "#fff",
        fontWeight: 'bold'
    }
});