import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import login from './login';
import Home from './Home';
import Increment from '../Screen/Increment';
import Flatlist from '../Screen/Flatlist';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './login';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Drawnav = () => {
    return (
        <Drawer.Navigator
            screenOptions={{

                drawerStyle: {
                    // position: 'absolute',
                    // bottom: 10,
                    // height: 10,
                    marginTop: 10,
                    paddingBottom: 10,
                    borderRadius:20,
                    // borderTopEndRadius: 20,
                    // borderBottomLeftRadius: 20,
                    // borderBottomRightRadius: 20,
                    backgroundColor: 'whitesmoke',
                    

                },

            }}
        >
            <Drawer.Screen name='Log In' component={Login}
                options={{

                    drawerLabel: 'Log in',
                    drawerIcon: ({ color, size }) => (
                        <Icon name="user" color='red' size={35} />
                    ),
                }}
                
            />

            <Drawer.Screen name='Home Screen' component={Home}
                options={{
                    tabBarLabel: 'Home Screen',
                    drawerIcon: ({ color, size }) => (
                        <Icon name="home" color='yellowgreen' size={30} />
                    ),
                }} />
            <Drawer.Screen name='Increment' component={Increment}
                options={{
                    tabBarLabel: 'Increment',
                    drawerIcon: ({ color, size }) => (
                        <Icon name="umbrella" color='purple' size={30} />
                    ),
                }} />
            <Drawer.Screen name='Falt List' component={Flatlist}
                options={{
                    tabBarLabel: 'Falt List',
                    drawerIcon: ({ color, size }) => (
                        <Icon name="th-list" color='brown' size={30} />
                    ),
                }} />


        </Drawer.Navigator>
    )
}

export default Drawnav

const styles = StyleSheet.create({})