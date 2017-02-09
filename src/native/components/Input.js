import React, { PropTypes } from 'react';
import { Icon, Input as InputNB, Item } from 'native-base';

const Input = ({ styles, icon, input, meta, placeholder, ...props }) => {
  const { touched, error } = meta;

  return (
    <Item
      error={touched && Boolean(error)}
      style={styles.group}
    >
      { icon ? <Icon name={icon} style={styles.icon} /> : null }
      <InputNB
        placeholder={placeholder}
        style={styles.input}
        {...input}
        {...props}
      />
    </Item>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  styles: PropTypes.object,
};

Input.defaultProps = {
  icon: '',
  placeholder: '',
  styles: {
    group: {},
    icon: {},
    input: {},
  },
};

export default Input;
