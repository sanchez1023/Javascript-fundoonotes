import React, {Component  } from "react";
import { Menu, MenuItem, ClickAwayListener, Card } from "@material-ui/core";



class More extends Component{
constructor()
{
super()
this.state={

}
}
onOutsideclick() {
    this.setState({
      open: false
    })
  }
render()
{
    return(
        <div className=' cardnotes'>   
        < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
    <Card className='cardMenu'>
        <Menu open={this.props.openmenu}
        //  id='simple-menu'
        >
<MenuItem> Delete Notes</MenuItem>
<MenuItem>Add Labels  </MenuItem>
<MenuItem> Add drawing</MenuItem>
</Menu>
</Card>
</ ClickAwayListener>
<Popper id={id} open={open} anchorEl={anchorEl} transition>
{({ TransitionProps }) => (
  <Fade {...TransitionProps} timeout={350}>
    <Paper>
      <Typography className={classes.typography}>The content of the Popper.</Typography>
    </Paper>
  </Fade>
)}
</Popper>

</div>



    )
}



}
 export default More