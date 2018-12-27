import React,  {Component } from 'react';
import { Button, MuiThemeProvider, Toolbar } from '@material-ui/core';

class Dash extends Component{
    onSubmit=event=>{
        event.preventDefault();
    window.location="http://localhost:3000/login"

    }
    render(){
return(
<MuiThemeProvider>
<Toolbar
className= 'tool'
 >
<h1
className ='head'
>User Dashboard</h1>
</Toolbar>

<Button color="secondary"
onClick={event=>this.onSubmit(event)} 
>logout</Button>
</MuiThemeProvider>
)
}
}
export default Dash