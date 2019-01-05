import React, {
    Component
} from 'react';

import firebase from'../firebase'

import {
    TextField,
   
    Fab
} from '@material-ui/core';
import database from '../firebase'




class Regesitration extends Component {
    constructor() {
        super();
        this.state = {
            Firstname: '',
            Firstnameerrtxt: '',
            Lastname: '',
            Lastnameerrtxt: '',
            EmailId: '',
            EmailIDerrtxt: '',

            Password: '',
            passwrderrtxt: '',
            Confirmpassword: '',
            Confirmpassworderrtxt: '',
            ContactNo: '',
            ContactNoerrtxt: ''
            
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    validate = () => {

        console.log("in validate", );

        var flag = false;
        const error = {
            Firstnameerrtxt: '',
            Lastnameerrtxt: '',
            EmailIDerrtxt: '',
            Usernameerrtxt: '',
            passwrderrtxt: '',
            Confirmpassworderrtxt: '',
            ContactNoerrtxt: '',
        }

        if (this.state.Firstname.length === 0) {
            flag = true;
            console.log(this.state.Firstname)
            // console.log(this.state.Password);
            error.Firstnameerrtxt = "*firstname should not be blank*";

            console.log(error.Firstnameerrtxt)
        }
        if (!/[a-zA-Z]+$/.test(this.state.Firstname)) {

            {
                flag = true;
                error.Firstnameerrtxt = "*enter alphabets only*";
                console.log(error.Firstnameerrtxt);
            }
        }


        // console.log(this.state.Password);
        //console.log(this.state.Lastname);
        // console.log(this.state.EmailId);
        //console.log("email")
        if (this.state.Password.length < 5) {
            flag = true;
            error.passwrderrtxt = "*password must be more than 5 characters*";
            console.log(error.passwrderrtxt)
        }



        if (this.state.Lastname.length === 0) {
            flag = true;
            error.Lastnameerrtxt = "*lastname should not be blank*"
            console.log(error.Lastnameerrtxt)
        }


        if (this.state.Password !== this.state.Confirmpassword) {
            flag = true;
            error.Confirmpassworderrtxt = "*password and confirm password does not match*"
            console.log(error.Confirmpassworderrtxt);
        }



        if (this.state.EmailId.indexOf("@") === -1) {
            flag = true;
            error.EmailIDerrtxt = "*Requires valid email*";
        }
        if (this.state.EmailId.indexOf('.') === -1) {
            flag = true;
            error.EmailIDerrtxt = "*requires valid email"
        }
        if (this.state.ContactNo.length !==10) {
            flag = true;
            error.ContactNoerrtxt = "*length must be of 10 digits*"
            console.log(error.ContactNoerrtxt)

        }
        if (!/^[0-9]*$/.test(this.state.ContactNo))

        {
            flag = true
            error.ContactNoerrtxt = "enter digits only"
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
        if (!err) 
         {   

            var data={
                firstname:this.state.Firstname,
                lastname:this.state.Lastname,
                email:this.state.EmailId,
                password:this.state.Password,
                contact:this.state.ContactNo,

            }
            console.log(data);
            
    database.database.ref('/users').push(data);
           firebase.firebase.auth().createUserWithEmailAndPassword(this.state.EmailId, this.state.Password).then(()=> {
               console.log("Adders");
               
           }).catch(err => {
               console.log(err);
               
           })
         


            this.setState({
                Firstname: "",
                Firstnameerrtxt: '',
                Lastname: "",
                Lastnameerrtxt: '',
                EmailId: "",
                EmailIDerrtxt: '',

                Password: "",
                passwrderrtxt: '',
                Confirmpassword: '',
                Confirmpassworderrtxt: '',
                ContactNo: "",
                ContactNoerrtxt: ''
            });
           
            this.props.props.history.push('/login');
        }
        

    }
    

    render() {
        return ( 
            <div >
            <img src={require('../assets/register.png')}/>
            
            <h1 > Register </h1>
          <div className='help'>
            <
            TextField
            style={{paddingBottom:"20px"}}
            hintText = "Enter Firstname"
            helperText placeholder = " enter fistname"
            label = "Firstname"
            value = {
                this.state.Firstname
            }
            onChange = {
                (event) => this.setState({
                    Firstname: event.target.value
                })
            }
            error={this.state.Firstnameerrtxt}
            helperText = {
                this.state.Firstnameerrtxt
            }

            />

            <
            TextField id = 'child'
            style={{paddingBottom:"20px"}}
            placeholder = "Enter Lastname"
            name = "lastname"
            label = "Lastname"
            value = {
                this.state.Lastname
            }
            onChange = {
                (event) => this.setState({
                    Lastname: event.target.value
                })
            }
            error={this.state.Lastnameerrtxt}
            helperText = {
                this.state.Lastnameerrtxt
            }
            />


            <
            TextField id = 'help'
            style={{paddingBottom:"20px"}}
            InputLabelProps = "Enter EmailId"
            placeholder = " enter email"
            label = "Email"
            value = {
                this.state.EmailId
            }
            onChange = {
                (event) => this.setState({
                    EmailId: event.target.value
                })
            }
            error={this.state.EmailIDerrtxt}
            helperText = {
                this.state.EmailIDerrtxt
            }


            />


            <
            TextField className = 'help'
            style={{paddingBottom:"20px"}}
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
            error={this.state.passwrderrtxt}
            helperText = {
                this.state.passwrderrtxt
            }
            />

            <
            TextField className = 'help'
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
            />


            <
            TextField 
            style={{paddingBottom:"40px"}}
            label = "ContactNo:"
            placeholder = "enter contact"
            value = {
                this.state.ContactNo
            }
            onChange = {
                (event) => this.setState({
                    ContactNo: event.target.value
                })
            }
            error={this.state.ContactNoerrtxt}
            helperText = {
                this.state.ContactNoerrtxt
            }
            />
             
          

        
            <Fab color = "primary" variant='extended'
            onClick = {
                event => this.onSubmit(event)
            } >
            Submit 
           </Fab>
            </div>
            </div>


        );
    }
}

export default Regesitration