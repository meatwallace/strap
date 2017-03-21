import { Component, PropTypes } from 'react';
import ApolloClient from 'apollo-client';
import { AsyncStorage } from 'react-native';
import EventTypes from '@common/configs/eventTypes';

class LogOut extends Component {
  static propTypes = {
    client: PropTypes.instanceOf(ApolloClient).isRequired,
    history: PropTypes.object.isRequired,
  }

  async componentWillMount() {
    const { client, history, trackEvent } = this.props;

    trackEvent(EventTypes.Track, {
      event: 'Logged Out',
    });
  
    // Wipe Apollo's cache & our storage
    await client.resetStore();  
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');

    history.push('/login');
  }

  render() {
    return null;
  }
}

export default LogOut;
