import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './components/header';
import Sidebar from '../../components/sidebar';

import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  componentDidMount() {

  }
  // 渲染
  render() {
    const { display } = this.state;
    return (
      <div>
        <Header/>
        <Sidebar/>
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
