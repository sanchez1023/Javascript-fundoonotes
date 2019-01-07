import React, {
    Component
} from 'react';

import Regesitrationinfo from '../components/RegistrationInfo';
import {
    Card,
   
} from '@material-ui/core';





class Regesiter extends Component {


    render() {

        return (

            
           < Card className = 'reginfo' >

            <
            Regesitrationinfo props={this.props} / >
            
            </ Card>




        )
    }
}
export default Regesiter;