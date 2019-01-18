
   import React, { Component } from 'react';
   import { InputBase ,Card,Dialog,Chip,IconButton, FormLabel} from '@material-ui/core';
import Reminder from './Reminder';
import More from './More';
import Colorpallate from './Colorpallate';
import Addimage from './Addimage';
import Archive from './Showarchived';
import Editnotes from './Editnote';



      
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
       { let cardstyle=this.props.status ? 'showcards':'showcardslist'
           console.log('Display', this.props.Display);
           
           return(
             
               <Card className={cardstyle}>
               <div className='cardcom'>

               <InputBase
               defaultValue={this.props.Display.Title}
               readOnly={this.props.Display.Title}
               onClick={this.handleEdit}
               >
               </InputBase>
               <div>          <img src={require('../../assets/pin.svg')}/>
             
               </div>

              
               </div>
               <div>
               <InputBase
               
                
               defaultValue={this.props.Display.Description}
   readOnly={this.props.Display.Description}
               
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
             
        <Editnotes open={this.state.openDailog}
        
        close={this.handleEdit}
        
        />
                
               </Card>
   
   
   
           )
       }
   
       
     }
     // export default Templetecard;