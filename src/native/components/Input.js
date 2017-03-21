import React, { PropTypes } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import variables from '@common/styles/variables';

const { light, dark } = variables;

const styles = {
  container: {
    backgroundColor: light,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginBottom: 5,
  },
  touched: {

  },
  error: {

  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: dark,
    flex: 1,
    maxHeight: 22,
    fontSize: 24,
  },
  input: {
    flex: 1,
    padding: 5,
    height: 40,
    fontSize: 14,
  },
}

const Input = ({ style, icon, input, meta, placeholder, ...props }) => {
  const { touched, error } = meta;
  const { value, onChange } = input;
  // TODO: Handle error, touched

  return (
    <View
      style={[
        styles.container,
        touched && styles.touched,
        error && styles.error,
        style
      ]}
    >
      { icon &&
        <View style={styles.iconContainer}>
          <Icon name={icon} style={styles.icon} />
        </View> }
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={text => onChange(text)}
        value={value}
        {...input}
        {...props}
      />
    </View>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

Input.defaultProps = {
  icon: '',
  placeholder: '',
  style: {},
};

export default Input;
