import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Typography, Menu, InputBase, Icon, Fab, Drawer } from '@material-ui/core';

import {MailIcon} from '@material-ui/icons/Mail'
class Dashboard extends Component{

render (){
return (
<div className='header'>
<AppBar position='relative' color='white'>
<Toolbar>
<Fab size="small" aria-label="main menu" role='button '>
<img src={require('../assets.js/menuIcon.svg')}/>
</Fab>
<img src={require('../assets.js/download.png')}  />

<Typography color='white' variant='h6'>
Fundoo 
</Typography>
<Icon menubar/>
<Fab size='small'  aria-label="Search" role="button" aria-hidden='false' >
<img src={require('../assets.js/search.svg')}/>
</Fab>


<search/>
<InputBase className='search'
  placeholder="Search… for  notes"
/>   



<div className='refresh'>
<Fab className='fab'  size='small'aria-label="Search" role="button" >
<img src={require('../assets.js/refresh.svg')}/>
</Fab>
</div>
<div className='setting'>
<Fab size='small' aria-label='settings' role='button'>
<img src=  {require('../assets.js/settings.svg')}/>
</Fab>
</div>
<div className='account'>
<Fab size='small' aria-label='account' role='button'>
<img src={require('../assets.js/account.svg')}/>
</Fab>
</div>
<Drawer>

</Drawer>
</Toolbar>

</AppBar>

</div>



);

}

}
export default Dashboard