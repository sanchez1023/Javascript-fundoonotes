
   import React, { Component } from 'react';
   import { InputBase ,Card,Dialog,IconButton} from '@material-ui/core';
import Reminder from './Reminder';
import More from './More';



      
     export default class CardComponent extends Component{
   
       constructor()
       {
           super()
           this.state={
               
   
           }
       }
       render()
       {
           console.log('Display', this.props.Display);
           
           return(
             <div>
               <Card className='cardnotes'>
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
               <Dialog open={this.state.open}></Dialog>
               
                 
               </InputBase>
               </div>
               <toolbar>
              <Reminder/>
               
               <IconButton
               onClick={event => this.addAccount(event)}> 
               
               <
               img src = {
                 require('../../assets/addaccount.svg')
               }
               /> 
                </IconButton>
               
               <IconButton 
               onClick={event => this.handleColor(event)}>
               
               
               
            
               </IconButton>
               
               
               <IconButton 
               onClick={event => this.handleImage(event)}>
               
             
               </IconButton>
               
               
               <IconButton
               onClick={event => this.handleArchive(event)}>
               
               
               
               </IconButton>
               
            <More/>
               <IconButton style = {
                 {
                   marginLeft: '100px'
                 }
               } >
               
               
               </IconButton>
               
               </toolbar>
             
          
               
               </Card>
   
   </div>
   
           )
       }
   
       
     }
     // export default Templetecard;