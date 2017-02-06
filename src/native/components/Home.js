import React from 'react';
import { StatusBar } from 'react-native';
import { Image, Subtitle, Text, View } from '@shoutem/ui';

const Home = () => (
  <View styleName="flexible vertical v-center h-center">
    <Image
      source={require('../../../assets/images/logo.png')}
    />
    <Subtitle styleName="md-gutter">
      Universal Javascript MVP Boilerplate
    </Subtitle>
    <Text styleName="h-center">
      A universal boilerplate project for Javascript flavored MVP style development,
      with a focus on integrating modern tooling for maximum productivity.
    </Text>
    <StatusBar barStyle="default" hidden={false} />
  </View>
);

Home.propTypes = {};

export default Home;
