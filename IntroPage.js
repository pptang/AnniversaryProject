import React, { Component, PropTypes } from 'react';
import LocaterComponent from './LocaterComponent.js';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';


export default class IntroPage extends Component {


  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        {/**
          <Text style={styles.welcome}>{storyList[this.state.currentPlaceIndex].title}</Text>
          <Text>{storyList[this.state.currentPlaceIndex].content}</Text>

          **/}

        <LocaterComponent />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCCCC'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#0000ff',
    borderStyle: 'solid',
    borderRadius: 3,
    padding: 10,
  }
});
