import React, { PropTypes } from 'react';
import { Ionicons } from '@exponent/vector-icons';
import { Button, Text } from '@shoutem/ui';

const NavItem = ({ icon, label }) => (
  <Button styleName="stacked clear full-width">
    <Ionicons name={icon} size={28} />
    <Text>{label}</Text>
  </Button>
);

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavItem;
