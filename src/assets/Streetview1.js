import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StreetView from 'react-native-streetview';


const Streetview1 = (props) => {
  return (
    <View style={styles.container}>
  <StreetView
    style={styles.streetView}
    allGesturesEnabled={true}
    coordinate={{
      'latitude': props.route.params.latitude,
      'longitude': props.route.params.longitude, 
    }}
    pov={{
	tilt:parseFloat(0),
	bearing:parseFloat(0),
	zoom:parseInt(1)
    }}
  />
</View>
  )
}

export default Streetview1

const styles = StyleSheet.create({

        container: {
          flex: 1
        },
        streetView: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      });
