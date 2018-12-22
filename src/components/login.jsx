import React,  {Component } from 'react';


class Login extends Component {
    
    render() {
        return ( 

            <div>
            <h1 > LOGIN </h1>
           <p> USERNAME: </p>
            
            <input type = "text"
            name = "USERNAME"
            value = "" />
            
            
           <p> PASSWORD:</p>
            
            <input type = "text"
            name = "PASSWORD"
            value = "" />
            
        
            
           <p> <input type = "button"
            value = "Submit" /></p>

            
        

            
            <a href = "file:///home/admin1/shubham/fundoonotes/src/Registration.html" > NOT A REGISTERED USER ? REGISTER HERE >
            </a>
            </div>
        )
    }
}
export default Login;