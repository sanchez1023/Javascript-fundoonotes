import React, { Component } from 'react';
import {Dialog, InputBase, IconButton, Chip,ClickAwayListener, Card} from '@material-ui/core'
import Reminder from './Reminder';
import Colorpallate from './Colorpallate';
import Addimage from './Addimage';
import Archive from './Showarchived';
import More from './More';
import Pinned from './Pinned';
var userctr=require('../../controller/usercontroller')


class Editnotes extends Component{

  constructor()
  {
    super()
    this.state={
    
      title:'',
      Description:'',
      pinned:false,
      archived:false,
      reminder:'',
      trashed:false,

    }

  }

  editArchive(archiveValue)
  {
    if(archiveValue)
    this.setState({
        archived:archiveValue,
        pinned:false,
        trashed:false
    })
  }
  
  onClose=()=>{
      console.log('in close');
      this.props.close()
          
          console.log('open--',this.state.open);
          
  }
render()
{
  
 
  return(
  
    <Dialog  open={this.props.open} fullWidth  >
    
    <Card className='incard'
    style={{backgroundColor:this.props.note.Color}}
    >

    <div className='pinbase'>
    <InputBase
  defaultValue={this.props.note.Title}
    onClick={this.handleEdit}
    >
    </InputBase>
   <Pinned/>
    </div>
   
    
    <div>
            <InputBase
            defaultValue={this.props.note.Description}
            >
            </InputBase>
            {this.props.note.Reminder===''?(
              <div>
              </div>
            ) : ( 
              <div>
             <Chip
                        label={this.props.note.Reminder}
                        onDelete={ () => this.handleReminderDelete(this.props.index) } 
                      />
  
     </div>
     )}
    </div>
  
    
      
  
  
    <toolbar className='toolbar'>
   < Reminder/>
    
    <IconButton
    onClick={event => this.addAccount(event)}> 
    
    <
    img src = {
      require('../../assets/addaccount.svg')
    }
    /> 
     </IconButton>
    
    < Colorpallate/>
    
    
  <Addimage/>
    
  <Archive/>
    
 <More/>
  
    
  <IconButton onClick={this.onClose}>
    
    close
  
    </IconButton>
    
    </toolbar>
  



  
  </Card>
   
   
</Dialog>


  )
}

    }
    export default Editnotes
