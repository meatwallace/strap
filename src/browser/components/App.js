import React, { Component, PropTypes } from 'react';
import greet from '../lib/greet';
import styles from './App.css';

export default class App extends Component {
  static defaultProps = {
    name: undefined,
  }

  static propTypes = {
    name: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.container}>
        <span className={styles.greeting}>{greet(this.props.name)}</span>
      </div>
    );
  }
}
