import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import './App.css';
import Login from './pages/login';

import Regestration from './pages/registration';

import forpassword from './pages/forgetpassword';
import Dash from './pages/Dashboard'
import Resetpassword from './pages/Resetpassword';



class App extends Component {
  render() {
    return (
     <div className="App">
       <Router  >
       <div>
<Route path="/login" component={Login}/>

<Route path="/registration" component={Regestration}/>

<Route path="/forgetpassword" component={forpassword}/>
<Route path="/dashboard" component={Dash}/>
<Route path='/resetpassword' component={Resetpassword}/>
</div>
 </Router>

 </div>
  //  <div className="App">
  //  <Router>
  //      <Route path="/registration" component={Regestration}/>
       
  //      </Router>
  //      </div>
      //  <div className="App">
      //  <Router>
      //  <Route path="/forgetpassword" component={forpassword}/>
      //  </Router>
       
      //  </div>
      
      
     
    )
  }
}

export default App;
