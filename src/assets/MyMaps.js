// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';

// const App = () => {
//   const initialRegion = {
//     latitude: 37.78867,
//     longitude: -122.4387,
//     latitudeDelta: 0.0934,
//     longitudeDelta: 0.0432,
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//       provider={PROVIDER_GOOGLE}
//       mapType='standard'
//         style={styles.map}
//         initialRegion={initialRegion}
//         showsMyLocationButton={true}
//       >
//         <Marker
//         draggable={true}
//           coordinate={{ latitude: 37.78843, longitude: -122.4378 }}
//           onDragEnd={(e) => ({ x: e.nativeEvent.coordinate })}
//           title="Mark Zingerueger"
//           description="Ye zukr ka house hai yahan ajao"
        
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default App;


import { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity,Text, Animated,Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Streetview1 from './Streetview1';


Geocoder.init("AIzaSyC_lmvE589o2GzQiZmlMpETebPlOx0dr2Q");
export default function MyMaps({navigation}) {
    const mapRef = useRef(null)
    const translateY = useRef(new Animated.Value(0)).current;
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const searchLocation = (data, details) => {
        const { description } = details;
        setQuery(description); 
        Geocoder.from(description)
            .then(json => {
                const { lat, lng } = json.results[0].geometry.location;
                setSelectedLocation({ latitude: lat, longitude: lng });
                animateToLocation({ latitude: lat, longitude: lng });
            })
            .catch(error => console.warn(error));
    };
    const animateToLocation = (location) => {
        if (mapRef.current) {
            const newRegion = {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            };
            mapRef.current.animateToRegion(newRegion, 2000);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.autocompleteContainer}>

                <GooglePlacesAutocomplete
                
                      styles={{
                        
                            container: {
                              flex: 1,
                            },
                            textInputContainer: {
                              flexDirection: 'row',
                            },
                            textInput: {
                              backgroundColor: 'black',
                              height: 44,
                              borderRadius: 5,
                              paddingVertical: 5,
                              paddingHorizontal: 10,
                              fontSize: 15,
                              flex: 1,
                              color:'whitesmoke'
                            },
                            poweredContainer: {
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                              borderBottomRightRadius: 5,
                              borderBottomLeftRadius: 5,
                              borderColor: '#c8c7cc',
                              borderTopWidth: 0.5,
                            },
                            powered: {},
                            listView: {
                            },
                            row: {
                              backgroundColor: 'yellowgreen',
                              padding: 13,
                              height: 44,
                              flexDirection: 'row',
                              borderRadius:20,
                              color:'black'
                             
                            },
                            separator: {
                              height: 0.5,
                              backgroundColor: 'yellow',
                            },
                            description: {
                                color:'whitesmoke'
                            },
                            loader: {
                              flexDirection: 'row',
                              justifyContent: 'flex-end',
                              height: 20,
                            },
                    
                    }}
                    placeholder='Your location is here...'
                    // onPress={(data, details = null) => {
                    //     // 'details' is provided when fetchDetails = true
                    //     console.log(data, details);
                    // }}
                    onPress={searchLocation}
                    query={{
                        key: 'AIzaSyC_lmvE589o2GzQiZmlMpETebPlOx0dr2Q',
                        language: 'en',
                    }}
                />
            </View>
            <Animated.View style={[styles.mapContainer, { transform: [{ translateY }] }]}>
            <MapView
                 ref={mapRef}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={[styles.map]}
                mapType='hybrid'
                region={{
                    latitude: selectedLocation ? selectedLocation.latitude : 37.78825,
                    longitude: selectedLocation ? selectedLocation.longitude : -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}

            >
                {/* {selectedLocation && (
                    <TouchableOpacity onPress={cancelSearch} style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                )} */}
                {selectedLocation && (
                    <Marker  
                    draggable={true}
                        // key={index}
                        onPress={() =>{
                            navigation.navigate('Streetview1', { latitude: selectedLocation.latitude, longitude: selectedLocation.longitude });
                        }}
                        coordinate={selectedLocation}
                        onDragEnd={(e) => ({ x: e.nativeEvent.coordinate })}
                        title={query}
            description={`Latitude: ${selectedLocation.latitude}, Longitude: ${selectedLocation.longitude}`}
    >
    

        </Marker>

                )
                }
            </MapView>
            </Animated.View>
            
        </View>
    )
};




const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        width: "100%",
        height: "100%"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        zIndex:0
    },
    autocompleteContainer: {

        height: 200,
        width: '80%',
        alignSelf: 'center',
        flex: 1,
        position: 'absolute',
        top: 0,
        zIndex: 1,
        top: 10,
        borderRadius: 50

    },
    cancelButton: {
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    cancelButtonText: {
        color: 'white',
    },
    mapContainer: {
        flex: 1,
        zIndex: 0,
    },
});