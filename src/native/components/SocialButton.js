import React, { PropTypes } from 'react';
import { Button, Icon, Text } from 'native-base';

const SocialButton = ({ color, icon, signingUp, name, ...rest }) => {
  const styles = {
    button: {
      backgroundColor: color,
      marginBottom: 5,
    },
  };

  return (
    <Button
      full
      iconLeft
      style={styles.button}
      {...rest}
    >
      <Icon name={icon} />
      <Text>
        {`${signingUp ? 'Register' : 'Log in'} with ${name}`}
      </Text>
    </Button>
  );
};

SocialButton.propTypes = {
  color: PropTypes.string,
  signingUp: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

SocialButton.defaultProps = {
  color: '#333',
};

export default SocialButton;
