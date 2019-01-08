import React,  {Component } from 'react';
import { Card, TextField, Fab } from '@material-ui/core';
import { show } from 'js-snackbar';

class Passwordreset extends Component{
    constructor()
    
    {
        super();
        this.state={

            password:'',
            passwrderrtxt:'',
            confirmpassword:'',
            confirmpassworderrtxt:'',
        }
    }

    validate=()=>{

        var Flag=false;
        const  error={
            passworderrtxt:'',
            confirmpassworderrtxt:'',

        }
        if (this.state.password.length <= 5) {
            console.log(this.state.password.length)
            Flag=true;
            error.passworderrtxt = "*password must be more than 5 characters*";
            console.log(error.passworderrtxt)
        }
        if (this.state.Password !== this.state.Confirmpassword) {
        Flag=true;
            error.Confirmpassworderrtxt = "*password and confirm password does not match*"
            console.log(error.Confirmpassworderrtxt);
        }
        this.setState({
            ...this.setState,
            ...error
        })
        return Flag;



    }
    onSubmit = event => {
        console.log("in submit");
        event.preventDefault();
        const err = this.validate();
        console.log(err)
        if (!err) 
         {
             
            this.setState({
                
            password:"",
            passwrderrtxt:"",
            confirmpassword:"",
            confirmpassworderrtxt:"",
             } )

             show({

                backgroundColor: '	FF0000',
                text : 'password has been succesfully changed check your mail for details',
                pos : "bottom-left"
            })
         
         }
            

        }
    render()
    {
        return(
            <div>
            
 <Card className='login'>
       
<h1>Reset password  </h1>
            <
            TextField 
            label = "Password"
           
            placeholder = "password"
            style={{marginTop:'50px'}}
            value = {
                this.state.Password
            }
            onChange = {
                (event) => this.setState({
                    password: event.target.value
                })
            }
            error={this.state.passworderrtxt}
            helperText = {
                this.state.passworderrtxt
            }
            ></TextField>

            <TextField className = 'help'
            style={{paddingBottom:"20px"}}
            label = "Confirm password"
            placeholder = "enter password"
           
            value = {
                this.state.Confirmpassword
            }
            onChange = {
                (event) => this.setState({
                    confirmpassword: event.target.value
                })
            }
            error={this.state.Confirmpassworderrtxt}
            helperText = {
                this.state.Confirmpassworderrtxt
            }
            ></TextField>

            <Fab color = "primary" variant='extended'
            onClick = {
                event => this.onSubmit(event)
            } >
            Submit 
         </Fab>

         </Card>

            </div>
        );
    }
}
export default Passwordreset