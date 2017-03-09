import React, { PropTypes } from 'react';
import { Thumbnail } from 'native-base';

const Badge = ({ size }) => (
  <Thumbnail
    source={require('../../../assets/images/logo.png')}
    square
    size={size}
  />
);

Badge.propTypes = {
  size: PropTypes.number,
};

Badge.defaultProps = {
  size: 100,
};

export default Badge;
