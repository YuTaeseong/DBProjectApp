import React, { Component } from 'react';
import { Button, View, TextInput, FlatList, StyleSheet, Text } from 'react-native';


function Item({ title, navigation }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Button
            title="Login"
            onPress={() => navigation.navigate('BikeDetails', {
                itemId: title,
                otherParam: 'anything you want here',
              })}
        />
      </View>
    );
}

export default function FlatListBasics({route, navigation}){
    console.log(route.params);
      return (
        <View style={styles.container}>
            <Text>what the fuck</Text>
          <FlatList
            data={[
              { key: 'Devin' },
              { key: 'Dan' },
              { key: 'Dominic' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
            ]}
            renderItem={({ item }) => <Item title = {item.key} navigation = {navigation}/>}
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