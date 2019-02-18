import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        this.state = {
            roomItemCondition
        }
    }
    render() {
        return (
            <View style={ styles.container }>
                <View style={styles.buttonGroup} >
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ roomItemCondition: roomItemCondition.Fix })}>
                        <View style={styles.fixIcon}>
                            <Icon
                                name='medkit'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Fix) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{flexWrap: 'wrap', flexDirection: 'column', fontSize:11}}>{roomItemCondition.Fix}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({roomItemCondition: roomItemCondition.Poor})}>
                        <View style={styles.icons}>
                            <Icon
                                name='frown-o'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Poor) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{fontSize:11}}>{roomItemCondition.Poor}</Text>
                        </View>
                        </TouchableOpacity>
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({roomItemCondition: roomItemCondition.Average})}>
                        <View style={styles.icons}>
                            <Icon
                                name='meh-o'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Average) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{fontSize:11}}>{roomItemCondition.Average}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ roomItemCondition: roomItemCondition.Good })}>
                        <View style={styles.icons}>
                            <Icon
                                name='smile-o'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Good) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{fontSize:11}}>{roomItemCondition.Good}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ roomItemCondition: roomItemCondition.Excellent })}>
                        <View style={styles.icons}>
                            <Icon
                                name='smile-o'
                                size={35}
                                style={this.state.roomItemCondition === (roomItemCondition.Excellent) ? styles.btnActive : styles.btnInactive}
                            />
                            <Text style={{fontSize: 11}}>{roomItemCondition.Excellent}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'right',
        marginRight: 70,
    },
    buttonGroup: {
        lineHeight: 13,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        flexWrap: 'wrap'
    },
    icons: {
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 11,
        paddingLeft: 16
    },
    fixIcon: {
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 11,
        paddingRight: 10
    },
    btnActive: {
        color: 'green'
    },
    btnInactive: {
        color: '#B5B5B5'
    }
});