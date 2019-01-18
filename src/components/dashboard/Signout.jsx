import React, {
    Component
  } from 'react';
import { Popper,ClickAwayListener,  Paper, Card, Fab, Divider, Avatar, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import firebase from '../../firebase'

const theme=createMuiTheme({
  overrides:{
    MuiAvatar:{
      
      colorDefault: {
                        color: "#fafafa",
                     backgroundColor: "tomato",
    }

  }
  }
})



var userctr=require('../../controller/usercontroller')


  class Sign extends Component{

    constructor()
    {
        super()
       this.state={
        notes:[],
      
        anchorEl: null,
        open: false,
        initial:"",
       }
    }
    handleClick=event=>{
                console.log('in popper handle click')
                var b=localStorage.getItem('email')
                var ava=b.substring(0,1)
                var c=ava.toLocaleUpperCase();
                
                
             
                        const { currentTarget } = event;
                          this.setState ({
                            anchorEl: currentTarget,
                            open: !this.state.open,
                            initial:c,
                          });
                console.log('state',this.state.open)
                console.log('anchor el',this.state.anchorEl)
    };
handleSignout=event=>{
{
            event.preventDefault();
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
            console.log('index--',index)
          
      }
localStorage.setItem('Pinned',pinnedNotes)
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

                                        var reminder=0;
                                        this.state.notes.map( (option, index) => {
                                          if(option.Reminder !=='' )
                                          {
                                          reminder=reminder+1;
                                      }
                                      localStorage.setItem('Reminder',reminder)
                                      console.log('sign out Rnotes--',reminder);
                                        });

}


    render()
    {
      var b=localStorage.getItem('email')
      var ava=b.substring(0,1)
      var c=ava.toLocaleUpperCase();
      

     
     
        return(
        
          <div className =''>
        
        
      
  <MuiThemeProvider theme={
        theme
      }>
        <Avatar className='avatar'
        onClick={(event)=>this.handleClick(event)}
         
        > {c} 
         
         </Avatar>
         </MuiThemeProvider>
                   
                  <Popper  open={this.state.open }  anchorEl={this.state.anchorEl}>
                        <Paper className='paper'>
                        <Card>
                              <div>
                              Welcome:   {localStorage.getItem('email')}
                              </div>
                              <Divider/>
                                  <div>
                                  Number of notes:{localStorage.getItem('Notes')}
                                  </div>
                                      <div>
                                      Number of Archived Notes:{localStorage.getItem('Archived')}
                                      </div>
                                          <div>
                                          Number of Pinned Notes:{localStorage.getItem('Pinned')}
                                          </div>
                                                <div>
                                                Number of notes with reminder:{localStorage.getItem('Reminder')}

                                                </div>
                                                <Divider/>
                                                  <div className='signoutbutton'>
                                                  <div>                                                          <button variant='extended'

                                                          onClick={event=>this.handleSignout(event)}

                                                          >

                                                          Sign Out

                                                       </button>
                                                       </div>

                                                  </div>
                                                  </Card>
                          </Paper>

                  </Popper>

         

</div>



        )
    }
  }
  export default Sign