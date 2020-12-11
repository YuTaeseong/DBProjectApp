import React, { Component } from 'react';
import { Button, View, TextInput, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function IsMember()
{
    return 1;
}

function Login(phone_number, navigation)
{
    alert(phone_number);
    if(IsMember())
    {
        navigation.navigate('Home', {"phone_number" : phone_number});
    }
};

export default function LoginScreen({navigation}) {
    const [value, onChangeText] = React.useState('Useless Placeholder');
  
    return (
        <View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <Button
                title="Login"
                onPress={() => Login(value, navigation)}
            />
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });