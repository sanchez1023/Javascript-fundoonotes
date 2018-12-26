import React,  {Component } from 'react';



import { TextField, Button } from '@material-ui/core';
import Login from '../pages/login';


class Regesitration extends Component{
    constructor(){
    super();
    this.state={
        Firstname:'',
        Firstnameerrtxt:'',
        Lastname:'',
        Lastnameerrtxt:'',
        EmailId:'',
        EmailIDerrtxt:'',
       
        Password:'',
        passwrderrtxt:'',
        Confirmpassword:'',
        Confirmpassworderrtxt:'',
        ContactNo:'',
        ContactNoerrtxt:''
    }
    
}
validate = () => {

    console.log("in validate", );
    
    let  flag = false;
    const error={
        Firstnameerrtxt: '',
        Lastnameerrtxt: '',
        EmailIDerrtxt: '',
        Usernameerrtxt:'',
        passwrderrtxt: '',
        Confirmpassworderrtxt: '',
        ContactNoerrtxt:'',
    }
    
    if (this.state.Firstname.length===0) {
      flag = true;
      console.log(this.state.Firstname)
     // console.log(this.state.Password);
      error.Firstnameerrtxt= "*firstname should not be blank*";
      console.log(error.Firstnameerrtxt)
    }
    if(!/[a-zA-Z]+$/.test(this.state.Firstname))
    {
        
        {
            flag=true;
            error.Firstnameerrtxt="*enter character*"
            console.log(error.Firstnameerrtxt)
        }
    }


   // console.log(this.state.Password);
    //console.log(this.state.Lastname);
   // console.log(this.state.EmailId);
//console.log("email")
if (this.state.Password.length <5) {
    flag = true;
    error.passwrderrtxt= "*password must be more than 5 characters*";
    console.log(error.passwrderrtxt)
}



if(this.state.Lastname.length===0){
    flag=true;
    error.Lastnameerrtxt="*lastname should not be blank*"
    console.log(error.Lastnameerrtxt)
}


if(this.state.Password !==this.state.Confirmpassword){
    flag=true;
    error.Confirmpassworderrtxt="*password and confirm password does not match*"
console.log(error.Confirmpassworderrtxt);
}



    if (this.state.EmailId.indexOf("@") === -1) {
      flag = true;
      error.EmailIDerrtxt= "*Requires valid email*";
}
if(this.state.EmailId.indexOf('.')===-1)
{
    flag=true;
    error.EmailIDerrtxt="*requires valid email"
}
if(this.state.ContactNo.length<10)
{
    flag=true;
    error.ContactNoerrtxt="*length must be of 10 digits*"
    console.log(error.ContactNoerrtxt)
    
}
 else if(!/[789]{1}[0-9]{9}/.test(this.state.ContactNo))

{
flag=true
error.ContactNoerrtxt="enter digits only"
}


this.setState({
    ...this.setState,
    ...error
})
return flag;
}

onSubmit = event => {
console.log("in submit");
    event.preventDefault();
    const err = this.validate();
    if (!err) {
     
      this.setState({
        Firstname:"",
        Firstnameerrtxt:'',
        Lastname:"",
        Lastnameerrtxt:'',
        EmailId:"",
        EmailIDerrtxt:'',
     
        Password:"",
        passwrderrtxt:'',
        Confirmpassword:'',
        Confirmpassworderrtxt:'',
        ContactNo:"",
        ContactNoerrtxt:''
});
 window.location="http://localhost:3000/login"
    }
    
       
    
}

    render()
    {
        return(
            <div style={{display:'flex', flexDirection: 'column'}}>
            <h1>Register</h1>
        
            <TextField
            hintText="Enter Firstname"
            helperText className='help'
            name="fistname"
            label="Firstname" 
            value={this.state.Firstname}
            onChange={(event) => this.setState({Firstname : event.target.value})}
            helperText={this.state.Firstnameerrtxt}

            />
      
            <TextField
            hintText="Enter Lastname"
            name="lastname"
            label="Lastname"
            value={this.state.Lastname}
            onChange={(event) => this.setState({Lastname : event.target.value})}
            helperText={this.state.Lastnameerrtxt}
             />
         
        
            <TextField
            InputLabelProps="Enter EmailId"
            name="email"
            label="Email"
            value={this.state.EmailId}
            onChange={(event) => this.setState({EmailId: event.target.value})}
            helperText ={this.state.EmailIDerrtxt }
            
            
           />
            
           
             <TextField
            label="Password"
            name="password" 
            value={this.state.Password}
            onChange={(event) => this.setState({Password: event.target.value})}
            helperText={this.state.passwrderrtxt}
            />
           
            <TextField
            label="Confirm password"
            name="cpassword"
            value={this.state.Confirmpassword}
            onChange={(event) => this.setState({Confirmpassword : event.target.value})}
            helperText={this.state.Confirmpassworderrtxt}
            />

           
            <TextField
            label="ContactNo"
            name="contact"
            value={this.state.ContactNo}
            onChange={(event) => this.setState({ContactNo : event.target.value})}
       helperText={this.state.ContactNoerrtxt}
            />
           
               
        <Button color="primary"
        onClick={event=>this.onSubmit(event)}>
        Submit
      </Button>
          
            </div>
        );
    }
}

export default Regesitration