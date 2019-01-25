import React, {
    Component
  } from 'react';
  import { IconButton, Popper ,Paper, MenuItem,ClickAwayListener, InputBase, Menu, Popover, TextField} from '@material-ui/core';
  var userctr=require('../../controller/usercontroller')
  
  class Cardmore extends Component{
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
      
  handleClick(event,note,key){
        const { currentTarget } = event;
      this.setState(state => ({
        anchorEl: currentTarget,
        open: !this.state.open,
        
      }));
      console.log('note in more--',note)
      console.log('key in more--',key)

    
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
  
   async  handleTrashnote(event,note,key){
        event.preventDefault();
console.log('note in cardmore delete--',note)
console.log('key in cardmore delete--',key)
userctr.isTrashNote(key,note);
      
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
        <IconButton  onClick={(event)=>this.handleClick(event,this.props.note,this.props.index)}>
        <img src={require('../../assets/more.svg')}/>
        </IconButton>
        
        <div>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} style={{
                  zIndex:"435"
                }}>
                        <Paper className='more'>
                        <div className='t'>
                       {this.props.note?
                    
                    (
                        <div>
                        <div>
                        <MenuItem onClick={(event)=>this.handleTrashnote(event,this.props.note,this.props.index)} >Delete Note</MenuItem>
                        </div>
                        <div className='tommorow'>
                        
                        <div>
                        <MenuItem onClick={(event)=>this.handlelabel(event)}>Add Label</MenuItem>
                        </div>
                        </div>
                        </div>
                        
                    ):
                        <div>
                        <MenuItem onClick={(event)=>this.handlelabel(event)}>Add Label</MenuItem>
                        </div>
                    }
                          
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
  export default Cardmore