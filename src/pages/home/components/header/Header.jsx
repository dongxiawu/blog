import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    };
  }

  componentDidMount() {

  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Menu.Item key="mail">
            <Icon type="mail" />Navigation One
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />Navigation Two
          </Menu.Item>
          {/*<Menu.Item key="app">*/}
            {/*<Icon type="appstore" />Navigation Three*/}
          {/*</Menu.Item>*/}
        </Menu>
      </div>
    );
  }
}

export default Header;
