import React from 'react';
import { Image, View } from '@shoutem/ui';

const Badge = () => (
  <View styleName="md-gutter">
    <Image source={require('../../../assets/images/logo.png')} />
  </View>
);

Badge.propTypes = {};

export default Badge;
