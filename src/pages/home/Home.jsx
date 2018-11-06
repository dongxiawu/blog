import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './components/header';

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
        <div>

        </div>
        <aside className={`sidebar ${display ? "sidebar-appear" : "sidebar-disappear"}`}>
        </aside>
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
