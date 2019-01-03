import React, { Component } from 'react';
import dashboard from '../components/dashboard'
import { AppBar, Toolbar, IconButton, MenuItem, Typography, Menu, InputBase, Icon, Fab, Paper, SwipeableDrawer, List, ListItem, ListSubheader, Divider, Tooltip } from '@material-ui/core';


class Sidemenu extends Component{

    render()
    {
        return(

            <div className='drawer'>
            
            <SwipeableDrawer anchor={'left'}
              tabIndex={0}
              style={{marginTop:'57px'}}
              variant="persistent"
            open={dashboard.prototype.handleDrawer}

            
            
            
            
            
            
            >
            
            <List className='list'>
            <Typography color='secondary' variant='headline'>
            Fundoo Notes
            </Typography>
            
            
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../assets.js/lightbulb.svg')}/>
               Notes</IconButton>
            
             
            </ListItem>
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../assets.js/remainder.svg')}/>
              Remainder</IconButton>
            </ListItem>
            
            <Divider/>
            
            <label className='divide'>
              LABLES
            </label>
            <ListItem  className='listitem'>
            <IconButton className='icon'> 
            <img src={require('../assets.js/pencil.svg')}/>
              Edit Label</IconButton>
            </ListItem>
            
            <Divider/>
            
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../assets.js/archive.svg')}/>
              Archive</IconButton>
            </ListItem>
            
            
            <ListItem  className='listitem'>
            <IconButton> 
            <img src={require('../assets.js/bin.svg')}/>
              Bin</IconButton>
            </ListItem>
            
            
            
            </List>
            
            
            
            </SwipeableDrawer>
            </div>

        );
    }
}
export default Sidemenu