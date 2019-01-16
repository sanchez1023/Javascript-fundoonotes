import React, {
  Component
} from 'react';

import {
  IconButton,

  SwipeableDrawer,
  List,
  ListItem,
  Divider,
  MuiThemeProvider,
  createMuiTheme,
  MenuItem,

} from '@material-ui/core';
/**
 * theme of Muidrawer is overriden according to use in the page
 */
const theme = createMuiTheme({
  overrides: {

    MuiDrawer: {
      paperAnchorLeft: {

        left: 0,
        right: 'auto',
        top: '62px',
      }
    },
  }
})

/**
 * class side menu component declared in order to render the contents and declare global variable to be used
 */
class Sidemenu extends Component {
  constructor() {
    super()
    this.state = {
      openArchive:'',
      open: false
    }
  }


  openArchive()
  {
  this.setState({
    openArchive:'Archived',
  })
  }
  render() {
    console.log("drawer", this.props.parentProps);

    return ( <MuiThemeProvider theme = {
        theme
      } >

      <div className = 'drawer' >


      <SwipeableDrawer anchor = {
        'left'
      }
      tabIndex = {
        0
      }
      variant = "persistent"
      open = {
        this.props.parentProps
      }

      >

      <List className = 'list' >
<MenuItem className='menuItem'>
<div className='menunote'>
      <div>
      <
      img src = {
        require('../../assets/lightbulb.svg')
      }
      />
      </div>
      <div className='menuname'>
          Notes

      </div>
      </div>
      </MenuItem>
      <MenuItem className='menuItem'>
      <div className='menunote'>
      <div>
     
      <
      img src = {
        require('../../assets/remainder.svg')
      }
      />
      </div>
      <div className='menuname'>
      Reminder 
      
      </div>
       </div>
    
       </MenuItem>


      < Divider / >


      <label className = 'divide' >
      LABLES  
      </label> 
      <MenuItem className='menuItem'>
      <div className='menunote'>
      <div>
      <
      img src = {
        require('../../assets/pencil.svg')
      }
      />
      </div>
      <div className='menuname'>
      Edit Label
      </div>
    
      </div>
      </MenuItem>
      <
      Divider / >
      <MenuItem className='menuItem'>
 <div className='menunote'>
    <div>
      <
      img src = {
        require('../../assets/archive.svg')
      }
      />
      </div>
      <div className='menuname'>
      Archive
      
      </div>
      </div>
      </MenuItem>

      <MenuItem className='menuItem'>
      <div className='menunote'>
      <div>
      
      <
      img src = {
        require('../../assets/bin.svg')
      }
      />
      </div>
      <div className='menuname'>
      Bin 
   

      </div>
      </div>
      </MenuItem>


      </List>



      </SwipeableDrawer>  
      </div>
       </MuiThemeProvider>

    );
  }
}
export default Sidemenu
