import React, { Component } from 'react';
import { Card, IconButton,  InputBase, Divider,Dialog, Chip } from '@material-ui/core';
import More from './More';
import Editnotes from './Editnote';
import CardComponent from '../dashboard/CardComponent';

var userctr=require('../../controller/usercontroller')

class Showcards extends Component{


    constructor()
    {
        super()
        this.state={
          more:false,
          description:"",
          pinned:"",
          notes : [],
          open:false,
        }
    }
    async componentDidMount() {
    
     var notesValue =await userctr.add();
     console.log('notes--',notesValue)
     this.setState({
       notes : notesValue,
       open:true
     }) 

} 

// handledialogClick()
// {
//   this.setState({
//     open:true,
//   })
// }
handleClose()
{
  this.setState({
    open:false
  })
}
  openMore()
  {
    this.setState({
      more:true,
    })
  }

  handleReminderDelete = ( index ) => {

    let tempArray = this.state.notes;

    console.log("tempArray---before", tempArray);
    
    for( let i=0; i<tempArray.length; i++)
    {
      if(i === index)
      {
        tempArray[i].Reminder = ""
      }
    }

    console.log("tempArray---after", tempArray);

    this.setState({
      notes: tempArray
    })

  }
 
    
    

    render()
    {   
    let tempPinnedNotesArray = this.state.notes.map( (option, index) => {
      if(option.Pinned === true && option.Trashed === false && option.Archived === false )
      {
        return(
        
         <CardComponent Display={option}
         index={index}
         status={this.props.viewProps}
         
         />    
        ) 
      }
  
    })

  

    var notesarray= this.state.notes.map( (option, index) => {
      if(option.Pinned === false && option.Trashed === false && option.Archived === false )
      {
      return( 
     

     
     <CardComponent Display={ option }
     index={index}
     status={this.props.viewProps }
     
     />
  
  )
}

  })


  
  var thrashedarray= this.state.notes.map( (option, index) => {
    if(option.Pinned === false && option.Archived === false )
    {

    return( 
   
      <CardComponent Display={ option }
      index={index}
      status={this.props.viewProps }/>

)
}
})

let tempArchivedArray = this.state.notes.map( (option, index) => {
  if(option.Pinned === false && option.Trashed === false && option.Archived === true )
  {return(
    

    <CardComponent Display={ option }
    index={index}
    status={this.props.viewProps }
    />
    
  )
  }
})


 
    return(
      
      
           
      <div className='displaydiv'>
      
      {tempPinnedNotesArray}
     
      {notesarray}
           
            
            {tempArchivedArray}
           
                    

            </div>
        )
      
    
 
          }
}
export default Showcards