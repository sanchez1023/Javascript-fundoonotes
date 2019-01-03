import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Typography, Menu, InputBase, Icon, Fab, Paper, SwipeableDrawer, List, ListItem, ListSubheader, Divider, Tooltip } from '@material-ui/core';
import Sidemenu from './menu';


class Dashboard extends Component{
 
  constructor(props) {
    super(props);
    this.state={
      open:false,
      close:true


    };

  }
handleDrawer=()=>{
  console.log('in hadle drawer')
    this.setState({open:!this.state.open });
    // this.setState({close:true});
  }
  

  

render (){
  
return (
  <div>
<div className='header'>
<AppBar position='relative' color='white'>
<Toolbar>



<IconButton className='fab'size="small" aria-label="main menu" role='button '
onClick={()=>this.handleDrawer()}
>
<img src={require('../assets.js/menuIcon.svg')}/>
</IconButton>
<img src={require('../assets.js/download.png')}  />



<Typography color='inherit' variant='h6'>
Fundoo 
</Typography>



<div className='sea'>
<IconButton size='large'  color='white' aria-label="Search" role="button" aria-hidden='false' >
<img src={require('../assets.js/search.svg')}/>
</IconButton>


<InputBase className='search' 

  placeholder="Search… for  notes"
/>   
</div>


<div className='refresh'>
<IconButton className='fab' variant='round' size='small'aria-label="Search" role="button" color='inherit'>
<Tooltip title="Refresh"> 
<img src={require('../assets.js/refresh.svg')}/>
</Tooltip>
</IconButton>
</div>



<div className='listview'>
<IconButton className='fab' variant='round' size='small'aria-label="Search" role="button" color='inherit'>
<img src={require('../assets.js/list.svg')}/>
</IconButton>
</div>

<div className='setting'>
<IconButton size='small' className='fab' aria-label='settings' role='button' color='default'>
<img src=  {require('../assets.js/settings.svg')}/>
</IconButton>
</div>


<div className='account'>
<IconButton size='medium' aria-label='account' role='button'>
<img src={require('../assets.js/account.svg')}/>
</IconButton>
</div>





</Toolbar>

</AppBar>
</div>
<Sidemenu/>

</div>


);

}

}
export default Dashboard