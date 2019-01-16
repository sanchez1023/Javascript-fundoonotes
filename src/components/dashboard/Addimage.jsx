import React, { Component } from 'react';
import { IconButton ,Paper,Popper,Card,ClickAwayListener} from '@material-ui/core';
class  Addimage extends Component{

    constructor()
    {
    super()
    this.state={
        open:false,
        anchorEl:null
    }
    }
    handleClick=event=>{
        const { currentTarget } = event;
      this.setState(state => ({
        anchorEl: currentTarget,
        open: !this.state.open,
      }));
    }
    onOutsideclick()
{
  this.setState({
    open: false
  })
}
render()
{
    return(
        < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
<div>
<IconButton onClick={(event)=>this.handleClick(event)}>
<img src={require('../../assets/image.svg')}/>
</IconButton>
<Card>
<Popper open={this.state.open} anchorEl={this.state.anchorEl}>
        <Paper className='reminder'>
<h>add image</h>

        </Paper>
        </Popper></Card>
</div>
</ ClickAwayListener>
    )
}
}
export default Addimage