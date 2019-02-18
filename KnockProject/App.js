import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KnockAppImage } from './Components/KnockAppImage';
import { RoomLayout } from './Components/RoomLayout';
import { Condition } from './Components/Condition';
import { CeilingType } from './Components/CeilingType';
import { FlooringType } from './Components/FlooringType';
import { Divider } from 'react-native-elements';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this);
    this.state = {
      ceilingType: null,
      flooringType: null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <KnockAppImage />
          <Text testID="kitchenHeader" style={styles.header}>
            Kitchen
          </Text>
        <RoomLayout />
          <Text style={styles.wallText}>Walls / Paint</Text>
        <Condition />
        <Divider styleName='line' style={{marginTop: 32}}/>
          <Text style={styles.ceilingText}>Ceiling</Text>
          <Text testID="selectedCeilingType" >
            {this.state.ceilingType}
          </Text>
        <CeilingType onPress={this.onButtonPress} />
        <Condition style={styles.condition}/>
        <Divider styleName='line' style={{marginTop: 30}}/>
          <Text style={styles.flooringText}>Flooring</Text>
          <Text testID="selectedFlooringType" >
            {this.state.flooringType}
          </Text>
        <FlooringType onPress={this.onButtonPress} />
      </View>
    );
  }

  onButtonPress(ceilingType){
    this.setState({
        ceilingType
    });
  }

  onButtonPress(flooringType){
    this.setState({
        flooringType
    });
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff'
  },
  header: {
      color: 'white',
      fontSize: 18,
      top: 55,
      textAlign: 'center'
  },
  wallText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 35,
    marginLeft: 10
  },
  ceilingText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 20,
    marginLeft: 10
  },
  flooringText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 20,
    marginLeft: 10
  },
  condition: {
    marginTop: 35
  }
});