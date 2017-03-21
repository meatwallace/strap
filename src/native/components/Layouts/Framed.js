import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Header from '../Header';
import Navigation from '../Navigation';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 6,
  },
};

const FramedLayout = ({ children }) => (
  <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      { children }
    </View>
    <Navigation />
  </View>
);

FramedLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
};

FramedLayout.defaultProps = {
  children: null,
};

export default FramedLayout;
