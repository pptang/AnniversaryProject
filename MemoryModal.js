import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Image, StyleSheet } from 'react-native';
import storyList from './StoryList.js';
export default class MemoryModal extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (

        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={ () => { alert("Modal has been closed.")}}

          >

          <View style={{flex: 1, marginTop: 20}}>


            <View style={{flex: 4, backgroundColor: 'steelblue'}}>
              <Image source={storyList[this.props.storyIndex].img} style={{flex: 1, height: 100, width: require('Dimensions').get('window').width, resizeMode: Image.resizeMode.contain}} />
            </View>

            <View style={{flex: 7, backgroundColor: 'skyblue'}}>
              <Text>Description....</Text>
            </View>


            <View style={{flex: 1, backgroundColor: 'blue', flexDirection: 'row'}}>
              <TouchableHighlight onPress={this.props.nextChallenge} style={{flex: 1, backgroundColor: 'green'}}>
                <Text>下一關</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.props.closeModal} style={{flex: 1, backgroundColor: 'red'}}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>





          </View>

        </Modal>


    );
  }

}
