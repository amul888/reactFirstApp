import React,{ Component } from 'react';
import {  BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import User from './src/components/user';
import Layout from './src/components/layout';

// export default(
//   <Router>
//     <div>
//       <Route exact path="/" component={Layout}></Route>
//       {/* <Route path="/user" component={User}></Route> */}
//     </div>
//   </Router>
// );

export default class Routes extends Component{
  render(){
    return(
        <Router>
          <div>
            <Route exact path="/" component={Layout}/>
            <Route path="/user" component={User}/>
          </div>
        </Router>
    )
  }
}
