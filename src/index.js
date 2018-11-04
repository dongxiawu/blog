import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

import 'antd/dist/antd.css';

// 整个项目的入口，将 <Home> 渲染到 index.html 模板文件的 id 为 root 的标签下
ReactDOM.render(
  Router,
  document.getElementById("root")
);

if (module.hot) {
}
