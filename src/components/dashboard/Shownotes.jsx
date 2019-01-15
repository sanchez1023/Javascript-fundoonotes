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
    {   let changeCardsstyle=this.props.viewProps ?'showcardslist':'showcards'
    let tempPinnedNotesArray = this.state.notes.map( (option, index) => {
      if(option.Pinned === true && option.Trashed === false && option.Archived === false )
      {
        
        return( 
          
          <div className={changeCardsstyle}>
        
          <Card className='cardnotes'>
        <div>
        <InputBase
        defaultValue={option.Title}
      
        >
        
        // 
        >
          
        </InputBase>

        {option.Reminder === "" ? (
          <div>
          </div>
        ) : ( 
          <div>
            <Chip
            label={option.Reminder}
            onDelete={ () => this.handleReminderDelete(index) } 
          />
          </div>
        )}
        

        </div>
        <div>
        <toolbar>
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
        </toolbar>
        </div>
        
        </Card>
        </div> )
      }
      
    })

  

    var notesarray= this.state.notes.map( (option, index) => {
      if(option.Pinned === false && option.Trashed === false && option.Archived === false )
      {
      return( <div className={changeCardsstyle}>
     

     
     <CardComponent Display={ option } />
  </div>
  )
}

  })


  
  var thrashedarray= this.state.notes.map( (option, index) => {
    if(option.Pinned === false && option.Archived === false )
    {

    return( <div className='displaycard'>
   
      <CardComponent Display={option}/>
</div>
)
}
})


 
    return(
      
      
           
      <div className={changeCardsstyle}>
        
      {tempPinnedNotesArray}
      {notesarray}
           
            
            
            <Divider/>
         

            <Divider/>
                    

            </div>
        )
      
    
 
          }
}
export default Showcards