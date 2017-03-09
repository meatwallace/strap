import { Component, PropTypes } from 'react';
import ApolloClient from 'apollo-client';
import { AsyncStorage } from 'react-native';

class LogOut extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static propTypes = {
    client: PropTypes.instanceOf(ApolloClient).isRequired,
  }

  async componentWillMount() {
    const { router } = this.context;
    const { client } = this.props;

    // Wipe Apollo's cache
    await client.resetStore();

    await AsyncStorage.removeItem('token');

    router.push('/login');
  }

  render() {
    return null;
  }
}

export default LogOut;
