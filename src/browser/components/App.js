import React, { PropTypes } from 'react';
import { Match, Miss, Redirect } from 'react-router';
import Router from 'react-router-addons-controlled/ControlledBrowserRouter';
import DocHead from './DocHead';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import history from '../configs/history';
import styles from './App.css';

const App = ({ action, location, navigate }) => {
  const handleChange = (routeLocation, routeAction) => {
    if (routeAction === 'SYNC') {
      navigate({ location: routeLocation, action });
    } else {
      navigate({ location: routeLocation, action: routeAction });
    }
  };

  return (
    <Router
      history={history}
      location={location}
      action={action}
      onChange={handleChange}
    >
      <div className={styles.container}>
        <DocHead />
        <Header />
        <div className={styles.content}>
          <Match exactly pattern="/" render={() => <Redirect to="/home" />} />
          <Match exactly pattern="/home" render={Home} />
          <Miss render={() => <Redirect to="/home" />} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

App.propTypes = {
  action: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default App;
