import React,  {Component } from 'react';


import { TextField, Button } from '@material-ui/core';


class Forgetpassword extends Component{

    render()
    {
        return(
            <div>
            <h1>forgot password</h1>
            <p>
            <TextField
            label="Enter e-mail Id"
            floatingLabelText="Registered e-mail Id"
          
        
            
            
            />
        </p>
        <p>
        <Button variant="contained" >
        Submit
      </Button>
        </p>
        </div>
        )
    }
}export default Forgetpassword
