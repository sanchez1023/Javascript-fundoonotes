import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, MuiThemeProvider, InputBase, createMuiTheme } from '@material-ui/core';
import Sidemenu from './Menu';
import Sign from './Signout';
import firebase from '../../firebase' /**import fire base */


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
      close:true,
      menu:false,
      name:"",


    };
   
  }
  openDailog()
  {
    console.log("in sign out function");
  
      

this.setState({

  menu:true,
})
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

<IconButton className='fab'size="small"role='button '
onClick={()=>this.handleDrawer()}
>
<img src={require('../../assets/menuIcon.svg')}/>
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
<img src={require('../../assets/search.svg')}/>
</IconButton>


<InputBase className='search' 

  placeholder="Search… for  notes"
/>   
</div>
<div className='button'>
<div className='refresh'>
<IconButton className='fab' variant='round' size='small'aria-label="Search" role="button" color='inherit'>
<img src={require('../../assets/refresh.svg')}/>
</IconButton>
</div>



<div className='listview'>
<IconButton className='fab' variant='round' size='small'aria-label="Search" role="button" color='inherit'>
<img src={require('../../assets/list.svg')}/>
</IconButton>
</div>

<div className='setting'>
<IconButton size='small' className='fab' aria-label='settings' role='button' color='default'>
<img src=  {require('../../assets/settings.svg')}/>
</IconButton>
</div>


<div className='account'>
<IconButton size='medium' aria-label='account' role='button'
onClick={event=>this.openDailog(event)}


>
<img src={require('../../assets/account.svg')}/>
</IconButton>


</div>
</div>





</Toolbar>

</AppBar>
</div>
<Sidemenu parentProps={this.state.open}/>
<div className='sign'>
<Sign accountProps={this.state.menu}


/>
</div>
</div>
</MuiThemeProvider>


);

}

}
export default Dashboard