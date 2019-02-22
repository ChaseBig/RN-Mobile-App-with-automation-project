import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ImagePicker, Permissions } from 'expo';


export class SavedPhotosLauncher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoNumber: 0,
        }
    }
    isShowingSavedPhotos = async () => {
        await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        let result = await ImagePicker.launchImageLibraryAsync({

        });
    
        console.log(result);
    
        if (!result.cancelled) {
            this.setState({ photoNumber: this.state.photoNumber + 1});
        }
    };
      
    render() {
        return (
            <TouchableOpacity style={styles.cameraBtn} onPress={this.isShowingSavedPhotos}>
                <View style={{flexDirection: 'row', paddingTop: 6}}>
                    <FontAwesome
                        name="camera"
                        size={22}
                        color='#2196F3'
                        paddingTop={10}
                    />
                    <Text style={{color: '#2196F3', paddingLeft: 5, paddingTop: 3}}> 
                        {this.state.photoNumber} Photos</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
    
    const styles = StyleSheet.create({
        cameraBtn: {
            borderWidth:1,
            borderColor: '#2196F3',
            height: 40,
            width: 150,
            color: '#2196F3',
            marginTop: -4,
            marginLeft: 5,
            alignSelf: 'flex-start',
            alignItems: 'center',
            fontSize: 13,
            textAlign: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#fff',
            borderRadius:12,
            padding: 3,
        },
        btnView: {
            paddingTop: 8,
            flexDirection: 'row'
        }
    });