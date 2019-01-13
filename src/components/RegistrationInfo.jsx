import React, {
  Component
} from 'react';

import firebase from '../firebase'

import {
  TextField,

  Fab
} from '@material-ui/core';
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import database from '../firebase'


/*
class registration declared in order to render and set global value of the TextField

*/

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
      verify: false,
      Password: '',
      passwrderrtxt: '',
      Confirmpassword: '',
      Confirmpassworderrtxt: '',
      ContactNo: '',
      ContactNoerrtxt: ''

    }
    /*
the value of this keyword is bind with onSubmit function

    */
    this.onSubmit = this.onSubmit.bind(this);
  }
  /*
validate function to check all live validation conditions

}

  */

  validate = () => {

    console.log("in validate", );

    var flag = false;
    /*
array for errors to be displayed
    */
    const error = {
      Firstnameerrtxt: '',
      Lastnameerrtxt: '',
      EmailIDerrtxt: '',
      Usernameerrtxt: '',
      passwrderrtxt: '',
      Confirmpassworderrtxt: '',
      ContactNoerrtxt: '',
    }
    /*
    coondition for blank firstname
    */
    if (this.state.Firstname.length === 0) {
      flag = true;
      console.log(this.state.Firstname)

      error.Firstnameerrtxt = "*firstname should not be blank*";

      console.log(error.Firstnameerrtxt)
    }
    /* coondition for entering only alphabets  in TextField


    */
    if (!/[a-zA-Z]+$/.test(this.state.Firstname)) {

      {
        flag = true;
        error.Firstnameerrtxt = "*enter alphabets only*";
        console.log(error.Firstnameerrtxt);
      }
    }

    /*
    coondition check to check length of password and it must be more than 5
    */

    if (this.state.Password.length < 5) {
      flag = true;
      error.passwrderrtxt = "*password must be more than 5 characters*";
      console.log(error.passwrderrtxt)
    }
    /*
    /*
    coondition for blank TextField
    */



    if (this.state.Lastname.length === 0) {
      flag = true;
      error.Lastnameerrtxt = "*lastname should not be blank*"
      console.log(error.Lastnameerrtxt)
    }

    /*
    to compare values of password and confirm password validation
    */
    if (this.state.Password !== this.state.Confirmpassword) {
      flag = true;
      error.Confirmpassworderrtxt = "*password and confirm password does not match*"
      console.log(error.Confirmpassworderrtxt);
    }

    /**
     * validation for email adresss
     */

    if (this.state.EmailId.indexOf("@") === -1) {
      flag = true;
      error.EmailIDerrtxt = "*Requires valid email*";
    }
    if (this.state.EmailId.indexOf('.') === -1) {
      flag = true;
      error.EmailIDerrtxt = "*requires valid email"
    }

    /*
     condition for taking number of 10 digits only*/
    if (this.state.ContactNo.length !== 10) {
      flag = true;
      error.ContactNoerrtxt = "*length must be of 10 digits*"
      console.log(error.ContactNoerrtxt)

    }
    /*
condition for entering only number in  this text TextField
    */
    if (!/^[0-9]*$/.test(this.state.ContactNo))

    {
      flag = true
      error.ContactNoerrtxt = "enter digits only"
    }

    /*
    set the same state in which page is

    */
    this.setState({
      ...this.setState,
      ...error
    })
    return flag; //value returned for futher validation
  }
  /*
  Onsubmit function is envoked when submit button is clicked
  */
  onSubmit = event => {
    console.log("in submit");
    event.preventDefault(); //to stop page from clearing the feilds and setting page to Default
    const error = this.validate();
    if (!error) {
      //toast('test abc',{position:toast.POSITION.BOTTOM_RIGHT})
      /* array of input created in order to push  the data into database*/
      var data = {
        firstname: this.state.Firstname,
        lastname: this.state.Lastname,
        email: this.state.EmailId,
        password: this.state.Password,
        contact: this.state.ContactNo,

      }
      /*
inbuilt method  of firebase called using var firebase
    */
      firebase.firebase.auth().createUserWithEmailAndPassword(this.state.EmailId, this.state.Password).then(() => {
        console.log("Adders");
        console.log('in else', this.state.verify)


        var user = firebase.firebase.auth().currentUser;

        user.sendEmailVerification().then(() => {
            // Email sent.
            
            toast("e-mail has been send to your email account for verification"
            ,{position:toast.POSITION.BOTTOM_RIGHT})
          
          })
          .catch(function(error) {
            // An error happened.
            if (error) {
              toast("some error occured email for verification is not send"
              ,{position:toast.POSITION.BOTTOM_RIGHT}) 
            
            }
          });
        database.database.ref('/users').push(data); //pushing data in firebase
        /*
        setting the new state of the page
        */
        this.setState({
          Firstname: "",
          Firstnameerrtxt: '',
          Lastname: "",
          Lastnameerrtxt: '',
          EmailId: "",
          EmailIDerrtxt: '',
          verify: false,
          Password: "",
          passwrderrtxt: '',
          Confirmpassword: '',
          Confirmpassworderrtxt: '',
          ContactNo: "",
          ContactNoerrtxt: ''
        });
        /*
        redirecting to the next page */
        this.props.props.history.push('/login');
        /*
if error is send by database then condition is set
        */

      }).catch(err => {
        console.log("Error", err);
        var errorCode = err.code;

         var errorMessage = err.message;

       //  toast(error.message,{position:toast.POSITION.BOTTOM_RIGHT})
        if (err) {
          /*
          changing value of gloabal variable
          */console.log('erroe messgage',errorMessage)
        // toast(errorMessage,{position:toast.POSITION.BOTTOM_CENTER})
          this.setState({
            verify: true
          })

          console.log('in error catch', this.state.verify)
          /*
checking condition of global vaibale
          **/
          if (this.state.verify) {
            console.log( 'after setting verify',this.state.verify)
            /*
            to display snackbar
            */

           toast(errorMessage,{position:toast.POSITION.BOTTOM_RIGHT})
            /*
            setting same state
            */
            this.setState({
              ...this.setState,

            });
          }
        }


      })
    }
  }


  render() {
    return (
       < div >
      <div className = 'registerlogo' >
      <img src = {require('../assets/register.png')  }  />

      <h1 > Register </h1> </div >
      <div className = 'help' >
      <
      TextField style = {
        {
          paddingBottom: "20px"
        }
      }
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
      error = {
        this.state.Firstnameerrtxt
      }
      helperText = {
        this.state.Firstnameerrtxt
      }

      />

      <
      TextField id = 'child'
      style = {
        {
          paddingBottom: "20px"
        }
      }
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
      error = {
        this.state.Lastnameerrtxt
      }
      helperText = {
        this.state.Lastnameerrtxt
      }
      />


      <
      TextField id = 'help'
      style = {
        {
          paddingBottom: "20px"
        }
      }
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
      error = {
        this.state.EmailIDerrtxt
      }
      helperText = {
        this.state.EmailIDerrtxt
      }


      />


      <
      TextField className = 'help'
      style = {
        {
          paddingBottom: "20px"
        }
      }
      label = "Password"
      type = 'password'
      placeholder = "password"
      value = {
        this.state.Password
      }
      onChange = {
        (event) => this.setState({
          Password: event.target.value
        })
      }
      error = {
        this.state.passwrderrtxt
      }
      helperText = {
        this.state.passwrderrtxt
      }
      />

      <
      TextField className = 'help'
      style = {
        {
          paddingBottom: "20px"
        }
      }
      label = "Confirm password"
      placeholder = "enter password"
      type = 'password'
      value = {
        this.state.Confirmpassword
      }
      onChange = {
        (event) => this.setState({
          Confirmpassword: event.target.value
        })
      }
      error = {
        this.state.Confirmpassworderrtxt
      }
      helperText = {
        this.state.Confirmpassworderrtxt
      }
      />


      <
      TextField style = {
        {
          paddingBottom: "40px"
        }
      }
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
      error = {
        this.state.ContactNoerrtxt
      }
      helperText = {
        this.state.ContactNoerrtxt
      }
      />




      <
      Fab color = "primary"
      variant = 'extended'
      onClick = {

        event => this.onSubmit(event)
      } >
      Submit </Fab>
      
      </ div > 
      <ToastContainer/>
      <ToastContainer/>
      </div>


    );
  }
}

export default Regesitration
