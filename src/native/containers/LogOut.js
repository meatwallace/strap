import { compose, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-native';
import LogOut from '../components/LogOut';

const LogOutWithData = compose(
  withApollo,
  withRouter,
)(LogOut);

export default LogOutWithData;
