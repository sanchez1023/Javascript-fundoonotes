import React, { Component } from 'react';
import { Card, IconButton,  InputBase, Divider } from '@material-ui/core';
import More from './More';
var userctr=require('../../controller/usercontroller')


class Showtrashed extends Component{
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
{
    let tempTrashedArray = this.state.notes.map( (option, index) => {
        if(option.Pinned === false && option.Trashed === true && option.Archived === false )
        {
          
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
    
    
          <IconButton
          onClick={event =>this.openMore(event)} >
          
          
          <img src = {
            require('../../assets/more.svg')
          }
          /> 
          
           </IconButton > <IconButton style = {
            {
              marginLeft: '100px'
            }
          } >
          
          
          </IconButton>
      
          </toolbar>
          <More openmenu={this.state.more}/>
         
          
          </Card>
          </div> )
        }
      })

    return(
<div className='showcards'> 
<h>Trashed</h>
            {tempTrashedArray}
            </div>
    )
}
}
export default Showtrashed