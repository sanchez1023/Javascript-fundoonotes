import React, {
    Component
  } from 'react';
import { IconButton, Popper ,Paper,MenuItem} from '@material-ui/core';
var userctr=require('../../controller/usercontroller')

  class  Forever extends Component{

constructor()
{
    super();
    this.state={
        trashed:true,
        open:false,
        anchorEl:null,
    }
    this.deleteNote=this.deleteNote.bind(this)
}

handleClick(event,note,key){
    const { currentTarget } = event;
  this.setState(state => ({
    anchorEl: currentTarget,
    open: !this.state.open,
    
  }));
  console.log('note in open forever',note)
  console.log('key in open forever',key)

}

deleteNote(event,note,key){

    console.log('in delete forever',note,key)
    console.log('in delete forever',key)
    userctr.deleteNote(key,note);
}


restoreNotes(event,note ,key)
{
    console.log('in delete forever',note,key)
    console.log('in delete forever',key)
    userctr.isTrashNote(key,note)
}
render( )
{
    console.log('in delete ',this.props.key)
  
    return(
     
<div>
<IconButton  onClick={(event)=>this.handleClick(event,this.props.note,this.props.index)}>
<img src={require('../../assets/more.svg')}/>
</IconButton>

<div>
      <Popper open={this.state.open} anchorEl={this.state.anchorEl} style={{
        zIndex:"453"
      }}>
              <Paper className='more'>
              <div className='t'>
             
              <div>
              <MenuItem onClick={(event)=>this.deleteNote(event,this.props.note,this.props.index)} >Delete Forever</MenuItem>
              </div>
            
              <div className='tommorow'>
              
              <div>
              <MenuItem onClick={(event)=>this.restoreNotes(event,this.props.note,this.props.index)}>Restore </MenuItem>
              </div>
              </div>
              </div>
              </Paper>
      </Popper>
      </div>
      </div>)

}
  }
 
  export default Forever