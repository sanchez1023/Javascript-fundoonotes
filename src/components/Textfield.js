/* eslint-disable no-redeclare */
import React,  {Component } from 'react';
import Textfeild from 'material-ui/TextField'

import Raisedbutton from 'material-ui/RaisedButton';

class Logininfo extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
        this.handleUsername=this.handleUsername.bind(this);
    }
    handleUsername(event){
        this.setState({username:event.target.value});

    }
    // validate()

render(){
        return (
            <div>
            <h1>Login</h1>

    <Textfeild
            hintText="Enter username"
            floatingLabelText="Username"
            value={this.state.username}
            onChange={this.handleUsername}
            
        
           // defaultValue={values.username}
        
            
            
            />

            
        
            <Textfeild
            hintText="Enter password"
            floatingLabelText="password"
            
           
            //defaultValue={values.username}

            
            
            />
            
                     
        <p>
            <Raisedbutton
            label="submit"
            primary={true}
            onClick=""
           // style={style.button}
            />
            </p>


            </div>
          
             
        );
}
}
export default Logininfo




    

