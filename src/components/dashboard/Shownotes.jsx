import React, { Component } from 'react';
import { Card, IconButton,  InputBase, Divider,Dialog } from '@material-ui/core';
import More from './More';
import Editnotes from './Editnote';

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
       notes : notesValue
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
       // onClick={(event)=>this.handledialogClick(event)}
        >
        
        <Dialog open={this.state.open}></Dialog>
        </InputBase>
        </div>
        <div>
        <InputBase
        defaultValue={option.Description}
        
        >
          
        </InputBase>
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
     

     <Card className='cardnotes'>
  <div>
  <InputBase
  defaultValue={option.Title}
  //onClick={this.handledialogClick()}
  >
  //<Dialog open={this.state.open}></Dialog>
  
  </InputBase>
  </div>
  <div>
  <InputBase
  defaultValue={option.Description}
  
  >
    
  </InputBase>
  </div>
  <div>  <toolbar>
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
 onClick={this.handledialogClick()}
 
defaultValue={option.Description}

>
<Dialog open={this.state.open}></Dialog>

  
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
<Editnotes/>

</Card>
</div>
)
}
})


 
    return(
      
      
           
      <div className={changeCardsstyle}>
        
      
      {notesarray}
           
            
            
            <Divider/>
         

            <Divider/>
                    

            </div>
        )
      
    
 
          }
}
export default Showcards