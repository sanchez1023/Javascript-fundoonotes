import React, { Component } from 'react';
import { Card, IconButton,  InputBase } from '@material-ui/core';
var userctr=require('../../controller/usercontroller')

class Showcards extends Component{


    constructor()
    {
        super()
        this.state={
          title:"",
          description:"",
          pinned:"",
        }
    }
    componentDidMount() {
    var a;
     var  notes = userctr.retriveData()
     notes.then( (value) => {
     console.log("show acrd ---", value);
   a=value
    console.log('resolve--',this.state.title)
    
  })  
  
 
       this.real();
    }

    real()
    {
      var details=this.state.title;
      console.log('cdidmount--',details)
    }

    render()
    {   
    var details=this.state.title;
    console.log('details--',details[4])
      
    return(
            <div className='showcards'>
            <Card className='cardnotes'>
            <div>
            <InputBase
            defaultValue={localStorage.getItem('title')}
            >
            
            
            </InputBase>
            </div>
            <div>
            <InputBase
            defaultValue={localStorage.getItem('description')}
            
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
      
      
            <IconButton >
            
            
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
          
            
            
            </Card>

            </div>

        )
      
    
 
          }
}
export default Showcards