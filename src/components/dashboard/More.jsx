import React, {
  Component
} from 'react';
import { IconButton, Popper ,Paper, MenuItem,ClickAwayListener, InputBase, Menu, Popover} from '@material-ui/core';


class More extends Component{
    constructor()
    {
        super()
        this.state={
open:false,
anchorEl: null,
label:false,
trashed:false,
arraylabel:[],
labelvalue:'',
        }
        this.handlelable=this.handlelable.bind(this)
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
      label:!this.state.label
    }))
    console.log("anchorEl  --" , this.state.anchorEl)
    console.log("label   --" , this.state.label)
  }

 async  handleTrashnote(event){
      event.preventDefault();
      console.log('in handle today')
     await  this.setState({
        trashed:true
      })
      this.props.trash(this.state.trashed)
  }
setlabel(event){
  var array=[];
  event.preventDefault();
  array.push(this.state.labelvalue)
  this.setState({
    arraylabel:array
  })
  console.log('array label--',this.state.arraylabel)
  this.props.notetolabel(this.state.arraylabel)

}


  onOutsideclick() {
    this.setState({
      open: false
    })
  }

    render( )
        {


          
          if(this.state.label===false){
            return(
              // <ClickAwayListener onClickAway = {
              //   () => this.onOutsideclick()
              // } >

<div>
      <IconButton  onClick={(event)=>this.handleClick(event)}>
      <img src={require('../../assets/more.svg')}/>
      </IconButton>
      
      <div>
              <Popper open={this.state.open} anchorEl={this.state.anchorEl} style={{
                zIndex:"10"
              }}>
                      <Paper className='more'>
                   
            
                      <div className='t'>
                     
                      <div>
                      <MenuItem onClick={(event)=>this.handleTrashnote(event)} >Delete Note</MenuItem>
                      </div>
                    
                      <div className='tommorow'>
                      
                      <div>
                      <MenuItem onClick={(event)=>this.handlelable(event)}>Add Label</MenuItem>
                      
                      </div>
                 
                      </div>
                      </div>
                    
               
                  
                      
                      
                      </Paper>





              </Popper>
              </div>
              </div>
            );
            }
            else if(this.state.label===true) {

              return(


              <div className='popper'>             
              
              <Popover  open={this.state.label} anchorEl={this.state.anchorEl} >
              <Paper className='more'>
              <div>
              <InputBase
              placeholder='Enter label here'
              value={this.state.arraylabel}
              onChange = {
                (event) => this.setState({
                  labelvalue: event.target.value
                })
              }
              
              >
              
              
              </InputBase>
              </div>
              <button onClick={this.setLabel}>
              Create label
              
              </button>
              
              </Paper>
              
             </Popover>
              </div>

              
   

// </ClickAwayListener>

            );
        }
      }
}
export default More