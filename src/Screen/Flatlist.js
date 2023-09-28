// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'


// const Home = () => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({})

import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

const FlatListDemo = () => {
  const names = [
    {
      index: "1",
      name: "Salman",
      position: "batsman"
    },
    {
      index: "2",
      name: "Baber",
      position: "batsman"
    },
    {
      index: "3",
      name: "haris",
      position: "batsman"
    },
    {
      index: "4",
      name: "Fakhar",
      position: "batsman"
    },
    {
      index: "5",
      name: "Iftikhar",
      position: "batsman"

    },
    {
      index: "6",
      name: "Shdab",
      position: "batsman"
    },
    {
      index: "7",
      name: "Shaheen",
      position: "batsman"
    },
    {
      index: "8",
      name: "Naseem",
      position: "batsman"
    },
    {
      index: "9",
      name: "Tayyab",
      position: "batsman"
    },
    {
      index: "10",
      name: "Saud",
      position: "batsman"
    },
  ];
  return (
    <View style={styles.main}>
      <FlatList style={styles.listStyle}
        //  horizontal
        //  inverted
        showsHorizontalScrollIndicator={false}
        data={names}
        renderItem={({ item }) => {
          return (<>
            <Text style={styles.textStyle}> {item.name}  {item.position}  </Text>
            {/* <Text style={styles.textStyle}> {item.position}  </Text> */}
          </>)
        }}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#35b58c"
  },
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: "#404040",
    margin: 20,
    color: "white",
    borderRadius:20
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default FlatListDemo;
