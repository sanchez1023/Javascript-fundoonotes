import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, MuiThemeProvider, InputBase, Tooltip,createMuiTheme } from '@material-ui/core';
import Sidemenu from './Menu';


const theme=createMuiTheme({
  overrides:{
    MuiToolbar:
    {
      root:{
      display: "flex",
      position: "relative",
      justifyContent:'space-between'
  },
    
}
  }
  })

class Dashboard extends Component{
 
  constructor() {
    super();
    this.state={
      open:false,
      close:true


    };
   
  }
  
handleDrawer(){
  console.log('in hadle drawer')
    this.setState({open:!this.state.open });
    
  }
  

  

render (){
  
return (
  <MuiThemeProvider theme ={theme}>

  <div>
<div className='header'>
<AppBar position='fixed' color='white'>
<Toolbar>

<div className='logoandmenu'>

<IconButton className='fab'size="small" aria-label="main menu" role='button '
onClick={()=>this.handleDrawer()}
>
<Tooltip title='main menu'>
<img src={require('../../assets/menuIcon.svg')}/>
</Tooltip>
</IconButton>

<div className='noteicon'>
<img src={require('../../assets/download.png')}  />



<Typography color='inherit' variant='h6'>
Fundoo  Notes
</Typography>
</div>
</div>



<div className='sea'>
<IconButton size='large' id='searchButton'  color='white' aria-label="Search" role="button" aria-hidden='false' >
<Tooltip title='search'>
<img src={require('../../assets/search.svg')}/>
</Tooltip>
</IconButton>


<InputBase className='search' 

  placeholder="Search… for  notes"
/>   
</div>
<div className='button'>
<div className='refresh'>
<IconButton className='fab' variant='round' size='small'aria-label="Search" role="button" color='inherit'>
<Tooltip title="Refresh"> 
<img src={require('../../assets/refresh.svg')}/>
</Tooltip>
</IconButton>
</div>



<div className='listview'>
<IconButton className='fab' variant='round' size='small'aria-label="Search" role="button" color='inherit'>
<img src={require('../../assets/list.svg')}/>
</IconButton>
</div>

<div className='setting'>
<IconButton size='small' className='fab' aria-label='settings' role='button' color='default'>
<Tooltip title='settings'>
<img src=  {require('../../assets/settings.svg')}/>
</Tooltip>
</IconButton>
</div>


<div className='account'>
<IconButton size='medium' aria-label='account' role='button'>
<img src={require('../../assets/account.svg')}/>
</IconButton>

</div>
</div>





</Toolbar>

</AppBar>
</div>
<Sidemenu parentProps={this.state.open}/>

</div>
</MuiThemeProvider>


);

}

}
export default Dashboard