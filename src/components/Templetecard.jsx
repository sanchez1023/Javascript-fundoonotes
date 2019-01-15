
   import React, { Component } from 'react';
import { InputBase ,Card,Dialog,IconButton} from '@material-ui/core';
import More from './test';
import Editnotes from './dashboard/Editnote';
import Reminder from './dashboard/Reminder';
   
  export default class Templetecard extends Component{

    constructor()
    {
        super()
        this.state={
            

        }
    }
    render()
    {
        console.log('Display', this.props.Display);
        
        return(
          <div>
            <Card className='cardnotes'>
            <div>
            <InputBase
            defaultValue={this.props.Display.Title}
            >
            
            
            </InputBase>
            </div>
            <div>
            <InputBase
            
             
            defaultValue={this.props.Display.Description}

            
            >
            <Dialog open={this.state.open}></Dialog>
            
              
            </InputBase>
            </div>
            <toolbar>
            <Reminder/>
            
            <IconButton
            onClick={event => this.addAccount(event)}> 
            
            <
            img src = {
              require('../assets/account.svg')
            }
            /> 
             </IconButton>
            
            <IconButton 
            onClick={event => this.handleColor(event)}>
            
            
            
            <img src = {
              require('../assets/colorplate.svg')
            }
            />
            </IconButton>
            
            
            <IconButton 
            onClick={event => this.handleImage(event)}>
            
            <img src = {
              require('../assets/image.svg')
            }
            /> 
            </IconButton>
            
            
            <IconButton
            onClick={event => this.handleArchive(event)}>
            
            
            
            <img src = {
              require('../assets/archive.svg')
            }
            
            /> 
            </IconButton>
            
            <More/>
            <IconButton style = {
              {
                marginLeft: '100px'
              }
            } >
            
            
            </IconButton>
            
            </toolbar>
            <More openmenu={this.state.more}/>
            <Editnotes/>
            
            </Card>

</div>

        )
    }

    
  }
  // export default Templetecard;