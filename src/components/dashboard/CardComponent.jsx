
   import React, { Component } from 'react';
   import { InputBase ,Card,Dialog,Chip,IconButton} from '@material-ui/core';
import Reminder from './Reminder';
import More from './More';
import Colorpallate from './Colorpallate';
import Addimage from './Addimage';
import Archive from './Showarchived';



      
     export default class CardComponent extends Component{
   
       constructor()
       {
           super()
           this.state={
               
   
           }
       }
       render()
       { let cardstyle=this.props.status ? 'showcards':'showcardslist'
           console.log('Display', this.props.Display);
           
           return(
             
               <Card className={cardstyle}>
               <div>
               <InputBase
               defaultValue={this.props.Display.Title}
               >
               
               
               </InputBase>
               </div>
               <div>
               <InputBase
               
                
               defaultValue={this.props.Display.Description}
   
               
               >
               </InputBase>
               {this.props.Display.Reminder === "" ? (
                <div>
                </div>
              ) : ( 
                <div>
                  <Chip
                  label={this.props.Display.Reminder}
                  onDelete={ () => this.handleReminderDelete(this.props.index) } 
                />
                </div>
              )}
               
                 
             
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
               
             <Archive/>
               
            <More/>
               <IconButton style = {
                 {
                   marginLeft: '100px'
                 }
               } >
               
               
               </IconButton>
               
               </toolbar>
             
          
               
               </Card>
   
   
   
           )
       }
   
       
     }
     // export default Templetecard;