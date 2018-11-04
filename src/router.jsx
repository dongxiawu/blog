import React from 'react';
import { HashRouter as Router, Route, Link, browserHistory } from 'react-router-dom';

import Home from './pages/home';

export default
<Router>
  <div>
    <Route path="/" exact component={Home}/>
  </div>
</Router>;
