
import React,  {Component } from 'react';
import firebase from'../firebase'
import  { TextField, Snackbar,  Fab, } from'@material-ui/core'
import 'js-snackbar/snackbar.css';
import { show } from 'js-snackbar';
import {} from 'react-router'


class Logininfo extends Component{
    constructor(){
        super();
        this.state={ 
            username:"",
            usernameerrtxt:"",
            password:"",
            passworderrtxt:"",
            verify:false,

        }
        this.onSubmit = this.onSubmit.bind(this);
    }
 
     validate=()=>{
var flag=false;
var isauthentic=false;
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
    
   this.setState({
      ...this.state,
      ...error
  })
  return flag
     }
     
     
     handleClose=()=>
     {

     }
    
onSubmit=event=>{
event.preventDefault();
const error=this.validate();
if(!error)
{
    firebase.firebase.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then(()=> {
        console.log("sfdsf");
        
    })
    .catch(error=> {
        // Handle Errors here.
         var errorCode = error.code;
    
        var errorMessage = error.message;
        if(error    ){
       // alert(errorCode);
        console.log(errorCode)
        this.setState({
            verify:true
        })
    if(this.state.verify===true){
    show({
        backgroundColor: '	FF0000',
        text : errorMessage,
        pos : "bottom-left"
    });
    this.setState({
        ...this.setState
    })
}
       
else{
        console.log("in else") 
this.setState={
    username:"",
    usernameerrtxt:"",
    password:"",
    verify:'false',
    passworderrtxt:"",
    
}
  this.props.props.history.push('/dashboard');
        }
    }

    });


    
    
   
    
}
}


// }
render()
{
        return (
            
         <div className='text'>
            <h1>Login to Fundoonotes</h1>
            <div >
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
        type='password'
        placeholder="enter password"
        value={this.state.password}
        onChange={(event) => this.setState({password: event.target.value})}
        error={this.state.passworderrtxt}
        helperText={this.state.passworderrtxt}
        style={{paddingBottom:'10px'}}
        
             />
         
            
                     </div>
     
        <Fab variant='extended'  color="primary"
        onClick={event=>this.onSubmit(event)}
        helperText={this.state.message}
        style={{marginRight:'100px'}}> 
        
      
        Submit
        
     </Fab>
           

    
     


             </div>
        );
}
}



export default Logininfo




    

