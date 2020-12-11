import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function UselessTextInput({navigation}) {
    const [value, onChangeText] = React.useState('Useless Placeholder');

    console.log(value);
  
    return (
        <View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <Button
                title="Go to Details"
                onPress={() => {}}
            />
        </View>
    );
  };
  