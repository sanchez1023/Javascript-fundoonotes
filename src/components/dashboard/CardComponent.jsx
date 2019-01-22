
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
var userctr=require('../../controller/usercontroller')


      
     export default class CardComponent extends Component{
   
       constructor()
       {
           super()
           this.state={
               notes:[],
               openDailog:false,
   
           }
       }

       handleEdit=event=>{
         this.setState({ openDailog:!this.state.openDailog,})
        console.log("ref title",this.refs.Title.value)
        var b=userctr.getNotes();
  console.log('b---',b);

       }
       handleReminderDelete = ( index ) => {

        let tempArray = this.state.notes;
    
        console.log("tempArray---before", tempArray);
        
        for( let i=0; i<tempArray.length; i++)
        {
          if(i === index)
          {
            tempArray[i].Reminder = "";
          }
        }
    
        console.log("tempArray---after", tempArray);
    
        this.setState({
          notes: tempArray
        })
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
       console.log('idex--', this.props.index);
           
           return(
             
               <Card className={cardstyle}
               style={{backgroundColor:this.props.Display.Color}}
                >
                
               <div className='cardcom' 
              
               >

               <InputBase
               defaultValue={this.props.Display.Title}
               readOnly={this.props.Display.Title}
               onClick={this.handleEdit}
               value={this.props.Display.Title}
               ref ='Title'
               >
               </InputBase>
              <Pinned/>

              
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
                              onDelete={ () => this.handleReminderDelete(this.props.index) } 
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
                        <div>
                          {this.props.Display.Label ===''? 
                           
null
                            
                          :
                          <div>
                          {this.props.Display.Label.map((key)=>

                            <Chip style={{backgroundColor:this.props.Display.Color}}
                            label={key}
                            onDelete={ () => this.handleReminderDelete(this.props.index) } 
                            
                            ></Chip>
                          )}
                        
                    </div>
                          
                          }
                        </div>
                        
                        
                          </div>
               <toolbar className='toolbar'>
              <Reminder/>
               
               <IconButton
               onClick={event => this.addAccount(event)}> 
               
               <
               img src = {
                 require('../../assets/addaccount.svg')
               }
               /> 
                </IconButton>
               
               <Colorpallate/>
               
               
             <Addimage/>
               
             <Archive valueofarchive={this.props.Display.Archived}/>
               {this.props.Display.Trashed ?
                (
             <Forever/>

                ):
                (
                  <More/>
                )
               }
         
              
               
               </toolbar>
             
        <Editnotes open={this.state.openDailog}
        
        close={this.handleEdit}
        note={this.props.Display}
        
        />
                
               </div>
               </Card>
   
   
   
           )
       }
   
       
     }
     // export default Templetecard;