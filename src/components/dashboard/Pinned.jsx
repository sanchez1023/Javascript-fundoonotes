
import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';

class Pinned extends Component{
    constructor()
    {
        super()
        this.state={
            pin:false
        }

        this.handleView=this.handleView.bind(this)
    }
   async handleView()
    {
        console.log('in handle view',this.state.pin)
        
       await  this.setState({
            pin:!this.state.pin
        });
    console.log('pinned--',this.state.pin)
    this.props.handlePin(this.state.pin)

    }
    render()
    {
        return(
            this.state.pin?
            <div>
            <IconButton onClick={this.handleView}>
            <img src={require('../../assets/pinned.svg')}/>
            
          
            
            </IconButton>
            </div>
            :
            <div>
            <IconButton onClick={this.handleView}>
            <img src={require('../../assets/pin.svg')}/>
            </IconButton>
            
            
            </div>

        )
    }
}
export default Pinned