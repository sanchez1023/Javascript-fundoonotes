
import React,  {Component } from 'react';
import  ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import { Card } from 'material-ui';
import Forgetpassword from '../components/restpassword';


class forpassword extends Component {


    render() {

        return (
            <ThemeProvider>
            <React.Fragment>
            <Appbar title="Forgot password Page"/>
            <Card 
                  className='forgetinfo'
                  >      

            <Forgetpassword/>
            </Card>
            </React.Fragment>
            </ThemeProvider>
            
            
            )



        

    }
}
export default forpassword