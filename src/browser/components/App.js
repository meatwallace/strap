import React, { PropTypes } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { ConnectedRouter as Router } from 'connected-react-router';
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
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" render={Home} />
          <Route render={() => <Redirect to="/home" />} />
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
