import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './components/header';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  // 渲染
  render() {
    return (
      <div>
        <Header/>
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
