import { Component, PropTypes } from 'react';
import ApolloClient from 'apollo-client';
import { AsyncStorage } from 'react-native';
import EventTypes from '@common/config/eventTypes';

class LogOut extends Component {
  static propTypes = {
    client: PropTypes.instanceOf(ApolloClient).isRequired,
    history: PropTypes.object.isRequired,
  }

  async componentWillMount() {
    const { client, history, trackEvent } = this.props;

    // Wipe Apollo's cache
    await client.resetStore();

    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');

    trackEvent(EventTypes.Track, {
      event: 'Logged Out',
    });

    history.push('/login');
  }

  render() {
    return null;
  }
}

export default LogOut;
