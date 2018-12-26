import React,  {Component } from 'react';
import  ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Regesitrationinfo from '../components/registrationInfo';
import { Card, AppBar, Toolbar } from '@material-ui/core';





class Regesiter extends Component {
    
    
    render() {

        return ( 
            <ThemeProvider>
           
            <AppBar title="Registration Page"/>
            <Toolbar
            className='tool'>
            <h1
            className='head'>Registration Page</h1>
            </Toolbar>
            <Card
                  className='reginfo'
                  >      

            <Regesitrationinfo/>
            </Card>
          
            </ThemeProvider>

            
        )
    }
}
export default Regesiter;