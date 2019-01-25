import React, { Component } from 'react';


import Editnotes from './Editnote';
import CardComponent from '../dashboard/CardComponent';
import { Divider } from '@material-ui/core';

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
     componentDidMount() {

        // var noteDetails= await userctr.add();
        //   this.setState({
        //     notes:noteDetails
        //   })

        userctr.getNote(dataList => {
          //console.log("DataList: ", dataList);
          
          if(dataList !== undefined && dataList !== null) {
            this.setState({
                  notes:dataList
                })
          }
          else {
            this.setState({
              notes:[]
            })
          }

        })
} 


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

  //   this.setState({
  //     notes: tempArray
  //   })

   }
 
    
    

    render()
    {   var array=[];

  
 if(this.props.notes){

  array =   Object.keys(this.state.notes).map( (note) => {
    var key=note;
           var data=this.state.notes[key]
          //  console.log('key in  notes',key)
          //  console.log('note in show--',note)
          //  console.log('data in show--',data)
           

                      // if((option.Title!=='' ||option.Title=='')&&(option.Reminder!=='') && option.Archived === false && option.Trashed === false  &&  option.Pinned ===false)
                      if((data.Trashed !== true && data.Archived !== true && data.Pinned !==true ))
                      {
                        return( 
                          <div>
           <CardComponent Display={data}
                      index={key}
                      status={this.props.viewProps }
                      
                      />
                      </div>
   
                    )
                  }
                    })
}


else if(this.props.reminder){
  
  array =   Object.keys(this.state.notes).map( (note) => {
    var key=note;
           var data=this.state.notes[key]
          //  console.log('key in  notes',key)
          //  console.log('note in show--',note)
          //  console.log('data in show--',data)
                  if(data.Reminder!=='')
                  {

                  return( 
                
                    <CardComponent Display={ data }
                    index={key}
                    status={this.props.viewProps }/>

              )
              }
              })
              }

else if(this.props.archive){
  array =   Object.keys(this.state.notes).map( (option) => {
    var key=option;
    console.log('key in  ')
           var data=this.state.notes[key]
  if((data.Archived !==false ))// && (option.Pinned === false && option.Trashed === false) )
  {return(

    <CardComponent Display={ data }
    index={key}
    status={this.props.viewProps }
    />
  
  )
  }
})
}
else if(this.props.bin)
{
  array =   Object.keys(this.state.notes).map( (option) => {
    var key=option;
           var data=this.state.notes[key]
    if(data.Pinned === false && data.Trashed === true && data.Archived === false )
    {return(
      
  
      <CardComponent Display={ data}
      index={key}
      status={this.props.viewProps }
      />
      
    )
    }
  })

}
else if(this.state.notes.pinned!==false){
 var  pinarray=Object.keys (this.state.notes).map((option) => {
    var key=option;
    var data=this.state.notes[key]
    if(data.Pinned !== false )
    {
      return(
      
       <CardComponent Display={data}
       index={key}
       status={this.props.viewProps}
       
       />    
      ) 
    }

  })
}
else{




         array=Object.keys (this.state.notes).map((option) => {
           var key=option;
           var data=this.state.notes[key]
    if((data.Trashed !== true && data.Archived !== true && data.Pinned !==true ))
    {
    return( 
  

  
  <CardComponent Display={data
  
  }
  index={key}
  status={this.props.viewProps }
  
  />

)
}

})


}


 
    return(
      
      
           
      <div className='displaydiv'>
      
<div className='pinned'>



      {pinarray} 
    
      </div>
      <Divider/>
      <div className='pinned'>        
     {array}
     </div>
       

            </div>
        )
      
    
 
          }
}
export default Showcards