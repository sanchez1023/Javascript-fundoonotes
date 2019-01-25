import React, { Component } from 'react';
import { IconButton ,Paper,Popper,Card,ClickAwayListener, Tooltip} from '@material-ui/core';
import { black } from 'material-ui/styles/colors';
import { darkBlack } from 'material-ui/styles/colors';
var userctr=require('../../controller/usercontroller')


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
        anchorEl:null,
        cardName:'',
        color:'',
    }
    this.handlecolor=this.handlecolor.bind(this)
    }
    onOutsideclick()
    {
      this.setState({
        open: false
      })
    }


  editColor(event,note,key){
           
            console.log('value of color',event.target.value)
            var color=event.target.value;
            console.log('value of key',key)
            console.log('value of color',note)
            userctr.setColor(color,note,key)
    }
    handlecolor=event=>
    {
        console.log('props',this.props.note);
        console.log('props',this.props.key);
        console.log('in handlecolor--',event.target.value)
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
    console.log('props',this.props.note);
    console.log('props',this.props.index);
    var array = colorPaletteClassName .map((option)=>{

return(
    this.props.note?
  ( <div>
      <Tooltip title={option.colorName}>
        <IconButton style ={{backgroundColor:option.colorCode,
            borderColor:darkBlack
        
        
        }}
        value={option.colorCode}
        onClick={(event)=>this.editColor(event,this.props.note,this.props.index)}
        
        >
        
        </IconButton>
        </Tooltip>
        </div>
  ):(
<div>
    <Tooltip title={option.colorName}>
    <IconButton style ={{backgroundColor:option.colorCode,
        borderColor:darkBlack
    
    
    }}
    value={option.colorCode}
    onClick={(event)=>this.handlecolor(event)}
    
    >
    
    </IconButton>
    </Tooltip>
    </div>

        )
    
    
    )}
    )
    
    return(
      
<div>
<IconButton onClick={(event)=>this.handleClick(event,this.props.note,this.props.index)}>
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

    )
}
}
export default Colorpallate