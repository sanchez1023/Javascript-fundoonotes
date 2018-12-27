/* eslint-disable no-redeclare */
import React,  {Component } from 'react';

import  { TextField } from '@material-ui/core/'
import Button from '@material-ui/core/Button';

class Logininfo extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            usernameerrtxt:"",
            password:"",
            passworderrtxt:""
        }
    }
 
     validate=()=>{
var flag=false;
        const error={
            usernameerrtxt:"",
            passworderrtxt:''
        }
         if(this.state.username.length===0)
         {
             flag=true;
         }
     
    if (this.state.username.indexOf("@") === -1) {
        flag = true;
        error.usernameerrtxt= "*Requires valid email*";
  }
  if(this.state.username.indexOf('.')===-1)
  {
      flag=true;
      error.usernameerrtxt="*requires valid email";
  }
  if(this.state.password.length<5)
  {
      flag=true;
      error.passworderrtxt="*password must be more than 5 characters "
  }
  this.setState({
      ...this.state,
      ...error
  })
  return flag
     }
    
onSubmit=event=>{
event.preventDefault();
const error=this.validate();
if(!error)
{
    this.set={
        username:"",
        usernameerrtxt:"",
        password:"",
        passworderrtxt:""
    }
    window.location="http://localhost:3000/dashboard"
}
}


// }
render()
{
        return (
            <div>
            <h1>Login to Fundoonotes</h1>

    <TextField
            // value={this.state.username}
            // 
            label="Username or email address"
            placeholder="enter email id"
            helperText={this.state.usernameerrtxt}
        value={this.state.username}
         onChange={(event) => this.setState({username : event.target.value})}
           // defaultValue={values.username}
        
            />
        
        
            <TextField
            label=" Password"
        Floatinglabeltext="password"
        placeholder="enter password"
        value={this.state.password}
        onChange={(event) => this.setState({password: event.target.value})}
        helperText={this.state.passworderrtxt}
        
        
              />
         
            
                     
     
        <Button   color="primary"
        onClick={event=>this.onSubmit(event)}> 
      
        Submit
        
      </Button>
           

            </div>
          
             
        );
}
}



export default Logininfo




    

