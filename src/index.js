import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home';

// 整个项目的入口，将 <Home> 渲染到 index.html 模板文件的 id 为 root 的标签下
ReactDOM.render(
  <Home />,
  document.getElementById("root")
);
