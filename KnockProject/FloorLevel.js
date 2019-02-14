// placeholder file
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const floorLevel = {
    Basement: 'Basement',
    Lower: 'Lower',
    Main: 'Main',
    Upper: 'Upper'
}

export class FloorLevel extends Component {
    constructor(props){
        super(props)
        this.state = {
            floorLevel
        }
    }
    render() {
        return (
            <View style={ styles.container }>
                <Text style={{ flexDirection: 'row', justifyContent: 'flex-end', fontWeight: 'bold'}}>Floor Level</Text>
                    <View style={styles.buttonGroup} >
                        <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ floorLevel: floorLevel.Basement })}>
                            <Text style={this.state.floorLevel === (floorLevel.Basement) ? styles.btnActive : styles.btnInactive}>{floorLevel.Basement}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({floorLevel: floorLevel.Lower})}>
                            <Text style={this.state.floorLevel === (floorLevel.Lower) ? styles.btnActive : styles.btnInactive}>{floorLevel.Lower}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({floorLevel: floorLevel.Main})}>
                            <Text style={this.state.floorLevel === (floorLevel.Main) ? styles.btnActive : styles.btnInactive}>{floorLevel.Main}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity testID='floorLevelSelection' onPress={() => this.setState({ floorLevel: floorLevel.Upper })}>
                            <Text style={this.state.floorLevel === (floorLevel.Upper) ? styles.btnActive : styles.btnInactive}>{floorLevel.Upper}</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5, 
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonGroup: {
        lineHeight: 13,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        flexDirection: 'row',
        marginRight: 0
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
        borderWidth:1,
        borderColor:'#2196F3',
        height: 30,
        marginTop: 19,
        marginRight: 10,
        marginLeft: 6,
        alignSelf: 'center',
        alignItems: 'flex-end',
        color: '#2196F3',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#fff',
        borderRadius:15,
        padding: 6
    },
    btnInactive: {
        borderWidth:1,
        borderColor:'#B5B5B5',
        height: 30,
        marginTop: 19,
        marginRight: 10,
        marginLeft: 6,
        alignSelf: 'center',
        alignItems: 'flex-end',
        color: '#B5B5B5',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'space-around',
        backgroundColor:'#fff',
        borderRadius:15,
        padding: 6,

    }
});