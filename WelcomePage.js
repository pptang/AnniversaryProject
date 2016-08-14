import React, { Component, PropTypes } from 'react';
import IntroPage from './IntroPage.js';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';


export default class WelcomePage extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  buttonClicked() {
    this.props.navigator.push({
      component: IntroPage,
      title: 'IntroPage'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Page</Text>
        <Text>Some wording....</Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor='#ffffff'
          onPress={this.buttonClicked.bind(this)}>
          <View>
            <Text>Start</Text>
          </View>
        </TouchableHighlight>
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
