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
        <div className='displaycard'>   
        < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
    <Card>
        <Menu open={this.props.openmenu}>
<MenuItem> Delete Notes</MenuItem>
<MenuItem>Add Labels  </MenuItem>
<MenuItem> Add drawing</MenuItem>
</Menu>
</Card>
</ ClickAwayListener>

</div>



    )
}



}
 export default More