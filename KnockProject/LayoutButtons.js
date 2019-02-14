import React, { Component } from 'react';
// import CameraRollPicker from 'react-native-camera-roll-picker';
import { View, Text, Button } from 'react-native';
import { SavedPhotosLauncher } from './SavedPhotosLauncher';
import { CommentsLauncher } from './CommentsLauncher';
import { FloorLevel } from './FloorLevel';


export class LayoutButtons extends Component {
  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onCommentsButtonPress = this.onCommentsButtonPress.bind(this);
    this.onPhotosButtonPress = this.onPhotosButtonPress.bind(this);
    this.state = {
      isShowingSavedPhotos: false,
      isShowingCommentsModal: false, 
      floorLevel: null,
    }
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <SavedPhotosLauncher onPress={this.onPhotosButtonPress} />
          <CommentsLauncher onPress={this.onCommentsButtonPress} />
        </View>
          <Text testID="selectedFloorLevel" >
            {this.state.floorLevel}
          </Text>
          <FloorLevel onPress={this.onButtonPress} />
      </View>
    );
  }

  onButtonPress(floorLevel){
    this.setState({
        floorLevel
    });
  }

  onCommentsButtonPress(isShowingCommentsModal){
    this.setState({
        isShowingCommentsModal: true
    });
  }

  onPhotosButtonPress(isShowingSavedPhotos){
    this.setState({
        isShowingSavedPhotos: true
    });
  }
}
