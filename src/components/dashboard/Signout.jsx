import React, {
    Component
  } from 'react';
import { Popper,ClickAwayListener,  Paper, Card, Fab, Divider, Avatar, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import firebase from '../../firebase'
import Signoutcard from './Cardsignout';

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
          if(option.Pinned === true  )
          {
            pinnedNotes=pinnedNotes+1;
            console.log('index--',index)
          
      }
localStorage.setItem('Pinned',pinnedNotes)
console.log('sign out pinned',pinnedNotes);
  });
                    var archivedNotes=0;
                    this.state.notes.map( (option, index) => {
                      if(option.Archived === true )
                      {
                        archivedNotes=archivedNotes+1;
                  }
                  console.log('sign out archive--',archivedNotes);
                  localStorage.setItem('Archived',archivedNotes)
                    });
                          var Notes=0;
                          this.state.notes.map( (option, index) => {
                            if((option.Trashed !== true && option.Archived !== true && option.Pinned !==true ))
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

                                 
                                        var labeled=0;
                                        this.state.notes.map( (option, index) => {
                                          if(option.Label !=='' )
                                          {
                                          labeled=labeled+1;
                                      }
                                      localStorage.setItem('Label',labeled)
                                      console.log('sign out Rnotes--l',labeled);
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
                        
                            <Signoutcard />
                                                <Divider/>
                                                  <div className='signoutbutton'>
                                                  <div>                                                          <button variant='extended'

                                                          onClick={event=>this.handleSignout(event)}

                                                          >

                                                          Sign Out

                                                       </button>
                                                       </div>

                                                  </div>
                                                  
                          </Paper>

                  </Popper>

         

</div>



        )
    }
  }
  export default Sign