import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { KnockAppImage } from './KnockAppImage';
import { RoomLayout } from './RoomLayout';
import { WallsAndPaint } from './WallsAndPaint';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: '#fff' }}>
        {/* <KnockAppImage style={styles.rectangle}/> */}
          <Text testID="kitchenHeader" style={{fontWeight: 'bold', fontSize: 19, top: 55, color: 'white', alignItems: 'center'}}>
            Kitchen
          </Text>
        <RoomLayout />
        <WallsAndPaint />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  test: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  test2: {
      fontSize: 25,
      marginBottom: 30
  },
  test3: {
      color: 'blue',
      marginBottom: 20
  },
  rectangle: {
    width: 100 * 2,
    height: 100,
    backgroundColor: '#2196F3'
  }
});