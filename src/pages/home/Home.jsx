import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoApp from '../../components/todoComponents/TodoApp';

import logoSrc from '../../stylesheets/images/logo.svg';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  // 渲染
  render() {
    return (
      <div style={styles.divStyle}>
        <img alt="logo" src={logoSrc} style={styles.logoStyle}/>
        <TodoApp/>
      </div>
    );
  }
}

const styles = {
  logoStyle: {
    width: '100px',
  },
  divStyle: {
    textAlign: 'center',
  },
};

export default Home;
