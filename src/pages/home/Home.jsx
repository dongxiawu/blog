import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  // 渲染
  render() {
    return (
      <div style={styles.divStyle}>123</div>
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
