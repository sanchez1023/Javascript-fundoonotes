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
 async handleClick(){

  await this.setState({
    archive:!this.props.valueofarchive
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


