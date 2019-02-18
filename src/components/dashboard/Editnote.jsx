import React, { Component } from 'react';
import {Dialog, InputBase, IconButton, Chip,ClickAwayListener, Card} from '@material-ui/core'
import Reminder from './Reminder';
import Colorpallate from './Colorpallate';
import Addimage from './Addimage';
import Archive from './Showarchived';
import More from './More';
import Pinned from './Pinned';
var userctr=require('../../controller/usercontroller')


class Editnotes extends Component{

  constructor(props)
  {
    super(props)
    this.state={
    
      title:this.props.note.Title,
      Description:this.props.note.Description,
      pinned:false,
      archived:false,
      reminder:'',
      trashed:false,
      key:[]

    }
    this.handleView=this.handleView.bind(this)

  }

  editArchive(archiveValue)
  {
    if(archiveValue)
    this.setState({
        archived:archiveValue,
        pinned:false,
        trashed:false
    })
    this.onClose=this.onClose.bind(this)
  }
  
  async onClose(note,key){
      console.log('in close');
      this.props.close()
  
    console.log('b----',this.state.key)
    var index=this.props.index;
   console.log('key-----',key)
      
       var   Title=this.state.title
       var   Description=this.state.Description


        //  note={
        //    Title:this.state.title,
        //    Description:this.state.Description
        //  }
        
           console.log('in edit--',Title)

           console.log('in edit--',Description)
          

        // userctr.updatenote(key,note);
      // console.log('note---',note);
      //      console.log('index--',key);
      userctr.editnote(this.state.title,this.state.Description,note,key)    
      
      console.log('open--',this.state.open);
          
  }

  handleView(note,key,event){
    console.log("note in pinned",note)
    console.log("note in pinned",key)
    userctr.pinUnpin(key,note)
  }


  handleReminderDelete = ( index ,note) => {

        
    console.log("index in  reminder --",index)

    console.log("--before", note);
      userctr.removeReminder(index,note)
  }
render()
{
 // console.log('note in edit ',this.props.note)
 
  return(
  
    <Dialog  open={this.props.open} fullWidth  >
    
    <Card className='incard'
    style={{backgroundColor:this.props.note.Color}}
    >

    <div className='pinbase'>
    <InputBase
  
  value={this.state.title}
  onChange = {
    (event) => this.setState({
      title: event.target.value
    })
  }

   

    >
    </InputBase>
    <div>
             {  this.props.note.Pinned ?(
             
              <div>
              <IconButton  onClick={(event)=>this.handleView(this.props.note,this.props.index,event)} >
              <img src={require('../../assets/pinned.svg')}/>
              
            
              
              </IconButton>
              </div>


)
               :(
                <div>
                <IconButton onClick={(event)=>this.handleView(this.props.note,this.props.index,event)}>
                <img src={require('../../assets/pin.svg')}/>
                </IconButton>
                
                
                </div>

                )
               
             }
             </div>
               </div>
    
   
    
    <div>
            <InputBase
          
            value={this.state.Description}
            onChange = {
              (event) => this.setState({
                Description: event.target.value
              })
            }
      
            >
            
            </InputBase>
            </div>
            
            {this.props.note.Reminder===''?(
              <div>
              </div>
            ) : ( 
                              <div>
                            <Chip
                                        label={this.props.note.Reminder}
                                        onDelete={ () => this.handleReminderDelete(this.props.index) } 
                                      />
                  
                              </div>
     )}

                     <div>
                          {this.props.note.Label ===''? 
                           <div></div>

                            
                          :
                          <div>
                          {this.props.note.Label.map((key)=>

                            <Chip style={{backgroundColor:this.props.note.Color}}
                            label={key}
                            onDelete={ () => this.handleReminderDelete(this.props.index) } 
                            
                            ></Chip>
                          )}
                        </div>
                          }
                          </div>
                    
    
    
  
    
      
  
  
    <toolbar className='toolbar'>
   < Reminder/>
    
    <IconButton
    onClick={event => this.addAccount(event)}> 
    
    <
    img src = {
      require('../../assets/addaccount.svg')
    }
    /> 
     </IconButton>
    
    < Colorpallate/>
    
    
  <Addimage/>
    
  <Archive/>
    
 <More/>
  
    
  <IconButton onClick={(event)=>this.onClose(this.props.note,this.props.index,event)}>
    
    close
  
    </IconButton>
    
    </toolbar>
  



  
  </Card>
   
   
</Dialog>


  )
}

    }
    export default Editnotes
