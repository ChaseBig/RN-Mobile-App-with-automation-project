import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Camera, Permissions } from 'expo';


export class CameraLauncher extends Component {
    constructor(props) {
      super(props);
      this.state = {
        type: Camera.Constants.Type.back,
        isCameraVisible: false
      }
    }
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }
      async accessCamera()
      {
        if (this.state.isCapturing)
        {
            let photo = await this.camera.takePictureAsync();
            this.setState({ isCapturing: false, accessCameraLabel: 'Retake', capturedPhoto: photo.uri});
            console.log(state);
        }
        
        else
        {
              this.setState({ isCapturing: true, accessCameraLabel: 'Camera', capturedPhoto: null});
        }
      };
      render() {
          return (
            <View style={{ flex: 1 }}>
              <Camera 
                style={{ flex: 1 }}
                type={this.state.type}
                visible={this.state.isCameraVisible}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                      });
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      {' '}Flip{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>

                <TouchableOpacity style={styles.cameraBtn} onPress={()=>this.accessCamera()}>
                    <View>
                        <Icon
                            name="camera"
                            size={22}
                            color='#2196F3'
                        />
                        <Text>{this.state.accessCameraLabel}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
          },
          preview: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'
          },
          capture: {
            flex: 0,
            backgroundColor: '#fff',
            borderRadius: 5,
            color: '#000',
            padding: 10,
            margin: 40
          },
        cameraBtn: {
            height: 40,
            width: 150,
            color: '#2196F3',
            paddingLeft: 20
        }
    });