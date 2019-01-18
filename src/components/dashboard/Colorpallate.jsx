import React, { Component } from 'react';
import { IconButton ,Paper,Popper,Card,ClickAwayListener, Tooltip} from '@material-ui/core';
import { black } from 'material-ui/styles/colors';


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

    handlecolor(event)
    {
        this.props.notetocolor(event.target.value)
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
    
    var array = colorPaletteClassName .map((option,index)=>{

return(
    <Tooltip title={option.colorName}>
        <IconButton style ={{backgroundColor:option.colorCode,
            borderColor:black
        
        
        }}
        
        onClick={this.hadleColor}
        >
        
        </IconButton>
        </Tooltip>)
    
    })
    
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
        <Paper className='colorpaper'>
<div className='colorpalate'>
{array}
</div>
        </Paper>
        </Popper></Card>
</div>
</ ClickAwayListener>
    )
}
}
export default Colorpallate