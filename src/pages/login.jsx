import React,  {Component } from 'react';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {Link} from 'react-router-dom'
import Logininfo from '../components/Textfield';
import { Card, AppBar, Toolbar } from '@material-ui/core';



class Login extends Component {
    
    
    render() {
               

        return ( 

        <ThemeProvider>
          
           
         <Card
         
         className='login'
         
         >
         <img src={require('../assets.js/accountview.png')}/>
         
    
      <Logininfo/>
<p>
      <Link to="/forgetpassword">Forgot Password</Link>
      </p>
<p>
 <Link to="/registration">Not yet registered ? Click here to register</Link>
 </p>
            </Card>
      </ThemeProvider>
           
           
     
        );
    }
}
export default Login;