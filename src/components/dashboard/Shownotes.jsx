import React, { Component } from 'react';
import { Card, TextField,IconButton, Input, InputBase } from '@material-ui/core';


class Showcards extends Component{


    constructor()
    {
        super()
        
    }

    render()
    {
        return(
            <div className='showcards'>
            <Card className='cardnotes'>
            <div>
            <InputBase
            defaultValue='abc'
            >
            
            
            </InputBase>
            </div>
            <div>
            <InputBase
            defaultValue='abc'
            
            >
              
            </InputBase>
            </div>
            <toolbar>
            < IconButton
            onClick={event => this.handleReminder(event)}>
            
          
            
            <img src = {
              require('../../assets/reminderalarm.svg')
            }
            /> 
             </IconButton>
      
      
            < IconButton
            onClick={event => this.addAccount(event)}> 
           
            <
            img src = {
              require('../../assets/addaccount.svg')
            }
            /> 
             </IconButton>
      
            <IconButton 
            onClick={event => this.handleColor(event)}>
            
            
            
            <img src = {
              require('../../assets/colorplate.svg')
            }
            />
            </IconButton>
      
      
            <IconButton 
            onClick={event => this.handleImage(event)}>
            
            <img src = {
              require('../../assets/image.svg')
            }
            /> 
            </IconButton>
      
      
            <IconButton
            onClick={event => this.handleArchive(event)}>
            
            
           
            <img src = {
              require('../../assets/archive.svg')
            }
      
            /> 
            </IconButton>
      
      
            <IconButton >
            
            
            <img src = {
              require('../../assets/more.svg')
            }
            /> 
             </IconButton > <IconButton style = {
              {
                marginLeft: '100px'
              }
            } >
            
            
            </IconButton>
        
            </toolbar>
          
            
            
            </Card>

            </div>

        )
    }
}
export default Showcards