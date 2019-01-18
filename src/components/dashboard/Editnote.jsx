import React, { Component } from 'react';
import {Dialog, InputBase, IconButton, Chip,ClickAwayListener, Card} from '@material-ui/core'
import Reminder from './Reminder';
import Colorpallate from './Colorpallate';
import Addimage from './Addimage';
import Archive from './Showarchived';
import More from './More';


class Editnotes extends Component{

  constructor()
  {
    super()
    this.state={
    
      title:'',
      Description:'',
      pinned:'',
      archived:'',
      reminder:'',
      trashed:'',

    }

  }
  
  onClose=()=>{
console.log('in close');
this.props.close()
    
    console.log('open--',this.state.open);
    
  }
render()
{
  return(
    < ClickAwayListener onClickAway = {
      () => this.onOutsideclick()
    } >
    <Dialog  open={this.props.open} fullWidth  >
    
    <Card className='incard'>

    <div className='pinbase'>
    <InputBase
  placeholder='title here'
    onClick={this.handleEdit}
    >
    </InputBase>
    <div>          <img src={require('../../assets/pin.svg')}/>
  
    </div>
    </div>
   
    
    <div>
    <InputBase
    placeholder='description'
     
   
    
    >
    </InputBase>
    <div>
       <Chip
       label='hello'
       onDelete={ () => this.handleReminderDelete(this.props.index) } 
     />
     </div>
  
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
</ ClickAwayListener>

  )
}

    }
    export default Editnotes
