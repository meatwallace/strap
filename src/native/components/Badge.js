import React, { Component, PropTypes } from 'react';
import { Animated } from 'react-native';

class Badge extends Component {
  static propTypes = {
    smallSize: PropTypes.number,
    largeSize: PropTypes.number,
    large: PropTypes.bool,
  }

  static defaultProps = {
    smallSize: 75,
    largeSize: 150,
    large: true,
  }

  state = {
    sizeAnim: new Animated.Value(this.props.large ? this.props.largeSize : this.props.smallSize),
  }

  componentWillReceiveProps(nextProps) {
    const { large, smallSize, largeSize } = this.props;

    if (large !== nextProps.large) {
      Animated.timing(this.state.sizeAnim, { toValue: nextProps.large ? largeSize : smallSize }).start();
    }
  }

  render() {
    return (
      <Animated.Image
        source={require('../../../assets/images/logo.png')}
        style={{ width: this.state.sizeAnim, height: this.state.sizeAnim }}
      />
    )
  }
}

export default Badge;
