import React, { PropTypes } from 'react';
import { View } from 'react-native';
import variables from '@common/styles/variables';

const { accent } = variables;

const styles = {
  container: {
    backgroundColor: accent,
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    paddingTop: 42, // To account for the status bar
  },
};

const FullLayout = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

FullLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
};

FullLayout.defaultProps = {
  children: null,
};

export default FullLayout;
