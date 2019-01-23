import React, {
  Component
} from 'react';

import {
  IconButton,

  Drawer,
  List,
  ListItem,
  Divider,
  MuiThemeProvider,
  createMuiTheme,
  MenuItem,
  Button,
  

} from '@material-ui/core';
var userctr=require('../../controller/usercontroller')
/**
 * theme of Muidrawer is overriden according to use in the page
 */
const theme = createMuiTheme({
  overrides: {

    MuiDrawer: {
      paperAnchorLeft: {
        left: 0,
        right: 'auto',
        top: '65px',
     
        height:'auto',
        overflowY: 'scroll',
    overflowX: 'hidden',
    position: 'fixed',
  
      
      }
    },
  }
})

/**
 * class side menu component declared in order to render the contents and declare global variable to be used
 */
class Sidemenu extends Component {
  constructor() {
    super()
    this.state = {
      Archive:false,
      bin:false,
      reminder:false,
      notes:false,
      open: false,
      label:[],
    }
  }


 async componentDidMount() {
   
    
  var notesValue =await userctr.giveLabels()
  console.log('notes--',notesValue)
  this.setState({
    label: notesValue,
    open:true
  }) 

} 


  openArchive=event=>
  {
  this.setState({
    Archive:true,
    bin:false,
      reminder:false,
      notes:false,
  })
  this.props.navigate(this.state.Archive,this.state.reminder,this.state.bin,this.state.notes)
  }

  openReminder()
  {
    this.setState({
      Archive:false,
      bin:false,
        reminder:true,
        notes:false,
    })
    this.props.navigate(this.state.Archive,this.state.reminder,this.state.bin,this.state.notes)
  }
openBin()
{
  this.setState({
    Archive:false,
    bin:true,
      reminder:false,
      notes:false,
  })
  this.props.navigate(this.state.Archive,this.state.reminder,this.state.bin,this.state.notes)
}
openNotes()
{
  this.setState({
    Archive:false,
    bin:false,
      reminder:false,
      notes:true,
  })
  this.props.navigate(this.state.Archive,this.state.reminder,this.state.bin,this.state.notes)

}

  render()
   {

console.log('labels in menu--',this.state.label)
var arryofvalue=[];

this.state.label.map((option,index)=>{

arryofvalue.push(option.name);

})
   // console.log("drawer", arryofvalue);
var arrv=[];
arryofvalue.map((option,index)=>{

arrv.push(option);

})
 console.log('labels--',arrv);
 var arr1=[];
  arrv.map((value,index)=>{
  for(var i=0;i<=arrv.length;i++)
  {
   if(value!==undefined){
        
       arr1.push( value[i]);
      
   }
  }
 
})
console.log('arra1',arr1);
var arr2=[];
var a=arr1.map((option,index)=>{
 
  if(option!==undefined)
    {
      arr2.push(option)
    }
  })
  //console.log('arr 2 --',arr2)
  var a=arr2.map((option,index)=>{
      return(
    
        <div>
        <Button id='buttonmenu'>
        <img src={require('../../assets/label.svg') }
        style={{marginRight:'10px'}}
        
        />
        {option}
        </Button>
        </div>
      )
    })
    

// var array=[];
// this.state.label.map((Option,index)=>{
//   if(Option.Label.length>1)
// array.push(Option);

// })
// console.log("array of labels",array)
// var labeledarray=[]
// array.map((opt,index)=>{

// labeledarray.push(opt.Label)



// })
// console.log('arra that is labeled--')
// var i=0;
// var arr1=[];
// var a=labeledarray.map((value,index)=>{
// for(i=0;i<labeledarray.length;i++)
// {
 
      
//      arr1.push( value[i]);
    

// }

 
// })
// var a=arr1.map((Option,index)=>{
//   return(

//     <div>
//     <Button id='buttonmenu'>
//     <img src={require('../../assets/label.svg')}/>
//     {Option}
//     </Button>
//     </div>
//   )
// })



let a=this.state.notes? 'menuItem':'menu'



    return ( <MuiThemeProvider theme = {
        theme
      } >

      <div className = 'drawer' >


      <Drawer anchor = {
        'left'
      }
      tabIndex = {
        0
      }
      variant = "persistent"
      open = {
        this.props.parentProps
      }
      

      >

      <List className = 'list' >
      
<MenuItem id='menuItem' onClick={(event)=>this.openNotes(event)}>
<div className='menunote'>
      <div>
      <
      img src = {
        require('../../assets/lightbulb.svg')
      }
      />
      </div>
      <div className='menuname'>
          Notes

      </div>
      </div>
      </MenuItem>
      <MenuItem id='menuItem' onClick={(event)=>this.openReminder(event)}>
      <div className='menunote'>
      <div>
     
      <
      img src = {
        require('../../assets/remainder.svg')
      }
      />
      </div>
      <div className='menuname'>
      Reminder 
      
      </div>
       </div>
    
       </MenuItem>


      < Divider / >


      <label className = 'divide' >
      LABLES  
      </label> 
      {a}
      <MenuItem id='menuItem'>
      <div className='menunote'>
      <div>
      <
      img src = {
        require('../../assets/pencil.svg')
      }
      />
      </div>
      <div className='menuname'>
      Edit Label
      </div>
    
      </div>
      </MenuItem>
      <
      Divider / >
      <MenuItem id='menuItem' onClick={(event)=>this.openArchive(event)}>
 <div className='menunote'>
    <div>
      <
      img src = {
        require('../../assets/archive.svg')
      }
      />
      </div>
      <div className='menuname'>
      Archive
      
      </div>
      </div>
      </MenuItem>

      <MenuItem className='menuItem' onClick={(event)=>this.openBin(event)}>
      <div className='menunote'>
      <div>
      
      <
      img src = {
        require('../../assets/bin.svg')
      }
      />
      </div>
      <div className='menuname'>
      Bin 
   

      </div>
      </div>
      </MenuItem>


      </List>



      </Drawer>  
      </div>
       </MuiThemeProvider>

    );
  }
}
export default Sidemenu
