/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import WelcomePage from './WelcomePage.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS
} from 'react-native';



class AnniversaryProject extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: WelcomePage,
          title: 'WelcomePage'
        }}
        style={{flex: 1}}
        />
      /**<View >
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
        <View>
          <Image
            source={require('./img/logo.png')}
            style={{height: 100, height: 80}}
            />
        </View>
      </View> **/
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    textAlign: 'center',
    margin: 10,
    fontSize: 10,
  }
});

AppRegistry.registerComponent('AnniversaryProject', () => AnniversaryProject);
