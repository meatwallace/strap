import React from 'react';
import { View } from 'native-base';
import NavItem from './NavItem';

const NAV_TYPES = {
  home: {
    icon: 'md-home',
    label: 'Home',
    to: '/home',
  },
  todos: {
    icon: 'md-checkmark-circle-outline',
    label: 'Todos',
    to: '/todos',
  },
  info: {
    icon: 'md-information-circle',
    label: 'Info',
    to: '/info',
  },
  logout: {
    icon: 'md-exit',
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
    <NavItem {...NAV_TYPES.todos} />
    <NavItem {...NAV_TYPES.info} />
    <NavItem {...NAV_TYPES.logout} />
  </View>
);

export default Navigation;
