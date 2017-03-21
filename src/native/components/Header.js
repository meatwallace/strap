import React from 'react';
import { View, Text } from 'react-native';
import variables from '@common/styles/variables';

const { primary } = variables;

const styles = {
  container: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: primary,
    justifyContent: 'center',
    maxHeight: 64,
    minHeight: 64,
    padding: 10,
  },
};

const Header = () => (
  <View style={styles.container}>
    <Text>Title</Text>
  </View>
);

export default Header;
