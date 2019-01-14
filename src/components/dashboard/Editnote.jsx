import React, { Component } from 'react';
import {Dialog, InputBase, IconButton, Toolbar} from '@material-ui/core'

class Editnotes extends Component{

  constructor()
  {
    super()

  }
render()
{
  return(
    <Dialog>
    <div>
<InputBase
placeholder='title here'
>


</InputBase>
<IconButton>
<img src={require('../../assets/pin.svg')}/>

</IconButton>
</div>
<InputBase
placeholder='description here'
>
<Toolbar>
<IconButton>
<img src={require('../../assets/reminderalarm.svg')}/>
</IconButton>


</Toolbar>


</InputBase>
   
       
           
      
     
    
   
</Dialog>
  )
}

    }
    export default Editnotes
