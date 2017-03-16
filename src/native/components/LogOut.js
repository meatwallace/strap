import { Component, PropTypes } from 'react';
import ApolloClient from 'apollo-client';
import { AsyncStorage } from 'react-native';

class LogOut extends Component {
  static propTypes = {
    client: PropTypes.instanceOf(ApolloClient).isRequired,
    history: PropTypes.object.isRequired,
  }

  async componentWillMount() {
    const { client, history } = this.props;

    // Wipe Apollo's cache
    await client.resetStore();

    await AsyncStorage.removeItem('token');

    history.push('/login');
  }

  render() {
    return null;
  }
}

export default LogOut;
