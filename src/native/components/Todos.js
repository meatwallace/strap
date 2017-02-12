import React from 'react';
import { View, Text } from 'native-base';

const styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
};

const Todos = props => (
  <View style={styles.container}>
    <Text>Soon</Text>
  </View>
);

Todos.propTypes = {};
Todos.defaultProps = {};

export default Todos;
