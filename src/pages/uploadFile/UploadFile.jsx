import React, {PureComponent} from 'react'

class UploadFile extends PureComponent {
  constructor(props) {
    super(props);

    this.changePath = this.changePath.bind(this);
  }


  changePath(e) {
    console.log(e.target.file[0]);
  }

  render() {
    return (
      <div>
        <h4>上传文件</h4>
        <div>
          <label>选择文件</label>
          <input type='file' accept='image/*' onChange={this.changePath}/>
        </div>
      </div>
    );
  }
}

export default UploadFile;
