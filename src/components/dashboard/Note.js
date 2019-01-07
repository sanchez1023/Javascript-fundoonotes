
import
 React, {Component}from 'react'
import { Card, IconButton, Fab, InputLabel, InputAdornment, InputBase } from '@material-ui/core';

 class Note extends Component{



    render()
    {
        return(
            <div className='bar'>
            <card>
          <div className='title'>
          <IconButton>
   <InputBase
    placeholder='Take a note......                                         '>
   
   
   </InputBase>
   </IconButton>
   <div className='titlebuttons'>    <IconButton>
    <img src={require('../../assets/tick.svg')}/>
    </IconButton>
    <IconButton>
    <img src={require('../../assets/brush.svg')}/>
    </IconButton>
    <IconButton>    
    <img src={require('../../assets/image.svg')}/>
    </IconButton>
    </div>

    </div>

</card>
    <div>
    
    
    </div>
            </div>

            
            
  


        )
    }
 }
 export default Note