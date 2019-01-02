
import React,  {Component } from 'react';
import firebase from'../firebase'
import  { TextField, Snackbar, SnackbarContent, Fab } from'@material-ui/core'


//import UserController from "../controller/usercontroller";
//var userCtrl = new UserController();
class Logininfo extends Component{
    constructor(){
        super();
        this.state={ 
            username:"",
            usernameerrtxt:"",
            password:"",
            passworderrtxt:"",
            message:""
        }
    }
 
     validate=()=>{
var flag=false;
        const error={
            usernameerrtxt:"",
            passworderrtxt:'',
            message:""
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

firebase.firebase.auth().signInWithEmailAndPassword(this.state.username,this.state.password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage)
 
        return errorMessage;

    
});

var msg=
console.log(msg);
// Handle Errors here.
    // var errorCode = err;
    // var errorMessage = err.message;
    //     if(errorCode)
    //     {
    //         flag=true;
    //         error.message="*invalid crediantails"
    //         console.log(errorMessage)
    //     }
    
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
        passworderrtxt:"",
        message:""
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
            error={this.state.usernameerrtxt}
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
        error={this.state.passworderrtxt}
        helperText={this.state.passworderrtxt}
        
              />
         
            
                     </div>
     
        <Fab variant='extended'  color="primary"
        onClick={event=>this.onSubmit(event)}
        helperText={this.state.message}> 
      
        Submit
        
     </Fab>
           

            
          
             <Snackbar id ='snack'
             anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'left'
             }}
             >
             
        
             open=this.state.open;

             </Snackbar>
             </div>
        );
}
}



export default Logininfo




    

