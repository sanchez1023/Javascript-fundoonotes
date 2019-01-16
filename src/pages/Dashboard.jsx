import React,  {Component } from 'react';


import Dashboard from '../components/dashboard/Dashboard.jsx';
import Note from '../components/dashboard/Note.jsx';
import Showcards from '../components/dashboard/Shownotes';
import Showarchived from '../components/dashboard/Showarchived';
import Showtrashed from '../components/dashboard/Showtrashed';

class Dash extends Component{
    constructor()
    { super()
        this.state={
            archived:false,
            reminder:false,
            Trashed:false,
            Cardstyle:false,
        }
        this.navigate=this.navigate.bind(this)
        this.handleCardsview=this.handleCardsview.bind(this)
        this.handleArchive=this.handleArchive.bind(this)
    }
   
    navigate(archived,reminder,trash)
    {
        this.setState({
            archived:archived,
            reminder:reminder,
            Trashed:trash,
        })
    }

    handleArchive()
    {
        this.setState({
            archived:!this.state.archived
        })
    }
    handleCardsview()
    {
        this.setState({
            Cardstyle:!this.state.Cardstyle,
        })
    }
    render(){
       
return(
<div>

<Dashboard dashProps={this.props}
navigate={this.navigate} 
dashToAppbar={this.handleCardsview}
archivedToappbar={this.handleArchive}

//reminder={this.state.reminder}

/>
<Note/>
<Showcards viewProps={this.state.Cardstyle}/>


</div>

    

// <Button color="secondary"
// onClick={event=>this.onSubmit(event)} 
// >logout
// </Button>



);
}
}
export default Dash