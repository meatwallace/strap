import { Component, PropTypes } from 'react';
import { AsyncStorage } from 'react-native';

class LogOut extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  async componentWillMount() {
    const { router } = this.context;

    await AsyncStorage.removeItem('token');
    // TODO: Clear apollo cache
    router.push('/login');
  }

  render() {
    return null;
  }
}

export default LogOut;
