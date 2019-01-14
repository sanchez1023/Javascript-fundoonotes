import
React, {
  Component
} from 'react'

import database from '../../firebase'
import firebase from '../../firebase'
import {
  Card,
  IconButton,
  
  InputBase,
  
  ClickAwayListener
} from '@material-ui/core';
import More from './More';
var userctr=require('../../controller/usercontroller')
/*
class declared to render and creaing gloabal values
*/
class Note extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      title:"",
      description:"",
      isPin:false,
      isTrash:false,
      reminder:false,
      userid:"",
      imageOf:"",
      colaborator:"",
      isArchive:false,
      menu:false,
      added:false,


    }
  }
  openMore()
  {
    this.setState({
      more:true,
    })
  }
  handleToogle() {
    console.log(this.state.open)
    console.log('in handle toogle');
    this.setState({
      open: !this.state.open
    })
    //console.log(this.state.open)

  }
  onOutsideclick() {
    this.setState({
      open: false
    })
  }
  handleArchive()
  {
    this.setState({
      isArchive:true
    })
  }
  handlePinned()
  {
    this.setState({
      isPin:true,
    })
  }
  handleReminder()
  {
    this.setState({
      reminder:true
    })
  }
  handleNotes = event =>{
event.preventDefault();

this.setState({
  open:!this.state.open,
  title:"",
  description:'',
  added:true,
  
})

userctr.arraynotes(this.state.title,this.state.description,this.state.isPin,this.state.isArchive,this.state.reminder,this.state.colaborator,this.state.imageOf)




      }
    
    
  

  render() {
    return (!this.state.open ?

      <
      div className = 'area' >

      <
      Card className = 'bar' >
      <
      div className = 'title' >

      <
      div className = 'inputbase' >
      <
      
      InputBase onClick = {
        () => this.handleToogle()
      }
      placeholder = ' Take a note......'
      
      >


      </InputBase></div >

      <div className = 'titlebuttons' > <IconButton >
      
   
      <img src = {
        require('../../assets/tick.svg')
      }/>  </IconButton> 
      
      < IconButton >
      
      
      <
      img src = {
        require('../../assets/brush.svg')
      }
      /> 
      </IconButton> <IconButton >
      
      
      <
      img src = {
        require('../../assets/image.svg')
      }
      /> 
     </IconButton> 
     </div>

      </div>

      </Card> 
      </div>

      :
      <div className = 'area' >
      < ClickAwayListener onClickAway = {
        () => this.onOutsideclick()
      } >

      <Card className = 'inputcard'




      >
      <div className = 'createnote' >
      <InputBase color = 'inherit'
      placeholder = 'Title' 
      value={this.state.title}
      onChange = {
        (event) => this.setState({
          title: event.target.value
        })
      }
      >


      </InputBase> 
      <IconButton style = {
        {
          marginLeft: '250px'
        }
      }
      onClick={event => this.handlePinned(event)}> 
      
      
      
      <img src = {
        require("../../assets/pin.svg")
      }
      /> 
      </IconButton>

      </div> 
      <InputBase placeholder = 'Take a note'
      value={this.state.description}
      onChange = {
        (event) => this.setState({
          description: event.target.value
        })
      }
      >
      </InputBase>

      <div className='toolbar'>
      < toolbar >
      < IconButton
      onClick={event => this.handleReminder(event)}>
      
    
      
      <img src = {
        require('../../assets/reminderalarm.svg')
      }
      /> 
       </IconButton>


      < IconButton
      onClick={event => this.addAccount(event)}> 
     
      <
      img src = {
        require('../../assets/addaccount.svg')
      }
      /> 
       </IconButton>

      <IconButton 
      onClick={event => this.handleColor(event)}>
      
      
      
      <img src = {
        require('../../assets/colorplate.svg')
      }
      />
      </IconButton>


      <IconButton 
      onClick={event => this.handleImage(event)}>
      
      <img src = {
        require('../../assets/image.svg')
      }
      /> 
      </IconButton>


      <IconButton
      onClick={event => this.handleArchive(event)}>
      
      
     
      <img src = {
        require('../../assets/archive.svg')
      }

      /> 
      </IconButton>
<More/>

   <IconButton style = {
        {
          marginLeft: '100px'
        }
      } 
      
      onClick={event => this.handleNotes(event)}>
      Close

      </IconButton>

      
      </toolbar>
      </div>


      </Card> </ClickAwayListener>

      </div>



    )
  }
}
export default Note
