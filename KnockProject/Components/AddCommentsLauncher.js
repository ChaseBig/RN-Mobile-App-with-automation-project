import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Modal, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export class AddCommentsLauncher extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isShowingCommentsModal: false,
          text: '',
        }
    }
    setModalVisible(visible) {
        this.setState({isShowingCommentsModal: visible});
    }
    render() {
        return (
            <View>
                <Modal
                    animatedType= "slide"
                    transparent={false}
                    presentationStyle='overFullScreen'
                    visible={this.state.isShowingCommentsModal}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 75, padding: 20, alignItems: 'center'}}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.headerText}>Add Comments</Text>
                        <View style={{alignContent: 'center'}}>
                            <TextInput
                            testID="addCommentText"
                            style={styles.modalBox}
                            placeholder="Thoughts on the Kitchen?"
                            onChangeText={(text) => this.setState({text})}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => {
                            this.setModalVisible(!this.state.isShowingCommentsModal);
                            }}>
                            <Text style={styles.doneBtn}>Done</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity testID="addCommentsRoomLayoutButton" style={styles.commentsBtn} onPress={() => this.setModalVisible(true)} >
                    <View style={{flexDirection: 'row', paddingTop: 3}}>
                        <Icon
                            name="commenting"
                            size={22}
                            color='#2196F3'
                            paddingTop={10}
                        />
                        <Text style={{color: '#2196F3', paddingLeft: 10, paddingTop: 3}}>Add Comments</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

    const styles = StyleSheet.create({
        headerText: {
            fontWeight: 'bold', 
            fontSize: 19, 
            color: '#2196F3'
        },
        modalBox: {
            height: 300,
            width: 320,
            borderWidth: 1,
            borderRadius: 12,
            textAlign: 'left',
            padding: 10,
            flexWrap: 'wrap'
        },
        commentsBtn: {
            paddingLeft: 9,
            borderWidth:1,
            borderColor:'#2196F3',
            height: 40,
            width: 150,
            color: '#2196F3',
            marginTop: -4,
            marginLeft: 10,
            marginRight: 4,
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
            fontSize: 13,
            textAlign: 'right',
            justifyContent: 'flex-start',
            backgroundColor:'#fff',
            borderRadius:12,
            padding: 6,
        },
        doneBtn: {
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
    });
