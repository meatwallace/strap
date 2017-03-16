import React, { PropTypes } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import DocHead from './DocHead';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import styles from './App.css';

const App = ({ history }) => (
  <Router history={history}>
    <div className={styles.container}>
      <DocHead />
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
