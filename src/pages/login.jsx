import React,  {Component } from 'react';
import  ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import  { Card } from 'material-ui/Card'

import Logininfo from '../components/Textfield';


class Login extends Component {
    
    validate() {


        
    }
    
    render() {
               

        return ( 

        
            <ThemeProvider>
            <React.Fragment>
         
            <Appbar title="User login"/>
       <Card
       className='login'
       
       >
    
      <Logininfo/>
     
            </Card>
            

           
           
            </React.Fragment>
        </ThemeProvider>           
      
        );
    }
}
export default Login;