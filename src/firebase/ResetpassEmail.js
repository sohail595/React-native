import React, {FC, ReactElement, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth'

// export  default UserResetPassword = () => {
  

//   // Your state variable
//   const [email, setEmail] = useState('');

//   const doUserPasswordReset = async function (navigation) {
//     // Note that this value come from state variables linked to your text input
//     const emailValue = email;
//     return await auth().User.requestPasswordReset(emailValue)
//       .then(() => {
//         // logIn returns the corresponding ParseUser object
//         Alert.alert(
//           'Success!',
//           `Please check ${email} to proceed with password reset.`,
//         );
//         // Redirect user to your login screen
//         navigation.navigate('Login');
//         return true;
//       })
//       .catch((error) => {
//         // Error can be caused by lack of Internet connection
//         Alert.alert('Error!', error.message);
//         return false;
//       });
//   };

const PasswordResetScreen = () => {
    const [email, setEmail] = useState('');
    const [resetSent, setResetSent] = useState(false);
  
    const handleResetPassword = async () => {
      try {
        await auth().sendPasswordResetEmail(email);
        setResetSent(true);
      } catch (error) {
        console.error('Error sending password reset email:', error);
      }
    };

  return (
    <View style={styles.login_wrapper}>
      <View style={styles.form}>
        <Text>{'Please enter your account email to reset your password:'}</Text>
        <TextInput
          style={styles.form_input}
          value={email}
          placeholder={'Your account email'}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TouchableOpacity onPress={() => handleResetPassword()}>
          <View style={styles.button}>
            <Text style={styles.button_label}>
            {resetSent && <Text>Password reset email sent!</Text>}{'Request password reset'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    login_wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
    },
    form: {
      fontSize: 28,
      marginBottom: 10,
      color: '#ff4500',
      fontFamily: 'Poppins-BoldItalic',
    },
    form_input: {
      width: '80%',
      fontSize: 16,
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginBottom: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 5,
      color: '#fff',
    },
    button: {
      backgroundColor: 'yellowgreen',
      paddingVertical: 15,
      paddingHorizontal: 60,
      borderRadius: 5,
    },
    button_label: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default PasswordResetScreen