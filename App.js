/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = { url: "https://nanlogical.com/taskrabbit-clone-script"};
  }
  handleClick () {
    Linking.canOpenURL(this.state.url).then(supported => {
      if (supported) {
        Linking.openURL(this.state.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.state.url);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to On Demand Hero!
        </Text>
        <Text style={styles.instructions}>
          This is demo app only...
        </Text>
        <Text style={[styles.instructions, {fontSize:16}]}>
          ( For full app please visit below link. )
        </Text>
        <TouchableOpacity underlayColor="#9073c6" style={{backgroundColor:'#764bc6', elevation:3, borderColor:'#764bc6', borderRadius:5, margin:10, paddingVertical:8, paddingHorizontal:10}} onPress={() => this.handleClick()}>
          <Text style={{paddingVertical:8, paddingHorizontal:10, color:'#fff', fontWeight:'bold', fontSize:18}}>Click Here</Text>
        </TouchableOpacity>
      </View>
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
    color:'#16417a',
    textShadowColor:'#879dba',
    textShadowOffset:{width:2, height:1},
    textShadowRadius:5,
    fontSize:25,
    fontWeight:'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize:18,
    color:'black'
  },
});
