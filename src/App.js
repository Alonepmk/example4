import React from 'react';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
      </Switch>
    </div>
    </Router>
  );
}

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      password : "",
    };
  }
  doCheck = ()=> {
    if(this.state.password === "12345"){
      window.location.assign("/page2");
    }
  }
  getText = (event)=> {
    this.setState({password: event.target.value});
  }
  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <input type="text" onChange={this.getText}></input>
        <input type="button" onClick={this.doCheck}></input>
      </div>
    );
  }
}
  


export default App;
