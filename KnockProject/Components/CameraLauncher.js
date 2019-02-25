import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Image, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Constants, Camera, FileSystem, Permissions } from 'expo';
import { NativeCamera } from './NativeCamera';


export class CameraLauncher extends Component {
    constructor(props) {
      super(props);
      this.state = {
        type: Camera.Constants.Type.back,
        isCapturing: false
      }
    }

    async accessCamera()
    {
      if (this.state.isCapturing)
      {
          let photo = await this.camera.takePictureAsync();
          this.setState({ isCapturing: false, capturedPhoto: photo.uri});
      }
      else
      {
            this.setState({ isCapturing: true, capturedPhoto: null});
      }
    }
      render() {
        console.log('camera open?', this.state.isCapturing)
        if(this.state.isCapturing === true) {
        return (
                <View>
                  <NativeCamera
                    ref={ref => { this.camera = ref}}
                    type={Camera.Constants.Type.back}
                  />
                </View>
                );
        } else {
          return (
            <View>
              <TouchableOpacity testID="cameraIconLauncherBtn" style={styles.cameraBtn} onPress={()=>this.accessCamera(true)}>
                <View>
                  <FontAwesome
                    name='camera'
                    size={25}
                    color='#2196F3'
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        }
      }
    }

    const styles = StyleSheet.create({
        cameraBtn: {
            color: '#2196F3',
            position: 'relative'
        }
    });