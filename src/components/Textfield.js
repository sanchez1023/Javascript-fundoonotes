/* eslint-disable no-redeclare */
import React,  {Component } from 'react';

import  { TextField } from '@material-ui/core/'
import Button from '@material-ui/core/Button';

class Logininfo extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
  //this.handleUsername=this.handleUsername.bind(this);
//      }
//     handleUsername(event){
//       this.setState({username:event.target.value});

//      }
//      validate(event){
//      //event.preventDefault();
//          if(event.target.value="")
//          {
//              console.log('username empty')
//          }
//      }
    
// onSubmit=event=>{
// event.preventDefault();
// const error=this.validate();
// if(error)
// {

// }

// }
render()
{
        return (
            <div>
            <h1>Login</h1>
<p>
    <TextField
            // value={this.state.username}
            // 
            label="UserName"
        // value={this.state.username}
         //onChange={this.handleUsername}
           // defaultValue={values.username}
        
            />
            </p>

            <p>
        
            <TextField
            label=" Password"
        Floatinglabeltext="password"
              />
            </p>
            
                     
        <p>
           
        <Button onClick="validate(event)" 
        color="primary">
        Submit
        
      </Button>
            </p>


            </div>
          
             
        );
}
}



export default Logininfo




    

