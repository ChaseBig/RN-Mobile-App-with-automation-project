import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CommentsLauncher } from './CommentsLauncher';
import { CameraLauncher } from './CameraLauncher';

const roomItemCondition = {
    Fix: 'Fix',
    Poor: 'Poor',
    Average: 'Average',
    Good: 'Good',
    Excellent: 'Excellent'
}

export class Condition extends Component {
    constructor(props){
        super(props)
        this.onCameraLaunchButtonPress = this.onCameraLaunchButtonPress.bind(this);
        this.onCommentsButtonPress = this.onCommentsButtonPress.bind(this);
        this.state = {
            isShowingNativeCamera: false,
            isShowingCommentsModal: false,
            roomItemCondition
        }
    }
    render() {
        return (
            <View>
                <View style={styles.buttonGroup} >
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ roomItemCondition: roomItemCondition.Fix })}>
                        <View style={styles.fixIcon}>
                            <FontAwesome
                                name='exclamation-circle'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Fix) ? styles.alertBtnActive : styles.btnInactive}
                            />
                            <Text style={{flexWrap: 'wrap', flexDirection: 'column', fontSize:11}}>{roomItemCondition.Fix}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({roomItemCondition: roomItemCondition.Poor})}>
                        <View style={styles.icons}>
                            <FontAwesome
                                name='frown-o'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Poor) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{fontSize:11}}>{roomItemCondition.Poor}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({roomItemCondition: roomItemCondition.Average})}>
                        <View style={styles.icons}>
                            <FontAwesome
                                name='meh-o'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Average) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{fontSize:11}}>{roomItemCondition.Average}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ roomItemCondition: roomItemCondition.Good })}>
                        <View style={styles.icons}>
                            <FontAwesome
                                name='smile-o'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Good) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{fontSize:11}}>{roomItemCondition.Good}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ roomItemCondition: roomItemCondition.Excellent })}>
                        <View style={styles.icons}>
                            <FontAwesome
                                name='smile-o'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Excellent) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{fontSize: 11}}>{roomItemCondition.Excellent}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.launcherIcons}>
                        <CameraLauncher  onPress={this.onCameraLaunchButtonPress} />
                        <CommentsLauncher onPress={this.onCommentsButtonPress} />
                    </View>
                </View>
            </View>
        );
    }

    onCameraLaunchButtonPress(isShowingNativeCamera){
        this.setState({
          isShowingNativeCamera: true
        });
      }
    
    onCommentsButtonPress(isShowingCommentsModal){
        this.setState({
            isShowingCommentsModal: true
        });
      }
    }

const styles = StyleSheet.create({
    buttonGroup: {
        lineHeight: 13,
        flexDirection: 'row',
        marginTop: 15,
        flexWrap: 'wrap',
        marginLeft: 20,
        paddingTop: 15
    },
    icons: {
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 11,
        paddingLeft: 15
    },
    fixIcon: {
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 11,
        paddingRight: 15
    },
    launcherIcons: {
        flexDirection: 'column',
        paddingLeft: 47,
        marginTop: -15
    },
    btnActive: {
        color: 'green'
    },
    alertBtnActive: {
        color: 'red'
    },
    btnInactive: {
        color: '#B5B5B5'
    }
});