import { compose, withApollo } from 'react-apollo';
import LogOut from '../components/LogOut';

const LogOutWithData = compose(
  withApollo,
)(LogOut);

export default LogOutWithData;
