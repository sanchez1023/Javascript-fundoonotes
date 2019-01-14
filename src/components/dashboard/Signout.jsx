import React, {
    Component
  } from 'react';
import { Popper,ClickAwayListener, IconButton, Paper, Card,DialogActions } from '@material-ui/core';
import database from '../../firebase'
import firebase from '../../firebase'
var userctr=require('../../controller/usercontroller')


  class Sign extends Component{

    constructor()
    {
        super()
       this.state={
        notes:[],
      
        anchorEl: null,
        open: false,
       }
    }
    handleClick=event=>{
      console.log('in popper handle click')
     const { currentTarget } = event;
      this.setState(state => ({
        anchorEl: currentTarget,
        open: !this.state.open,
      }));
      console.log('state',this.state.open)
      console.log('anchor el',this.state.anchorEl)
    };
handleSignout=event=>{
{
console.log("insignout")
firebase.firebase.auth().signOut()
localStorage.clear();
window.location='http://localhost:3000/login'
}
}
onOutsideclick()
{
  this.setState({
    open: false
  })
}
 async componentDidMount()
{
  let arrayNotes= await userctr.add();
  this.setState(
    {
      notes:arrayNotes,
    }
  )
  console.log('arraynotes',arrayNotes)
  var pinnedNotes=0;
  this.state.notes.map( (option, index) => {
    if(option.Pinned === true && option.Trashed === false && option.Archived === false )
    {
      pinnedNotes=pinnedNotes+1;
      localStorage.setItem('Pinned',pinnedNotes)
}
console.log('sign out pinned',pinnedNotes);
  });
  var archivedNotes=0;
  this.state.notes.map( (option, index) => {
    if(option.Pinned === false && option.Trashed === false && option.Archived === true )
    {
      archivedNotes=archivedNotes+1;
}
console.log('sign out archive--',archivedNotes);
localStorage.setItem('Archived',archivedNotes)
  });
  var Notes=0;
  this.state.notes.map( (option, index) => {
    if(option.Pinned === false && option.Trashed === false && option.Archived === false )
    {
    Notes=Notes+1;
}
localStorage.setItem('Notes',Notes)
console.log('sign out notes--',Notes);
  });
}

    render()
    {
      const id =this.state.open ? 'simple-popper' : null;

     
     
        return(
        
          <div className =''>
          < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
         <IconButton onClick={(event)=>this.handleClick(event)}>
          <img src={require('../../assets/account.svg')}/>
      
          </IconButton>
          <Card>
          <Popper  id={id}open={this.state.open }  anchorEl={this.state.anchorEl}>
<Paper className='paper'>

<div>
Welcome:   {localStorage.getItem('email')}
</div>
<div>
 Number of notes:{localStorage.getItem('Notes')}
 </div>
<div>
 Number of Archived Notes:{localStorage.getItem('Archived')}
 </div>
<div>
 Number of Pinned Notes:{localStorage.getItem('Pinned')}
</div>

<DialogActions>
<button

onClick={event=>this.handleSignout(event)}

>

Sign Out

</button>
</DialogActions>


</Paper>

</Popper>

</Card>
</ ClickAwayListener>

</div>



        )
    }
  }
  export default Sign