import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import UselessTextInput from './TextInput.js'
import FlatListBasics from './ListItem.js'
import DetailsScreen from './Details.js'
import LoginScreen from './Login.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import * as Location from "expo-location";
//import axios from "axios";

function HomeScreen({ route, navigation }) {
  const [location, setLocation] = React.useState();
  const [phone_number, setPhoneNumber] = React.useState(route.params.phone_number);
  console.log(location);
  
  let getBrokenBike = async(latitude, longitude) => {
    console.log(latitude, longitude);
    setLocation({"latitude" : latitude, "longitude" : longitude});
  };

  let getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      getBrokenBike(latitude, longitude);
      console.log(location);
    } catch (error){
      Alert.alert("Can't find you.", "So sad");
    }
  };

  if(location == null)
    getLocation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('BikeList', {
            phone_number: phone_number,
            location: location,
          });
        }}
      />
    </View>
  );
}

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options = {{headerShown : false}}/>
        <Stack.Screen name="BikeList" component={FlatListBasics} />
        <Stack.Screen name="BikeDetails" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default class extends React.Component {
//   state = {
//     isLoading : true
//   };

//   Login = () => {this.setState({isLoading : false})};

//   componentDidMount(){
//     this.Login();
//   }

//   render() {
//     const {isLoading, temp, condition} = this.state;
//     return isLoading ? (<UselessTextInput/>) : (<Menu/>); 
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
