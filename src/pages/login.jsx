import React,  {Component } from 'react';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {Link} from 'react-router-dom'
import Logininfo from '../components/Textfield.jsx';
import { Card } from '@material-ui/core';
// import  { Snackbar } from'@material-ui/core'


class Login extends Component {
    
    
    render() {
               

        return ( 
// <div>
        <ThemeProvider>
          
           
         <Card
         
         className='login'
         
         >
         <div className ='logindisplay'>
         <img src={require('../assets/accountview.png')}/>
         
    
      <Logininfo props={this.props}/>

      
<p>
      <Link to="/forgetpassword">Forgot Password</Link>
      </p>
<p>
 <Link to="/registration">Not yet registered ? Click here to register</Link>
 </p>
 </div>
            </Card>
      </ThemeProvider>
           
   
        );
    }
}
export default Login;