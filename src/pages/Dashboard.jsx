import React,  {Component } from 'react';


import Dashboard from '../components/dashboard/Dashboard.jsx';
import Note from '../components/dashboard/Note.jsx';
import Showcards from '../components/dashboard/Shownotes';


class Dash extends Component{
    constructor()
    { super()
        this.state={
            archived:false,
            reminder:false,
            Trashed:false,
            Cardstyle:false,
            note:false,
        }
        this.navigate=this.navigate.bind(this)
        this.handleCardsview=this.handleCardsview.bind(this)
      
    }
   
    navigate(archived,reminder,trash,note)
    {
        this.setState({
            archived:archived,
            reminder:reminder,
            Trashed:trash,
            note:note,
        })
    }

    handleOnclick()
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
<Showcards viewProps={this.state.Cardstyle}
reminder={this.state.reminder}
archive={this.state.archived}
bin={this.state.Trashed}
notes={this.state.note}

/>


</div>

    

// <Button color="secondary"
// onClick={event=>this.onSubmit(event)} 
// >logout
// </Button>



);
}
}
export default Dash