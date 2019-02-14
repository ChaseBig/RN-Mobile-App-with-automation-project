import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export class CameraLauncher extends Component {
    constructor(props) {
        super(props)
        this.onPress = this.onPress.bind(this);
        this.state = {
          isShowingNativeCamera: false,
        }
    }
    
    render() {
        if (!this.state.isShowingNativeCamera) {
            return false;
        }
        return (
            <Button
                icon={
                    <Icon
                        name="camera"
                        size={15}
                        color="blue"
                    />
                }
                iconLeft
                onPress={() => onPress(isShowingNativeCamera)}
                testID="nativeCameraLauncherBtn"
            />
        );
    }

    onButtonPress(isShowingNativeCamera){
        this.setState({
        isShowingNativeCamera
        });
    }
}