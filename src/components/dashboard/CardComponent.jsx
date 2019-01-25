
   import React, { Component } from 'react';
   import { InputBase ,Card,Chip,IconButton, } from '@material-ui/core';
import Reminder from './Reminder';
import More from './More';
import Colorpallate from './Colorpallate';
import Addimage from './Addimage';
import Archive from './Showarchived';
import Editnotes from './Editnote';
import Pinned from './Pinned';
import Forever from './Deleteforever';
import Cardmore from './Cardmore';
var userctr=require('../../controller/usercontroller')


      
     export default class CardComponent extends Component{
   
       constructor(props)
       {
           super(props)
           this.state={
               notes:[],
               openDailog:false,
              
   
           }
           this.handleEdit=this.handleEdit.bind(this)
           this.handleView=this.handleView.bind(this)
       }

       handleEdit=async event=>{
         this.setState({ openDailog:!this.state.openDailog,})
        console.log("ref title",this.refs.Title.value)
      
      
         // console.log('in saste key',this.state.key)

       }


       handleArchive(note,key){
console.log('note in archive',note);
console.log('key in archive',key)
userctr.handleArchive(key,note);
       }

removeLabel=(key,note,index)=>{

  console.log("index in  label --",index)
    
        console.log('in label', note);
        console.log('in label key',key);
        userctr.handleLabels(key,note,index)

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
        //  this.props.Display.map((opti,index)=>{
           
        //   opti.Label.map((optio,index)=>{
        //     console.log('option',optio[0])
        //   })
        //  })
      
         
        
        
        let cardstyle=this.props.status ? 'showcards':'showcardslist'
         
       console.log('Display', this.props.Display);
       console.log('index--', this.props.index);
       var Key=this.props.index;
       console.log('index--', Key);
           
           return(
             
               <Card className={cardstyle}
               style={{backgroundColor:this.props.Display.Color}}
                >
                
               <div className='cardcom' 
              
               >

               <InputBase
               defaultValue={this.props.Display.Title}
               readOnly={this.props.Display.Title}
               onClick={(event)=>this.handleEdit(event)}
               value={this.props.Display.Title}
               ref ='Title'
               >
               </InputBase>
               <div>
             {  this.props.Display.Pinned ?(
             
              <div>
              <IconButton  onClick={(event)=>this.handleView(this.props.Display,this.props.index,event)} >
              <img src={require('../../assets/pinned.svg')}/>
              
            
              
              </IconButton>
              </div>


)
               :(
                <div>
                <IconButton onClick={(event)=>this.handleView(this.props.Display,this.props.index,event)}>
                <img src={require('../../assets/pin.svg')}/>
                </IconButton>
                
                
                </div>

                )
               
             }
             </div>
               </div>
               <div>
               <InputBase
               
                
               defaultValue={this.props.Display.Description}
   readOnly={this.props.Display.Description}
               
               >
               </InputBase>
                          <div className='reminderAndlabels'>
                          <div>
                          {this.props.Display.Reminder ? (
                            <div>
                              <Chip 
                              
                              style={{backgroundColor:this.props.Display.Color}}
                              label={this.props.Display.Reminder}
                              onDelete={ () => this.handleReminderDelete(this.props.index,this.props.Display) } 
                            >
                            
                            </Chip>
                            </div>
                          ) 
                          : 
                          ( 
                            <div>

                            </div>
                            )}
                            </div>
                        
                            
                        {this.props.Display.Label &&  
                      <div>
                          {this.props.Display.Label.map((option,index)=>
                            
                            <Chip style={{backgroundColor:this.props.Display.Color}}
                            label={option}
                            onDelete={ () => this.removeLabel (this.props.index,this.props.Display,index) } 
                            
                            ></Chip>
                          )}
                        
                    </div> }

                    
                        
                          </div>
                          {this.props.Display.Trashed ?
                            (
                         <Forever note={this.props.Display}
                         index={this.props.index}
                         />
                            ):(
               <toolbar className='toolbar'>
              <Reminder note={this.props.Display}
              index={this.props.index}
              />
               
               <IconButton
               onClick={event => this.addAccount(event)}> 
               
               <
               img src = {
                 require('../../assets/addaccount.svg')
               }
               /> 
                </IconButton>
               
               <Colorpallate note={this.props.Display}
               index={this.props.index}
               
               />
               
               
             <Addimage/>
               
             <div>
             <IconButton onClick={(event)=>this.handleArchive(this.props.Display,this.props.index)}>
             <img src={require('../../assets/archive.svg')}/>
             </IconButton>
             
             </div>
             
             
             
               
                  <Cardmore note={this.props.Display}
                  index={this.props.index}
                  />
                
              
               
               </toolbar>)}
             
        <Editnotes open={this.state.openDailog}
        keyValue={this.state.key}
        close={this.handleEdit}
        note={this.props.Display}
        index={this.props.index}
        
        />
                
               </div>
               </Card>
   
   
   
           )
       }
   
       
     }
     // export default Templetecard;