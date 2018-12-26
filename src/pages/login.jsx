import React,  {Component } from 'react';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'


import Logininfo from '../components/Textfield';
import { Card, AppBar, Toolbar } from '@material-ui/core';


class Login extends Component {
    
    validate() {


        
    }
    
    render() {
               

        return ( 

        <ThemeProvider>
          
            <Toolbar
            className= 'tool'
             >
            <h1
            className ='head'
            >User Login</h1>
            </Toolbar>
         <Card
         
         className='login'
         
         >
         
    
      <Logininfo/>
     <a 
     className='forget'
      href='/forgetpassword'>forgetpassword</a>
      <p>
     <a 
     className='register' 
     href='/registration'>Not a registered user ? Click here to register</a>
     </p>
            
            </Card>
      </ThemeProvider>
           
           
     
        );
    }
}
export default Login;