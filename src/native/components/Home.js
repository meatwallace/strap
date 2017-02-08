import React from 'react';
import { H1, H2, Text, View } from 'native-base';
import Badge from './Badge';

const Home = () => (
  <View>
    <Badge />
    <H1>
      strap
    </H1>
    <H2>
      Universal Javascript MVP Boilerplate
    </H2>
    <Text>
      A universal boilerplate project for Javascript flavored MVP style development,
      with a focus on integrating modern tooling for maximum productivity.
    </Text>
  </View>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
