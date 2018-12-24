import React,  {Component } from 'react';
import Textfeild from 'material-ui/TextField'

import Raisedbutton from 'material-ui/RaisedButton';


class Regesitration extends Component{

    render()
    {
        return(
            <div>
            <h1>Register</h1>
            <p>
            <Textfeild
            hintText="Enter Firstname"
            floatingLabelText="Firstname"
          
        
            
            
            />
        </p>
    
        <p>
        
            <Textfeild
            hintText="Enter Lastname"
            floatingLabelText="Lastname"
          

            
            
            />
            </p>
            <p>
        
            <Textfeild
            hintText="Enter EmailId"
            floatingLabelText="Email"
          

            
            
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
        );
    }
}
export default Regesitration