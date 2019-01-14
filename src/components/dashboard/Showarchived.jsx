import React, { Component } from 'react';
import { Card, IconButton,  InputBase, Divider } from '@material-ui/core';
import More from './More';
var userctr=require('../../controller/usercontroller')


class Showarchived extends Component{
    constructor()
    {   super()
        this.state={
            notes:[],
        }
    }

    async componentDidMount() {
    
        var notesValue =await userctr.add();
        console.log('notes--',notesValue)
        this.setState({
          notes : notesValue
        }) 
}

render ()
{ var archivedNotes=0;
    let tempArchivedArray = this.state.notes.map( (option, index) => {
        if(option.Pinned === false && option.Trashed === false && option.Archived === true )
        {
          archivedNotes=archivedNotes+1;
          
          return( 
            
            <div>
          
            <Card className='cardnotes'>
          <div>
          <InputBase
          defaultValue={option.Title}
          >
          
          
          </InputBase>
          </div>
          <div>
          <InputBase
          defaultValue={option.Description}
          
          >
            
          </InputBase>
          </div>
          <toolbar>
          < IconButton
          onClick={event => this.handleReminder(event)}>
          
        
          
          <img src = {
            require('../../assets/reminderalarm.svg')
          }
          /> 
           </IconButton>
    
    
          < IconButton
          onClick={event => this.addAccount(event)}> 
         
          <
          img src = {
            require('../../assets/addaccount.svg')
          }
          /> 
           </IconButton>
    
          <IconButton 
          onClick={event => this.handleColor(event)}>
          
          
          
          <img src = {
            require('../../assets/colorplate.svg')
          }
          />
          </IconButton>
    
    
          <IconButton 
          onClick={event => this.handleImage(event)}>
          
          <img src = {
            require('../../assets/image.svg')
          }
          /> 
          </IconButton>
    
    
          <IconButton
          onClick={event => this.handleArchive(event)}>
          
          
         
          <img src = {
            require('../../assets/archive.svg')
          }
    
          /> 
          </IconButton>
    
    
       <More/>
          </toolbar>
     
         
          
          </Card>
          </div> )
        }
        console.log('length of  archived array',archivedNotes)
      })

      
     
    return(
<div className='showcards'> 
<h>Archived</h>
            {tempArchivedArray}
            </div>
    )
}
}
export default Showarchived