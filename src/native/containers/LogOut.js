import { compose, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { trackEvent } from '@common/actions';
import LogOut from '../components/LogOut';

export function mapStateToProps(state, ownProps) {
  return {};
}

const actions = { trackEvent };

const LogOutWithData = compose(
  withApollo,
  withRouter,
  connect(mapStateToProps, actions),
)(LogOut);

export default LogOutWithData;
