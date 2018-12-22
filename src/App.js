import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
       <Route path="/" component={Login}>
       
       
       </Route>
       
       
       </Router>
      </div>
    );
  }
}

export default App;
