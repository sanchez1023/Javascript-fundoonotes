import React, {Component  } from "react";
import { Menu, MenuItem, ClickAwayListener, Card,Popper,Paper,Typography,Fade, IconButton } from "@material-ui/core";



class More extends Component{
constructor()
{
super()
this.state = {
  anchorEl: null,
  open: false,
  placement: null,
}


}
handleClick=placement=>event=>{
  console.log('in popper handle click')
  const { currentTarget } = event;
  this.setState ({
    anchorEl: currentTarget,
    open: this.state.placement !== this.state.placement || !this.state.open,
      placement,
  });
  console.log('state',this.state.open)
  console.log('anchor el',this.state.anchorEl)
};


onOutsideclick() {
    this.setState({
      open: false
    })
  }
render()
{
  const { anchorEl, open, placement } = this.state;
  

    return(
        <div >   
        < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >


<IconButton
onClick={this.handleClick('right')}
>
<img src = {
  require('../../assets/more.svg')
}
/> 
</IconButton>
<Popper   open={open }  anchorEl={anchorEl} placement={placement}>

{({ TransitionProps }) => (
  <Fade {...TransitionProps} timeout={3500}>
    <Paper>
    
  <Menu>
  <MenuItem>sgasas</MenuItem>
  <MenuItem>sgasas</MenuItem>
  </Menu>
    </Paper>
  </Fade>
)}
</Popper>
</ ClickAwayListener>
</div>



    )
}



}
 export default More