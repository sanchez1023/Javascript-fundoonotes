
import React,  {Component } from 'react';
import firebase from'../firebase'
import  { TextField, Snackbar, SnackbarContent } from'@material-ui/core'
import Button from '@material-ui/core/Button';
//import UserController from "../controller/usercontroller";
//var userCtrl = new UserController();
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
      error.passworderrtxt="*password must have 5 characters "
  }
// userCtrl.signIn(this.state.username,this.state.password)

const promise=firebase.firebase.auth().signInWithEmailAndPassword(this.state.username,this.state.password);
promise.catch(e=>alert(e.message));
// Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//         if(errorCode)
//         {
//             flag=true;
//         }
//     if (errorCode === 'auth/wrong-password') {
// alert('Wrong password.');
//     }
//  else {
//   alert(errorMessage);
// }
// console.log(errorCode);
// });
  //   if(err)
//   {
//       flag=true;
//       prompt('invalid credentials')
//   }
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
   // window.location="http://localhost:3000/dashboard"
}
}


// }
render()
{
        return (
            
         <div>
            <h1>Login to Fundoonotes</h1>
            <div className='text'>
    <TextField id='child'
            // value={this.state.username}
            // 
            label=" email address"
            placeholder="enter email id"
            helperText={this.state.usernameerrtxt}
        value={this.state.username}
         onChange={(event) => this.setState({username : event.target.value})}
           // defaultValue={values.username}
        
            />
        
        
            <TextField id='child'
            label=" Password"
        
        placeholder="enter password"
        value={this.state.password}
        onChange={(event) => this.setState({password: event.target.value})}
        helperText={this.state.passworderrtxt}
        
        
              />
         
            
                     </div>
     
        <Button   color="primary"
        onClick={event=>this.onSubmit(event)}> 
      
        Submit
        
      </Button>
           

            
          
             <Snackbar>
             </Snackbar>
             </div>
        );
}
}



export default Logininfo




    

