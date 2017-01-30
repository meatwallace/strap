import { connect } from 'react-redux';
import { navigate } from '../reducers/routing';
import App from '../components/App';

const mapStateToProps = (state) => {
  const routing = state.get('routing').toJS();

  return {
    location: routing.location,
    action: routing.action,
  };
};

const mapDispatchToProps = { navigate };

export default connect(mapStateToProps, mapDispatchToProps)(App);
