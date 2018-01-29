import React,{ Component } from 'react';
import {  BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import User from './components/user';
import Layout from './components/layout';

export default(
  <Router>
    <div>
      <Route exact path="/" component={Layout}></Route>
      <Route path="/user" component={User}></Route>
    </div>
  </Router>
);
