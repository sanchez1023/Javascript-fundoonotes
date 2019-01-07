import React,  {Component } from 'react';


import Dashboard from '../components/dashboard/Dashboard';
import Note from '../components/dashboard/Note';

class Dash extends Component{
    

    
    render(){
return(
<div>

<Dashboard />
<Note/>
</div>

    

// <Button color="secondary"
// onClick={event=>this.onSubmit(event)} 
// >logout
// </Button>



);
}
}
export default Dash