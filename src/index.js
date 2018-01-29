import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';

class App extends Component{
  render(){
    return(
      <div>
        {Routes}
      </div>
    )
  }
}
ReactDom.render(<App/>,document.getElementById('root'));
