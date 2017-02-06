import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NativeRouter, Route, Switch, Redirect } from 'react-router-native';
import { Components, Font } from 'exponent';
import { View, Screen } from '@shoutem/ui';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';

const { AppLoading } = Components;

class App extends Component {
  state = {
    fontsLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Black': require('../../../assets/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('../../../assets/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('../../../assets/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('../../../assets/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('../../../assets/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('../../../assets/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('../../../assets/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('../../../assets/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('../../../assets/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('../../../assets/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('../../../assets/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }

    return (
      <NativeRouter>
        <Screen>
          <Header />
          <View styleName="vertical flexible md-gutter">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route exact path="/home" render={Home} />
              <Route render={() => <Redirect to="/home" />} />
            </Switch>
          </View>
          <Navigation />
          <StatusBar barStyle="default" hidden={false} />
        </Screen>
      </NativeRouter>
    );
  }
}

export default App;
