import React,  {Component } from 'react';


import Dashboard from '../components/dashboard';

class Dash extends Component{
    onSubmit=event=>{
        event.preventDefault();
    window.location="http://localhost:3000/login"

    }
    render(){
return(
<div>

<Dashboard/>
</div>


// <Button color="secondary"
// onClick={event=>this.onSubmit(event)} 
// >logout
// </Button>



);
}
}
export default Dash