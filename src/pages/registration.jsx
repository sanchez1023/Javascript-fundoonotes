import React,  {Component } from 'react';
import  ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import Regesitration from '../components/registrationInfo';
import { Card } from 'material-ui';




class Login extends Component {
    
    
    render() {

        return ( 
            <ThemeProvider>
            <React.Fragment>
            <Appbar title="Registration Page"/>
            <Card 
                  className='reginfo'
                  >      

            <Regesitration/>
            </Card>
            </React.Fragment>
            </ThemeProvider>

            
        )
    }
}
export default Login;