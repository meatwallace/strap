import React, { Component, PropTypes } from 'react';
import { Animated, LayoutAnimation, View } from 'react-native';

const SMALL_SIZE = 75;
const LARGE_SIZE = 150;

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class WelcomeHeader extends Component {
  static propTypes = {
    large: PropTypes.bool,
  }

  static defaultProps = {
    large: true,
  }

  state = {
    sizeAnim: new Animated.Value(this.props.large ? LARGE_SIZE : SMALL_SIZE),
  }

  componentWillReceiveProps(nextProps) {
    const { large } = this.props;

    if (large !== nextProps.large) {
      LayoutAnimation.spring();
      Animated.timing(this.state.sizeAnim, { toValue: nextProps.large ? LARGE_SIZE : SMALL_SIZE }).start();
    }
  }

  render() {
    return (
      <View style={{ ...styles.container, flex: this.props.large ? 3 : 2 }}>
        <Animated.Image
          source={require('../../../assets/images/logo.png')}
          style={{ width: this.state.sizeAnim, height: this.state.sizeAnim }}
        />
      </View>
    )
  }
}

export default WelcomeHeader;
