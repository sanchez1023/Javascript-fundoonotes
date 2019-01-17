import React, {
    Component
  } from 'react';
import { IconButton, Popper ,Paper,Card, MenuItem,ClickAwayListener, TextField} from '@material-ui/core';
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
      a.displaydate();
    }
    
      
    displaydate()
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
                <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                        <Paper className='reminder'>
                        
        
                        
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
                     <TextField></TextField>
                     
                     

                      
                        
                        
                        
                        

                        </Paper>
                </Popper>
                </Card>
                </div>
             


              )
          }
    
  }
  var a=new Reminder();
  export default Reminder