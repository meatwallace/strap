import React from 'react';
import { View, Text } from 'native-base';

const styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
};

const Info = props => (
  <View style={styles.container}>
    <Text>Soon</Text>
  </View>
);

Info.propTypes = {};
Info.defaultProps = {};

export default Info;
