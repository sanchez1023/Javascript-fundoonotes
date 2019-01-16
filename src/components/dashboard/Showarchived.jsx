import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';

class  Archive extends Component{

constructor()
{
  super();
  this.state={
    archive:false

  }
}
handleClick=event=>{

  this.setState({
    archive:true,
  })
}



render()
{
  return(

<div>
<IconButton onClick={(event)=>this.handleClick(event)}>
<img src={require('../../assets/archive.svg')}/>
</IconButton>

</div>

  )
}

}
export default  Archive


