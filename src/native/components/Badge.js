import React from 'react';
import { H1, Thumbnail, View } from 'native-base';

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Badge = () => (
  <View style={styles.container}>
    <Thumbnail
      source={require('../../../assets/images/logo.png')}
      square
      size={150}
    />
    <H1>strap</H1>
  </View>
);

Badge.propTypes = {};

export default Badge;
