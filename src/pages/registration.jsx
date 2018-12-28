import React, {
    Component
} from 'react';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Regesitrationinfo from '../components/registrationInfo';
import {
    Card,
    AppBar,
    Toolbar
} from '@material-ui/core';





class Regesiter extends Component {


    render() {

        return (

            
           < Card className = 'reginfo' >

            <
            Regesitrationinfo / >
            
            </ Card>




        )
    }
}
export default Regesiter;