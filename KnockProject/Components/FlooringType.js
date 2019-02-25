// placeholder file
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const flooringType = {
    Hardwood: 'Hardwood',
    Tile: 'Tile',
    Carpet: 'Carpet',
    Vinyl: 'Vinyl',
    Laminate: 'Laminate',
    Other: 'Other'
}

export class FlooringType extends Component {
    constructor(props){
        super(props)
        this.state = {
            flooringType
        }
    }
    render() {
        return (
            <View style={styles.buttonGroup} >
                <TouchableOpacity testID='flooringTypeHardwood' onPress={() => this.setState({flooringType: flooringType.Hardwood})}>
                    <Text style={this.state.flooringType === (flooringType.Hardwood) ? styles.btnActive : styles.btnInactive}>{flooringType.Hardwood}</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='flooringTypeTile' onPress={() => this.setState({flooringType: flooringType.Tile})}>
                    <Text style={this.state.flooringType === (flooringType.Tile) ? styles.btnActive : styles.btnInactive}>{flooringType.Tile}</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='flooringTypeCarpet' onPress={() => this.setState({flooringType: flooringType.Carpet})}>
                    <Text style={this.state.flooringType === (flooringType.Carpet) ? styles.btnActive : styles.btnInactive}>{flooringType.Carpet}</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='flooringTypeVinyl' onPress={() => this.setState({flooringType: flooringType.Vinyl})}>
                    <Text style={this.state.flooringType === (flooringType.Vinyl) ? styles.btnActive : styles.btnInactive}>{flooringType.Vinyl}</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='flooringTypeLaminate' onPress={() => this.setState({flooringType: flooringType.Laminate})}>
                    <Text style={this.state.flooringType === (flooringType.Laminate) ? styles.btnActive : styles.btnInactive}>{flooringType.Laminate}</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='flooringTypeOther' onPress={() => this.setState({flooringType: flooringType.Other})}>
                    <Text style={this.state.flooringType === (flooringType.Other) ? styles.btnActive : styles.btnInactive}>{flooringType.Other}</Text>
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
        paddingBottom: 15,
        flexWrap: 'wrap'
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
        marginRight: 9,
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
        marginRight: 9,
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
        padding: 6
    }
});