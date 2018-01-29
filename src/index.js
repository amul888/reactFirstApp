import React,{ Component } from 'react';
import ReactDom from 'react-dom';
// import {  BrowserRouter as Router, Route} from 'react-router-dom';
// import User from './components/user';
// import Layout from './components/layout';
import Routes from '../routes';
// console.log(<Routes/>,">>>>>>>>>>>>>>>>>>>");


// class App extends Component{
//   render(){
//     return(
//     <div>home</div>
//     )
//   }
// }
// ReactDom.render(<App/>,document.getElementById('root'));

ReactDom.render(<Routes/>,document.getElementById('root'));
