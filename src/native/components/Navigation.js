import React from 'react';
import { View } from 'native-base';
import NavItem from './NavItem';

const NAV_TYPES = {
  home: {
    icon: 'md-home',
    label: 'Home',
    to: '/home',
  },
  home2: {
    icon: 'md-home',
    label: 'Home',
    to: '/home',
  },
  home3: {
    icon: 'md-home',
    label: 'Home',
    to: '/home',
  },
  logout: {
    icon: 'md-log-out',
    label: 'Log out',
    to: '/logout',
  },
};

const styles = {
  container: {
    flexDirection: 'row',
    minHeight: 45,
    maxHeight: 45,
  },
};

const Navigation = () => (
  <View style={styles.container}>
    <NavItem {...NAV_TYPES.home} />
    <NavItem {...NAV_TYPES.home2} />
    <NavItem {...NAV_TYPES.home3} />
    <NavItem {...NAV_TYPES.logout} />
  </View>
);

export default Navigation;
