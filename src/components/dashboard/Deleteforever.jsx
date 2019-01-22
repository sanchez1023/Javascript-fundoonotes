import React, {
    Component
  } from 'react';
import { IconButton, Popper ,Paper,MenuItem} from '@material-ui/core';

  class  Forever extends Component{

constructor()
{
    super();
    this.state={
        trashed:true,
        open:false,
        anchorEl:null,
    }
}

handleClick=event=>{
    const { currentTarget } = event;
  this.setState(state => ({
    anchorEl: currentTarget,
    open: !this.state.open,
    
  }));

}

deletNote(){

    console.log('in delete forever')
}


restoreNotes()
{
    this.setState({
        trashed:false
    })
}
render( )
{
  
    return(
     
<div>
<IconButton  onClick={(event)=>this.handleClick(event)}>
<img src={require('../../assets/more.svg')}/>
</IconButton>

<div>
      <Popper open={this.state.open} anchorEl={this.state.anchorEl} style={{
        zIndex:"453"
      }}>
              <Paper className='more'>
              <div className='t'>
             
              <div>
              <MenuItem onClick={(event)=>this.deleteNote(event)} >Delete Forever</MenuItem>
              </div>
            
              <div className='tommorow'>
              
              <div>
              <MenuItem onClick={(event)=>this.restoreNotes(event)}>Restore </MenuItem>
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