import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Modal, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export class CommentsLauncher extends Component {
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

                <TouchableOpacity style={styles.commentsBtn} onPress={() => this.setModalVisible(true)} >
                    <View>
                        <Icon
                            name="commenting"
                            size={22}
                            color='#2196F3'
                        />
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
            height: 400,
            width: 320,
            borderWidth: 1,
            borderRadius: 12,
            textAlign: 'left',
            padding: 10,
            flexWrap: 'wrap'
        },
        commentsBtn: {
            borderColor: '#2196F3',
            height: 40,
            width: 150,
            color: '#2196F3',
            paddingTop: 19,
            paddingLeft: 20
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
