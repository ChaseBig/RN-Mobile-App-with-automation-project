import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { LayoutButtons } from './LayoutButtons';


export class RoomLayout extends Component {
  render() {
    return (
      <View>
        <Text testID='roomLayoutText' style={styles.room}>
          Room Layout{"\n"}
        </Text>
        <Text testID='infoText' style={styles.infoText}>
          Take photos from opposite corners of the room{"\n"}
        </Text>
        <LayoutButtons />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
      marginTop: 80, 
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
  },
  infoText: {
      marginTop: -10,
      fontWeight: 'normal',
      textAlign: 'center',
      fontSize: 12,
      justifyContent: 'center',
      alignSelf: 'center'
  },
  room: {
      marginTop: 80,
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: 14,
      fontSize: 15
  }
});