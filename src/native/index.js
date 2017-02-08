import 'babel-polyfill';
import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { getTheme, StyleProvider, View } from 'native-base';
import Exponent, { Components, Font } from 'exponent';
// import App from './components/App';
import theme from './config/theme';
import Welcome from './components/Welcome';

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
};

console.disableYellowBox = true;

const { AppLoading } = Components;

class Root extends Component {
  state = {
    fontsLoaded: false,
  }

  async componentWillMount() {
    if (Platform.OS === 'ios') {
      await Font.loadAsync({
        SanFrancisco: require('native-base/Fonts/SanFrancisco.ttf'),
        'SanFrancisco-Bold': require('native-base/Fonts/SanFranciscoBold.ttf'),
        'SanFrancisco-Thin': require('native-base/Fonts/SanFranciscoThin.ttf'),
      });
    } else {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        'Roboto-Bold': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }

    this.setState({ fontsLoaded: true });
  }

  render() {
    const { fontsLoaded } = this.state;

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    return (
      <NativeRouter>
        <StyleProvider style={getTheme(theme)}>
          <View style={styles.container}>
            <StatusBar
              backgroundColor="blue"
              barStyle="dark-content"
            />
            <Welcome />
          </View>
        </StyleProvider>
      </NativeRouter>
    );
  }
}

// { profile ?
//   <App /> :
//   <Welcome /> }
Exponent.registerRootComponent(Root);
