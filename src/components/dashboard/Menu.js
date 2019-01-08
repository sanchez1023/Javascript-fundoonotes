import React, { Component } from 'react';

import { IconButton,  Typography , SwipeableDrawer, List, ListItem,  Divider, MuiThemeProvider, createMuiTheme, Fab, MenuItem,  } from '@material-ui/core';

const theme=createMuiTheme({
overrides:{

  MuiDrawer:{
    paperAnchorLeft:{
      
     left: 0,
     right: 'auto',
     top:'62px',
 }
},
}
})

class Sidemenu extends Component{
  constructor(){
    super()
    this.state={
      open:false
    }
  }

  // handleDrawerMenu=()=>{
  //   if(this.props.parentProps)
  //   {
  //   this.setState({open:true})
  //   }
  //   else{
  //     this.setState({
  //       ...this.state
  //     })
  //   }
  // }
    render()
    {
    console.log("drawer",this.props.parentProps);
    
        return(
<MuiThemeProvider theme ={theme}>
            <div className='drawer'>
            
            <SwipeableDrawer anchor={'left'}
              tabIndex={0}
              variant="persistent"
              open={this.props.parentProps}

            
            
            
            
            
            
            >
            
            <List className='list'>
           
            
            <ListItem  className='listitem'>
           
            <IconButton>    <MenuItem color='yellow'>  
                   <img src={require('../../assets/lightbulb.svg')}/>
               Notes
             
               </MenuItem>
               </IconButton>

             
            </ListItem>
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../../assets/remainder.svg')}/>
              Reminder</IconButton>
            </ListItem>
            
            <Divider/>
            
            <label className='divide'>
              LABLES
            </label>
            <ListItem  className='listitem'>
            <IconButton className='icon'> 
            <img src={require('../../assets/pencil.svg')}/>
              Edit Label</IconButton>
            </ListItem>
            
            <Divider/>
            
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../../assets/archive.svg')}/>
              Archive</IconButton>
            </ListItem>
            
            
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../../assets/bin.svg')}/>
              Bin</IconButton>
            </ListItem>
            
            
            
            </List>
            
            
            
            </SwipeableDrawer>
            </div>
            </MuiThemeProvider>

        );
    }
}
export default Sidemenu