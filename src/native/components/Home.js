import React from 'react';
import { H1, H3, Text, View } from 'native-base';
import Badge from './Badge';

const styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
};

const Home = () => (
  <View style={styles.container}>
    <Badge />
    <H1>
      strap
    </H1>
    <H3>
      Universal Javascript MVP Boilerplate
    </H3>
    <Text>
      A universal boilerplate project for Javascript flavored MVP style development,
      with a focus on integrating modern tooling for maximum productivity.
    </Text>
  </View>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
