
import React,  {Component } from 'react';


import Forgetpassword from "../components/restpassword";
import {  Toolbar, Card, MuiThemeProvider } from '@material-ui/core';


class forpassword extends Component {


    render() {

        return (
            <MuiThemeProvider>
            <Toolbar
            className='tool'>
            <h1
            className='head'></h1>
            </Toolbar>
    
<Card
className='login'>
         

            <Forgetpassword/>
            </Card>
            </MuiThemeProvider>
            
            );



        

    }
}
export default forpassword