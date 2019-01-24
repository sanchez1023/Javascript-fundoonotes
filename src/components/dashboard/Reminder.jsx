import React, {
    Component
  } from 'react';
import { IconButton, Popper ,Paper,Card, MenuItem,ClickAwayListener, TextField, Fab} from '@material-ui/core';
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import DATE from'react-datepicker'
import Calnder from 'react-calendar'
import Calendar from 'react-calendar';

  class Reminder extends Component{
      constructor()
      {
          super()
          this.state={
open:false,
anchorEl: null,
reminder:'',
date:'',
time:'',
          }
      }
      handleClick=event=>{
        const { currentTarget } = event;
      this.setState(state => ({
        anchorEl: currentTarget,
        open: !this.state.open,
      }));
    
    }

    async  handleToday(event){
      event.preventDefault();
        console.log('in handle today');

      await this.setState({
    reminder:'Today,20:00'
    
})  
this.props.reminderProps(this.state.reminder)
console.log('in handle today-----',this.state.reminder)
console.log('date',this.state.date);

}


async handleTomorow(event){
    event.preventDefault();
    console.log('in tomorow');
    await this.setState({
        reminder:'Tommorow,8:00'
    })
    this.props.reminderProps(this.state.reminder)
    
}
    handleDate(event)
    {
      this.setState({
        date: event.target.value,
      });
       console.log('date--', event.target.value );
    }

    handleTime = (event) =>
    {
      this.setState({
        time:event.target.value
      });
      console.log('time--', event.target.value );
    
    }
    
      
    displaydate=(event)=>
    {
      var result=this.state.date +","+this.state.time;
      console.log('date and time-- ',result);
      this.setState({
        reminder:result
      })
      this.props.reminderProps(this.state.reminder);
    }
  




    onOutsideclick() {
        this.setState({
          open: false
        })
      }
      render( )
          {

          
            
              return(
                
                <div>

        <IconButton  onClick={(event)=>this.handleClick(event)}>
        <img src={require('../../assets/remainder.svg')}/>
        </IconButton>
        <Card>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} position='absolute' z-index='1'>
                        <Paper className='reminder' position='absolute' zindex='1'>
                        
        
                        
                        <div>
                        Reminder : 
                        </div>
                        <div className='tommorow'>
                        
                        <div>
                        <MenuItem onClick={(event)=>this.handleToday(event)} > Later Today :  20:00</MenuItem>
                        </div>
                        </div>
                        <div className='tommorow'>
                        
                        <div>
                        <MenuItem onClick={(event)=>this.handleTomorow(event)}>Tommorow :   8:00</MenuItem>
                        </div>
                        </div>
     
                       
                     <TextField
                     type='date'
                     onChange={this.handleDate.bind(this)}
                     />
                     <TextField
                     type='time'
                     onChange={this.handleTime}
                    
                     />
                     <button
                     color='inherit' onClick={this.displaydate}
                     >
                     
                     save
                     </button>
                    
                     

                      
                        
                        
                        
                        

                        </Paper>
                </Popper>
                </Card>
                </div>
             


              )
          }
    
  }
  
  export default Reminder