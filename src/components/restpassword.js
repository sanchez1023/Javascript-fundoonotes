import React,  {Component } from 'react';
import Textfeild from 'material-ui/TextField'

import Raisedbutton from 'material-ui/RaisedButton';


class Forgetpassword extends Component{

    render()
    {
        return(
            <div>
            <h1>forgot password</h1>
            <p>
            <Textfeild
            hintText="Enter e-mail Id"
            floatingLabelText="Registered e-mail Id"
          
        
            
            
            />
        </p>
        <p>
        <Raisedbutton
        label="submit"
        primary={true}
       // style={style.button}
        />
        </p>
        </div>
        )
    }
}export default Forgetpassword
