import React, { Component } from 'react';
import { Card, IconButton,  InputBase, Divider } from '@material-ui/core';
import More from './More';

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
        }
    }
    async componentDidMount() {
    
     var notesValue =await userctr.add();
     console.log('notes--',notesValue)
     this.setState({
       notes : notesValue
     }) 

} 

  openMore()
  {
    this.setState({
      more:true,
    })
  }
 
    
    

    render()
    {   
    let tempPinnedNotesArray = this.state.notes.map( (option, index) => {
      if(option.Pinned === true && option.Trashed === false && option.Archived === false )
      {
        
        return( 
          
          <div>
        
          <Card className='cardnotes'>
        <div>
        <InputBase
        defaultValue={option.Title}
        >
        
        
        </InputBase>
        </div>
        <div>
        <InputBase
        defaultValue={option.Description}
        
        >
          
        </InputBase>
        </div>
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
  
  
        <IconButton
        onClick={event =>this.openMore(event)} >
        
        
        <img src = {
          require('../../assets/more.svg')
        }
        /> 
        
         </IconButton > <IconButton style = {
          {
            marginLeft: '100px'
          }
        } >
        
        
        </IconButton>
    
        </toolbar>
        <More openmenu={this.state.more}/>
       
        
        </Card>
        </div> )
      }
    })

  

    var notesarray= this.state.notes.map( (option, index) => {
      if(option.Pinned === false && option.Trashed === false && option.Archived === false )
      {

      return( <div className='displaycard'>
     

     <Card className='cardnotes'>
  <div>
  <InputBase
  defaultValue={option.Title}
  >
  
  
  </InputBase>
  </div>
  <div>
  <InputBase
  defaultValue={option.Description}
  
  >
    
  </InputBase>
  </div>
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


  <IconButton
  onClick={event =>this.openMore(event)} >
  
  
  <img src = {
    require('../../assets/more.svg')
  }
  /> 
  
   </IconButton > <IconButton style = {
    {
      marginLeft: '100px'
    }
  } >
  
  
  </IconButton>
  <More openmenu={this.state.more}/>

  </toolbar>
  
 
  
  </Card>
  </div>
  )
}
  })



  var thrashedarray= this.state.notes.map( (option, index) => {
    if(option.Pinned === false && option.Trashed === true && option.Archived === false )
    {

    return( <div className='displaycard'>
   

   <Card className='cardnotes'>
<div>
<InputBase
defaultValue={option.Title}
>


</InputBase>
</div>
<div>
<InputBase
defaultValue={option.Description}

>
  
</InputBase>
</div>
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


<IconButton
onClick={event =>this.openMore(event)} >


<img src = {
  require('../../assets/more.svg')
}
/> 

 </IconButton > <IconButton style = {
  {
    marginLeft: '100px'
  }
} >


</IconButton>

</toolbar>
<More openmenu={this.state.more}/>


</Card>
</div>
)
}
})


 
    return(
      
      
           
      <div className='showcards'>
      <p>      
      <h>pinned</h>
           
            {tempPinnedNotesArray}
            </p>
            <Divider/>
         

            <Divider/>
                    
<h>other</h>
{notesarray}
            </div>
        )
      
    
 
          }
}
export default Showcards