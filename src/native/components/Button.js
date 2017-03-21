import React, { PropTypes } from 'react';
import { TouchableOpacity, View } from 'react-native';

const styles = {
  button: {
    padding: 10,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}

const Button = ({ children, color, disabled, onPress, full, style, ...props }) => (
  <TouchableOpacity
    style={[
      styles.button,
      full && styles.fullWidth,
      color && { backgroundColor: color },
      style
    ]}
    onPress={onPress}
    disabled={disabled}
    {...props}
  >
    <View style={[
      styles.container,
    ]}>
      {children}
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  full: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  children: null,
  color: null,
  disabled: false,
  onPress: () => {},
  full: false,
  style: {},
}

export default Button;