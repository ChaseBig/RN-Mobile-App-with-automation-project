import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { KnockAppImage } from './Components/KnockAppImage';
import { RoomLayout } from './Components/RoomLayout';
import { Condition } from './Components/Condition';
import { CommentsLauncher } from './Components/CommentsLauncher';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: '#fff' }}>
        <KnockAppImage />
          <Text testID="kitchenHeader" style={styles.header}>
            Kitchen
          </Text>
        <RoomLayout />
        <Condition />
        <CommentsLauncher />
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
  header: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 19,
      top: 55,
      alignItems: 'center'
  }
});