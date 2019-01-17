import React, {
  Component
} from 'react';
import { IconButton, Popper ,Paper,Card, MenuItem,ClickAwayListener, InputBase} from '@material-ui/core';


class More extends Component{
    constructor()
    {
        super()
        this.state={
open:false,
anchorEl: null,
label:false,
trashed:false
        }
    }
    handleClick=event=>{
      const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !this.state.open,
      
    }));
  
  }
  handlelable=event=>{
    const{currentTarget}=event;
    this.setState(state=>({

      anchorEl:currentTarget,
      label:!this.state.label,
    }))
  }

 async  handleTrashnote(event){
      event.preventDefault();
      console.log('in handle today')
     await  this.setState({
        trashed:true
      })
      this.props.trash(this.state.trashed)
  }



  onOutsideclick() {
    this.setState({
      open: false
    })
  }

    render(  )
        {
            return(
              // <ClickAwayListener onClickAway = {
              //   () => this.onOutsideclick()
              // } >

<div>
      <IconButton  onClick={(event)=>this.handleClick(event)}>
      <img src={require('../../assets/more.svg')}/>
      </IconButton>
      
      <div>
              <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                      <Paper className='reminder'>
                    
            
                      <div className='tommorow'>
                      
                      <div>
                      <MenuItem onClick={(event)=>this.handleTrashnote(event)} >Delete Note</MenuItem>
                      </div>
                      </div>
                      <div className='tommorow'>
                      
                      <div>
                      <MenuItem onClick={(event)=>this.handlelable(event)}>Add Label</MenuItem>
                      </div>
                      </div>
               
                      
                      
                      
                      </Paper>





              </Popper>
              </div>
              <div>              <Popper open={this.state.label} anchorEl={this.state.anchorEl} >
              <Paper>
              <InputBase
              placeholder='Enter label here'
              
              >
              
              
              </InputBase>
              
              
              </Paper>
              
              </Popper>
              </div>

              
   </div>

// </ClickAwayListener>

            )
        }
  
}
export default More