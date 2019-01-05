import React,  {Component } from 'react';


import { TextField,  Fab } from '@material-ui/core';


class Forgetpassword extends Component{
    constructor(){
        super();
        this.state={ 
            email:"",
            emailerrtxt:""
        }
    }

    validate=()=>
    {
       var flag=false;
       const error={
           emailerrtxt:"",
       } 
       if (this.state.email.indexOf("@") === -1) {
        flag = true;
        error.emailerrtxt= "*Requires valid email*";
  }
  if(this.state.email.indexOf('.')===-1)
  {
      flag=true;
      error.emailerrtxt="*requires valid email";
  }
  this.setState({
    ...this.state,
    ...error
})
return flag
   }


    
    onSubmit=(event)=>
    {
        event.preventDefault();
var  error=this.validate();
if(!error)
{
    this.set={
        email:"",
            emailerrtxt:""
        
    }
}
    }
    render()
    {
        return(
            <div>
            <h1>forgot password</h1>
            <p>
            <TextField
            label="Enter e-mail Id"
            placeholder='Enter registerd e-mail id'
            onClick={(event) => this.setState({email: event.target.value})}
            error={this.state.emailerrtxt}
            helperText={this.state.emailerrtxt}
            

          
        
            
            
            />
        </p>
        <p>
        <Fab variant="extended" 
        onClick={event=>this.onSubmit(event)}
        >
        submit
   </Fab>
        </p>
        </div>
        )
    }

}
export default Forgetpassword