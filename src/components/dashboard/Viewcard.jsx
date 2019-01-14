
import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';

class Viewcards extends Component{
    constructor()
    {
        super()
        this.state={
            view:false
        }

        
    }
    handleView=(event)=>
    {
        console.log('in handle view')
        event.preventDefault();
        this.setState({
            view:!this.state.view
        });
        this.props.appBartoviewprops();

    }
    render()
    {
        return(
            this.state.view?
            <div>
            <IconButton onClick={event=>this.handleView(event)}>
            <img src={require('../../assets/list.svg')}/>
            
            </IconButton>
            </div>
            :
            <div>
            <IconButton onClick={event=>this.handleView(event)}>
            <img src={require('../../assets/grid.svg')}/>
            
            </IconButton>
            
            
            </div>

        )
    }
}
export default Viewcards