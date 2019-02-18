import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export class SavedPhotosLauncher extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isShowingSavedPhotos: false,
          photoNumber: 2,
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.cameraBtn} onPress={() => onPress(!isShowingSavedPhotos)}>
                <View style={{flexDirection: 'row', paddingTop: 6}}>
                    <Icon
                        name="camera"
                        size={22}
                        color='#2196F3'
                        paddingTop={10}
                    />
                    <Text style={{color: '#2196F3', paddingLeft: 5, paddingTop: 3}}> {this.state.photoNumber} Photos</Text>
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