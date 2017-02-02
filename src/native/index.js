import Exponent from 'exponent';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    margin: 10,
    textAlign: 'center',
  },
  information: {
    fontSize: 20,
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { title: 'strap' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.state.title}
        </Text>
        <Text style={styles.information}>
          A boilerplate project for MVP style development, with a focus on integrating
        modern tooling for maximum productivity.
        </Text>
      </View>
    );
  }
}

Exponent.registerRootComponent(App);
