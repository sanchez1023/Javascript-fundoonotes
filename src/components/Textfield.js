import React, {
  Component
} from 'react';
import firebase from '../firebase' /**import fire base */
import {
  TextField,

  Fab,
} from '@material-ui/core' /** in built material ui contains */
import 'js-snackbar/snackbar.css';
import {
  show
} from 'js-snackbar'; /**Snack bar require in js */
import {} from 'react-router'


class Logininfo extends Component {
  /**
   * feilds values declared used globally using this keyword in class constructor
   */
  constructor() {
    super();
    this.state = {
      username: "",
      usernameerrtxt: "",
      password: "",
      passworderrtxt: "",
      verify: false,

    }
    /**
        value in this is bind with on submit function
     */
    this.onSubmit = this.onSubmit.bind(this);
  }
  /**
   * validate function for live validation
   */

  validate = () => {
    var flag = false;
    /**
     * array of errors to define helper text
     */
    const error = {
      usernameerrtxt: "",
      passworderrtxt: '',


    }
    /**
     * validation for empty feild
     */
    if (this.state.username.length === 0) {
      flag = true;
    }
    /**
     * validation for email adresss
     */
    if (this.state.username.indexOf("@") === -1) {
      flag = true;
      error.usernameerrtxt = "*Requires valid email*";
    }
    if (this.state.username.indexOf('.') === -1) {
      flag = true;
      error.usernameerrtxt = "*requires valid email";
    }
    /**
     * validation to check length of password that must be greater than 5
     */
    if (this.state.password.length < 5) {
      flag = true;
      error.passworderrtxt = "*password must have 5 characters "

    }
    /**
     * if errors are caught in validation
     * set the same state and array of erroors deisplaying error text
     */
    this.setState({
      ...this.state,
      ...error
    })
    /**
     *
     * returning flag value for futher validation
     */
    return flag
  }


  /***
   * this event is triggred when submit buuton on the page is clicked given by onClick event
   */

  onSubmit = event => {
    event.preventDefault();
    const error = this.validate(); // returned value from validated
    if (!error) {
      /**
       * in built method of fire base for user sign in
       */
      firebase.firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(() => {

          console.log("in else")
          this.setState = {
            username: "",
            usernameerrtxt: "",
            password: "",
            verify: 'false',
            passworderrtxt: "",

          }
          this.props.props.history.push('/dashboard');

        })
        /**
                        returns an error */
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;

          var errorMessage = error.message;
          if (error) {
            /**
             * if error found setting the value of global variable 'verify' to true by default is is false
             */
            console.log(errorCode)
            this.setState({
              verify: true
            })
            /**
             * if the value of gloabal varialbe is changed then this coondition triggers
             */
            if (this.state.verify === true) {
              /**
               * show method of snack bar to display error
               */
              show({
                backgroundColor: '	FF0000',
                text: errorMessage,
                pos: "bottom-left"
              });
              /**
               * keeping the user in same state if error
               */
              this.setState({
                ...this.setState
              })
            }


          }

        });
    }
  }


  // }
  render() {
    return (

      <div className = 'text' >

      <h1 > Login to Fundoonotes </h1>
       <div >
      <TextField id = 'child'

      label = " email address"
      placeholder = "enter email id"
      error = {
        this.state.usernameerrtxt
      }
      helperText = {
        this.state.usernameerrtxt
      }
      value = {
        this.state.username
      }
      onChange = {
        (event) => this.setState({
          username: event.target.value
        })
      }


      />


      <TextField id = 'child'
      label = " Password"
      type = 'password'
      placeholder = "enter password"
      value = {
        this.state.password
      }
      onChange = {
        (event) => this.setState({
          password: event.target.value
        })
      }
      error = {
        this.state.passworderrtxt
      }
      helperText = {
        this.state.passworderrtxt
      }
      style = {
        {
          paddingBottom: '10px'
        }
      }

      />



      </div>


      <Fab variant = 'extended'
      color = "primary"
      onClick = {
        event => this.onSubmit(event)
      }
      helperText = {
        this.state.message
      }
      style = {
        {
          marginRight: '100px'
        }
      } >


      Submit


      </ Fab>







      </div>
    );
  }
}



export default Logininfo
