import React,  {Component } from 'react';


import Dashboard from '../components/dashboard/Dashboard';
import Note from '../components/dashboard/Note';
import Showcards from '../components/dashboard/Shownotes';

class Dash extends Component{
    

    
    render(){
return(
<div>

<Dashboard dashProps={this.props} />
<Note/>
<Showcards/>
</div>

    

// <Button color="secondary"
// onClick={event=>this.onSubmit(event)} 
// >logout
// </Button>



);
}
}
export default Dash