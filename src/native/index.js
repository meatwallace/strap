import 'babel-polyfill';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Exponent, { Components, Font } from 'exponent';
import { View } from '@shoutem/ui';
import App from './components/App';
import Welcome from './components/Welcome';

console.disableYellowBox = true;

const { AppLoading } = Components;

class Root extends Component {
  state = {
    fontsLoaded: false,
    profile: undefined,
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

      // new since Exponent 14
      Rubik: require('../../assets/fonts/Rubik-Light.ttf'),
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    const { fontsLoaded, profile } = this.state;

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    return (
      <NativeRouter>
        <View styleName="vertical flexible">
          <StatusBar
            backgroundColor="blue"
            barStyle="dark-content"
          />
          { profile ?
            <App /> :
            <Welcome /> }
        </View>
      </NativeRouter>
    );
  }
}

Exponent.registerRootComponent(Root);
