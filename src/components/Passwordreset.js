import React,  {Component } from 'react';
import { Card, TextField, Fab } from '@material-ui/core';


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
        if (this.state.Password.length < 5) {
            Flag = true;
            error.passwrderrtxt = "*password must be more than 5 characters*";
            console.log(error.passwrderrtxt)
        }
        if (this.state.Password !== this.state.Confirmpassword) {
            Flag = true;
            error.Confirmpassworderrtxt = "*password and confirm password does not match*"
            console.log(error.Confirmpassworderrtxt);
        }
        this.setState({
            ...this.state,
            ...error,
        })
        return Flag;



    }
    onSubmit = event => {
        console.log("in submit");
        event.preventDefault();
        const err = this.validate();
        if (!err) 
         {
             
            this.setState({
                
            password:'',
            passwrderrtxt:'',
            confirmpassword:'',
            confirmpassworderrtxt:'',
             } )

         }

        }
    render()
    {
        return(
            <div>
            

       

            <
            TextField 
            label = "Password"
            type='password'
            placeholder = "password"
            value = {
                this.state.Password
            }
            onChange = {
                (event) => this.setState({
                    Password: event.target.value
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
            type='password'
            value = {
                this.state.Confirmpassword
            }
            onChange = {
                (event) => this.setState({
                    Confirmpassword: event.target.value
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

            

            </div>
        );
    }
}
export default Passwordreset