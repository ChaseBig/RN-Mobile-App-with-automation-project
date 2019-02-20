// placeholder file
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const ceilingType = {
    Flat: 'Flat',
    Spackled: 'Spackled',
    Popcorn: 'Popcorn',
    Other: 'Other'
}

export class CeilingType extends Component {
    constructor(props){
        super(props)
        this.state = {
            ceilingType
        }
    }
    render() {
        return (
            <View style={styles.buttonGroup} >
                <TouchableOpacity testID='ceilingTypeSelection' onPress={() => this.setState({ceilingType: ceilingType.Flat})}>
                    <Text style={this.state.ceilingType === (ceilingType.Flat) ? styles.btnActive : styles.btnInactive}>{ceilingType.Flat}</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='ceilingTypeSelection' onPress={() => this.setState({ceilingType: ceilingType.Spackled})}>
                    <Text style={this.state.ceilingType === (ceilingType.Spackled) ? styles.btnActive : styles.btnInactive}>{ceilingType.Spackled}</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='ceilingTypeSelection' onPress={() => this.setState({ceilingType: ceilingType.Popcorn})}>
                    <Text style={this.state.ceilingType === (ceilingType.Popcorn) ? styles.btnActive : styles.btnInactive}>{ceilingType.Popcorn}</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='ceilingTypeSelection' onPress={() => this.setState({ceilingType: ceilingType.Other})}>
                    <Text style={this.state.ceilingType === (ceilingType.Other) ? styles.btnActive : styles.btnInactive}>{ceilingType.Other}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    buttonGroup: {
        lineHeight: 13,
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: -18,
        paddingBottom: 15
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
        marginRight: 8,
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