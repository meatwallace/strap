import React, { PropTypes } from 'react';
import { View } from 'native-base';

const styles = {
  container: {
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
