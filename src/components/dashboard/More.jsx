import React, {
  Component
} from 'react';
import { IconButton, Popper ,Paper,Card, MenuItem,ClickAwayListener} from '@material-ui/core';


class More extends Component{
    constructor()
    {
        super()
        this.state={
open:false,
anchorEl: null,
        }
    }
    handleClick=event=>{
      const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !this.state.open,
    }));
  
  }

  handleToday=event=>{
      event.preventDefault();
      console.log('in handle today')
  }
  onOutsideclick() {
    this.setState({
      open: false
    })
  }

    render(  )
        {
            return(
              <ClickAwayListener onClickAway = {
                () => this.onOutsideclick()
              } >



      <IconButton  onClick={(event)=>this.handleClick(event)}>
      <img src={require('../../assets/more.svg')}/>
      </IconButton>
      <Card>
              <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                      <Paper className='reminder'>
                    
            
                      <div className='tommorow'>
                      
                      <div>
                      <MenuItem onClick={(event)=>this.handleToday(event)} >Delete Note</MenuItem>
                      </div>
                      </div>
                      <div className='tommorow'>
                      
                      <div>
                      <MenuItem>Add Label</MenuItem>
                      </div>
                      </div>
               
                      
                      
                      
                      </Paper>





              </Popper>
              </Card>

   
</ClickAwayListener>

            )
        }
  
}
export default More