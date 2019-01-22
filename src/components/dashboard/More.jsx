import React, {
  Component
} from 'react';
import { IconButton, Popper ,Paper, MenuItem,ClickAwayListener, InputBase, Menu, Popover, TextField} from '@material-ui/core';


class More extends Component{
    constructor()
    {
      super()
      this.state={
        open:false,
        anchorEl: null,
        label:false,
        trashed:false,
        
        labelvalue:'',
      }
      this.handlelabel=this.handlelabel.bind(this)
      this.setLabel=this.setLabel.bind(this)
    }
    
handleClick=event=>{
      const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !this.state.open,
      
    }));
  
  }

async handlelabel(){

  console.log("anchorEl be --" , this.state.anchorEl)
  console.log("label be  --" , this.state.label, this.state.open)
    await  this.setState(state=>({
      open:!this.state.open,
      anchorEl:this.state.anchorEl,
      label:!this.state.label
    }))
    console.log("anchorEl  --" , this.state.anchorEl)
    console.log("label   --" , this.state.label, this.state.open)
  }

 async  handleTrashnote(event){
      event.preventDefault();
      console.log('in handle today')
     await  this.setState({
        trashed:true
      })
      this.props.trash(this.state.trashed)
  }
async setLabel(event){
          
          console.log('in ste label--',this.state.labelvalue)
          event.preventDefault();
        
         await this.setState({
            arraylabel:this.state.labelvalue
          })
          console.log('array label--',this.state.arraylabel)
          this.props.notetolabel(this.state.arraylabel)
          this.setState({
            labelvalue:'',
          })

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
                zIndex:"435"
              }}>
                      <Paper className='more'>
                      <div className='t'>
                     
                      <div>
                      <MenuItem onClick={(event)=>this.handleTrashnote(event)} >Delete Note</MenuItem>
                      </div>
                    
                      <div className='tommorow'>
                      
                      <div>
                      <MenuItem onClick={(event)=>this.handlelabel(event)}>Add Label</MenuItem>
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
                
          <div className='labelpopper'>
          <div>
            <IconButton  onClick={(event)=>this.handleClick(event)}>
            <img src={require('../../assets/more.svg')}/>
            </IconButton>
            </div> 

              <div>             
              
              <Popper open={this.state.label} anchorEl={this.state.anchorEl} >
              <Paper className='more'>
              <div>
            <TextField 
            placeholder='enter label here'
            value = {
              this.state.labelvalue
            }
            onChange = {
              (event) => this.setState({
                labelvalue: event.target.value
              })
            }
            
            ></TextField>
              </div>
              <button onClick={(event)=>this.setLabel(event)}>
              Create label
              
              </button>
              
              </Paper>
              
             </Popper>
              </div>
</div>
              
   

// </ClickAwayListener>

            );
        }
        else
        {
          return ( <div>
          <IconButton  onClick={(event)=>this.handleClick(event)}>
          <img src={require('../../assets/more.svg')}/>
          </IconButton>
          </div> )
        }
      }
}
export default More