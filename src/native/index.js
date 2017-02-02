import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Exponent, { Components, Font } from 'exponent';
import { Title, Subtitle, Text, View } from '@shoutem/ui';

const { AppLoading } = Components;

console.disableYellowBox = true;

class App extends Component {
  state = {
    fontsLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Black': require('../../assets/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('../../assets/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('../../assets/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('../../assets/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('../../assets/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('../../assets/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('../../assets/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('../../assets/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('../../assets/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }

    return (
      <View styleName="flexible md-gutter vertical v-center h-center">
        <Title styleName="sm-gutter-bottom">strap</Title>
        <Subtitle styleName="md-gutter-bottom">
          Universal Javascript MVP Boilerplate
        </Subtitle>
        <Text styleName="h-center">
          A universal boilerplate project for Javascript flavored MVP style development,
          with a focus on integrating modern tooling for maximum productivity.
        </Text>
        <StatusBar barStyle="default" hidden={false} />
      </View>
    );
  }
}

Exponent.registerRootComponent(App);
