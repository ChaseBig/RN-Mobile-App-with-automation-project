import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
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
      <ScrollView >
        <View >
          {/* <KnockAppImage /> */}
          <View style={{ flex: 1, alignItems: 'stretch'}}>
            <View style={{height: 90, backgroundColor: '#2196F3'}}>
              <Text testID="kitchenHeader" style={styles.header}>
                Kitchen
              </Text>
            </View>
          </View>
          <RoomLayout />
            <Text style={styles.wallText}>Walls / Paint</Text>
          <Condition />
          <Divider styleName='line' style={{marginTop: 30}}/>
            <Text style={styles.ceilingText}>Ceiling</Text>
            <Text testID="selectedCeilingType" >
              {this.state.ceilingType}
            </Text>
          <CeilingType onPress={this.onButtonPress} />
          <Condition style={styles.ceCondition}/>
          <Divider styleName='line' style={{marginTop: 30}}/>
            <Text style={styles.flooringText}>Flooring</Text>
            <Text testID="selectedFlooringType" >
              {this.state.flooringType}
            </Text>
          <FlooringType onPress={this.onButtonPress} />
          <Condition />
          <Divider styleName='line' style={{marginTop: 20}}/>
        </View>
      </ScrollView>
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
      top: 60,
      textAlign: 'center',
      fontWeight: 'bold'
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
  ceCondition: {
    marginTop: 35
  },
  flCondition: {
    marginTop: -20,
  }
});