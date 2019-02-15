import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CameraLauncher } from './CameraLauncher';
import { CommentsLauncher } from './CommentsLauncher';

const wallCondition = {
    Fix: 'Fix',
    Poor: 'Poor',
    Average: 'Average',
    Good: 'Good',
    Excellent: 'Excellent'
}

export class WallsAndPaint extends Component {
    constructor(props){
        super(props)
        this.onCameraLaunchButtonPress = this.onCameraLaunchButtonPress.bind(this);
        this.onCommentsButtonPress = this.onCommentsButtonPress.bind(this);
        this.state = {
            wallCondition,
            isCameraVisible: false,
            isShowingCommentsModal: false
        }
    }
    render() {
        return (
            <View style={ styles.container }>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Walls / Paint</Text>
                    <View style={styles.buttonGroup} >
                        <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ wallCondition: wallCondition.Fix })}>
                            <Icon
                                name='medkit'
                                size={35}
                                style={this.state.wallCondition === (wallCondition.Fix) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{marginLeft: 21, fontSize:11}}>{wallCondition.Fix}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({wallCondition: wallCondition.Poor})}>
                            <Icon
                                name='frown-o'
                                size={35}
                                style={this.state.wallCondition === (wallCondition.Poor) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{marginLeft: 22, paddingRight: -10, fontSize:11}}>{wallCondition.Poor}</Text>
                         </TouchableOpacity>
                        <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({wallCondition: wallCondition.Average})}>
                            <Icon
                                name='meh-o'
                                size={35}
                                style={this.state.wallCondition === (wallCondition.Average) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{marginLeft: 15, paddingLeft: 10, fontSize:11}}>{wallCondition.Average}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ wallCondition: wallCondition.Good })}>
                            <Icon
                                name='smile-o'
                                size={35}
                                style={this.state.wallCondition === (wallCondition.Good) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{marginLeft: 11, paddingLeft: 1,fontSize:11}}>{wallCondition.Good}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ wallCondition: wallCondition.Excellent })}>
                            <Icon
                                name='smile-o'
                                size={35}
                                style={this.state.wallCondition === (wallCondition.Excellent) ? styles.btnActive : styles.btnInactive}
                            />
                        <Text style={{marginLeft: 11,fontSize:11}}>{wallCondition.Excellent}</Text>
                        </TouchableOpacity>
                    <View>
                        <CameraLauncher onPress={this.onCameraLaunchButtonPress} />
                        <CommentsLauncher onPress={this.onCommentsButtonPress} />
                    </View>
                </View>
            </View>
        );
    }

onCameraLaunchButtonPress(isCameraVisible){
    this.setState({
        isCameraVisible: true
    });
  }


onCommentsButtonPress(isShowingCommentsModal){
    this.setState({
        isShowingCommentsModal: true
    });
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35, 
        textAlign: 'right',
        marginRight: -100
    },
    buttonGroup: {
        lineHeight: 13,
        flexDirection: 'row',
        marginTop: 32,
        marginLeft: 1
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    btnActive: {
        color: 'green',
        marginLeft: 19,
        marginRight: 3,
        paddingLeft: 0,
        paddingRight: -6
    },
    btnInactive: {
        color: '#B5B5B5',
        marginLeft: 19,
        marginRight: 3,
        paddingLeft: 0,
        paddingRight: -6
    }
});