import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Sidebar.css';

class Sidebar extends Component {

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
        <div className="sidebar-toggle">
          <span className="sidebar-toggle-line sidebar-toggle-line-first"/>
          <span className="sidebar-toggle-line sidebar-toggle-line-middle" />
          <span className="sidebar-toggle-line sidebar-toggle-line-last" />
        </div>
        <aside className={`sidebar ${display ? "sidebar-appear" : "sidebar-disappear"}`} />
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

export default Sidebar;
