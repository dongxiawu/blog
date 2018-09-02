import React, {Component, PropTypes} from 'react';

import Header from '../../components/header/Header';

import Footer from '../../components/footer/Footer.jsx';

import Upload from '../uploadFile/UploadFile.jsx';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  // render() {
  //   return (
  //     <div>
  //       <div>1234</div>
  //       <Upload/>
  //     </div>
  //   );
  // }
  // 渲染
  render() {
    return (
      <div>
        <div>1234</div>
        <Upload/>
      </div>
    );
  }
}

export default Home;
