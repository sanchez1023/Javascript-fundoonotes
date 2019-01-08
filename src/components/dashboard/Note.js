
import
 React, {Component}from 'react'
import { Card, IconButton, Fab, InputLabel, InputAdornment, InputBase, Tooltip, TextField, ClickAwayListener } from '@material-ui/core';

 class Note extends Component{
     constructor()
     {
         super();
         this.state={
        open:false,


         }
     }
handleToogle(){
    console.log(this.state.open)
    console.log('in handle toogle');
this.setState({open:!this.state.open})
    //console.log(this.state.open)

}
onOutsideclick(){
    this.setState({open:false})
}

    render()
    {
        return(!this.state.open?
        
            <div className='area'>
            
            <Card className='bar'>
          <div className='title'>
        
          <div className ='inputbase'>
   <InputBase
   onClick={()=>this.handleToogle()}
    placeholder=' Take a note......'>
   
   
   </InputBase></div>
  
   <div className='titlebuttons'>    <IconButton>
   <Tooltip title='new note'>
    <img src={require('../../assets/tick.svg')}/>
    </Tooltip>
    </IconButton>
    <IconButton>
    <Tooltip title=" new   note  with  drawing">
    <img src={require('../../assets/brush.svg')}/>
    </Tooltip>
    </IconButton>
    <IconButton>    
    <Tooltip title=' new  note  with  image'>
    <img src={require('../../assets/image.svg')}/>
    </Tooltip>
    </IconButton>
    </div>

     </div>
     
    </Card   >
    </div>

:
    <div className='area'>
    <ClickAwayListener
   onClickAway={()=>this.onOutsideclick()}>
   
    <Card className ='inputcard' 
    
    
    
   
   >    <div className='createnote'>
    <InputBase
    color='inherit'
    placeholder='Title' >
  
    
    </InputBase>
    <IconButton
    style={{marginLeft:'250px'}}
    >
    <Tooltip title='Pin notes'>
    <img src={require("../../assets/pin.svg")}/>
    </Tooltip>
    </IconButton>
   
    </div>
    <InputBase
    placeholder='Take a note'
    
    >
    </InputBase>


    <toolbar>
    <IconButton>
    <Tooltip title='Remind me'>
    <img src={require('../../assets/reminderalarm.svg')}/>
    </Tooltip>
    </IconButton>


    <IconButton>
    <Tooltip title='Collaborator'>
    <img src={require('../../assets/addaccount.svg')}/>
    </Tooltip>
    </IconButton>

    <IconButton>
    <Tooltip title='change color'>
    <img src={require('../../assets/colorplate.svg')}/>
    </Tooltip>
    </IconButton>


    <IconButton>
    <Tooltip title='Add image'>
    <img src={require('../../assets/image.svg')}/>
    </Tooltip>
    </IconButton>


    <IconButton>
    <Tooltip title='Archive'>
    <img src={require('../../assets/archive.svg')}/>
    </Tooltip>
    </IconButton>


    <IconButton>
    <Tooltip title='more'>
    <img src={require('../../assets/more.svg')}/>
    </Tooltip>
    </IconButton >
    <IconButton style={{marginLeft:'100px'}}>
    Close
    
    </IconButton>

    </toolbar>
 

    </Card>
    </ClickAwayListener>
    
    </div>
            


        )
    }
 }
 export default Note