import React, { Component } from 'react';
import dashboard from '../components/dashboard'
import { IconButton,  Typography , SwipeableDrawer, List, ListItem,  Divider, MuiThemeProvider, createMuiTheme,  } from '@material-ui/core';
const theme=createMuiTheme({

 .MuiDrawer.paperAnchorLeft{
    left: 0,
    right: auto,
    top:'64px',
}
}

console.log(theme)

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
            <Typography color='secondary' variant='headline'>
            Fundoo Notes
            </Typography>
            
            
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../assets/lightbulb.svg')}/>
               Notes</IconButton>
            
             
            </ListItem>
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../assets/remainder.svg')}/>
              Remainder</IconButton>
            </ListItem>
            
            <Divider/>
            
            <label className='divide'>
              LABLES
            </label>
            <ListItem  className='listitem'>
            <IconButton className='icon'> 
            <img src={require('../assets/pencil.svg')}/>
              Edit Label</IconButton>
            </ListItem>
            
            <Divider/>
            
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../assets/archive.svg')}/>
              Archive</IconButton>
            </ListItem>
            
            
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../assets/bin.svg')}/>
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