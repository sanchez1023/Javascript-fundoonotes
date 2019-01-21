import
React, {
  Component
} from 'react'


import {
  Card,
  IconButton,
  
  InputBase,
  
  ClickAwayListener
} from '@material-ui/core';
import More from './More';
import Reminder from './Reminder';
import Colorpallate from './Colorpallate';
import Addimage from './Addimage';
import Pinned from './Pinned';
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
      isTrash:'',
      reminder:'',
      userid:"",
      imageOf:"",
      colaborator:"",
      isArchive:false,
      menu:false,
    color:'',
    label:'',
    arraynotes:[],
    
      

    }
    this.handleReminder=this.handleReminder.bind(this)
    this.handleTrash=this.handleTrash.bind(this)
    this.handleColor=this.handleColor.bind(this)
    this.handleLabel=this.handleLabel.bind(this)
    this.handlePinned=this.handlePinned.bind(this)
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

 async  handleColor(Color)
  {
     console.log('color--',this.state.color)     
    await this.setState({
      color:Color
    })

  console.log('state color',this.state.color)
  }

      async handleLabel(Label)
      { 
        this.state.arraynotes.push(Label)
        
        console.log('in handle label',Label)
        await  this.setState({
          label:this.state.arraynotes
        })
        console.log('label--',this.state.label)
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
                     async      handlePinned(pinvalue)
                      {
                        console.log('pin value--',pinvalue)
                        await this.setState({
                          isPin:pinvalue
                        })
                        console.log('after set state',this.state.isPin)
                      }

                            handleTrash(Trash)
                            {
                              console.log('rem',Trash);
                            
                          this.setState({

                            isTrash:Trash
                          })
                            console.log('reminder',this.state.isTrash)
                          }


                                    async handleReminder(reminder)
                                    {
                                      console.log('rem',reminder);
                                      
                                    await this.setState({
                                        reminder:reminder
                                      })
                                      console.log('reminder',this.state.reminder)
                                    }
  handleNotes = event =>{
event.preventDefault();

this.setState({
  open:!this.state.open,
  title:"",
  description:'',
  added:true,
  
})

userctr.arraynotes(this.state.title,this.state.description,this.state.isPin,this.state.isArchive,this.state.isTrash,this.state.reminder,this.state.colaborator,this.state.color,this.state.label);




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
     
      <Card className = 'inputcard'




      >
     
      <div className='cardcom'>
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
    <div>
      <Pinned handlePin={this.handlePinned}/>
      </div>
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

 
      < toolbar  className='toolbar'>
      
      <Reminder reminderProps={this.handleReminder}/>

      < IconButton
      onClick={event => this.addAccount(event)}> 
     
      <
      img src = {
        require('../../assets/addaccount.svg')
      }
      /> 
       </IconButton>

      <Colorpallate notetocolor={this.handleColor}/>

    <Addimage/>


      <IconButton
      onClick={event => this.handleArchive(event)}>
      
      
     
      <img src = {
        require('../../assets/archive.svg')
      }

      /> 
      </IconButton>
<More trash={this.handleTrash}
      notetolabel={this.handleLabel}
/>
<div>
   <IconButton 
      
      onClick={event => this.handleNotes(event)}>
      Close

      </IconButton>
      </div>
      
      </toolbar>



      </Card>

      </div>
    



    )
  }
}
export default Note;
