import React, { PropTypes } from 'react';
import { Text as TextRN } from 'react-native';
import variables from '@common/styles/variables';

const { light: lightColor, dark } = variables;

const styles = {
  text: {
    color: dark,
    fontSize: 14,
  },
  light: {
    color: lightColor,
  }
};

const Text = ({ children, light, style, ...props }) => (
  <TextRN
    style={[
      styles.text,
      light && styles.light,
      style
    ]}
    {...props}
  >
    {children}
  </TextRN>
);

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
  light: PropTypes.bool,
  style: PropTypes.object,
};

Text.defaultProps = {
  children: null,
  light: false,
  style: {},
}

export default Text;