import React, { Component } from 'react';
import { IconButton ,Paper,Popper,Card,ClickAwayListener} from '@material-ui/core';


const colorPaletteClassName = [
    {
    colorCode: "rgb(255, 255, 255)",
    colorName: "White"
    },
    {
    colorCode: "rgb(242, 139, 130)",
    colorName: "Red"
    },
    {
    colorCode: "rgb(215, 174, 251)",
    colorName: "Purple"
    },
    {
    colorCode: "rgb(255, 192, 203)",
    colorName: "Pink"
    },
    {
    colorCode: "rgb(167, 255, 235)",
    colorName: "Teal"
    },
    {
    colorCode: "rgb(251, 188, 4)",
    colorName: "Orange"
    },
    {
    colorCode: "rgb(174, 203, 250)",
    colorName: "Dark Blue"
    },
    {
    colorCode: "rgb(232, 234, 237)",
    colorName: "Gray"
    },
    {
    colorCode: "rgb(203, 240, 248)",
    colorName: "Blue"
    },
    {
    colorCode: "rgb(230, 201, 168)",
    colorName: "Brown"
    },
    {
    colorCode: "rgb(255, 255, 0)",
    colorName: "Yellow"
    },
    {
    colorCode: "rgb(204, 255, 144)",
    colorName: "Green"
    }
    ]



class  Colorpallate extends Component{

    constructor()
    {
    super()
    this.state={
        open:false,
        anchorEl:null
    }
    }
    onOutsideclick()
    {
      this.setState({
        open: false
      })
    }
    handleClick=event=>{
        const { currentTarget } = event;
      this.setState(state => ({
        anchorEl: currentTarget,
        open: !this.state.open,
      }));
    }
render()
{
    return(
        < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
<div>
<IconButton onClick={(event)=>this.handleClick(event)}>
<img src={require('../../assets/colorplate.svg')}/>
</IconButton>
<Card>
<Popper open={this.state.open} anchorEl={this.state.anchorEl}>
        <Paper className='reminder'>
<h>color pallate</h>

        </Paper>
        </Popper></Card>
</div>
</ ClickAwayListener>
    )
}
}
export default Colorpallate