import React, {
    Component
  } from 'react';
import { IconButton, Popper ,Paper,Card, MenuItem,ClickAwayListener} from '@material-ui/core';
import DatePicker from 'react-date-picker'

  class Reminder extends Component{
      constructor()
      {
          super()
          this.state={
open:false,
anchorEl: null,
reminder:'',
date: new Date(),
          }
      }
      handleClick=event=>{
        const { currentTarget } = event;
      this.setState(state => ({
        anchorEl: currentTarget,
        open: !this.state.open,
      }));
    
    }

    async handleToday(event){
      event.preventDefault();
        console.log('in handle today')

     await this.setState=({
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
onChange = date =>{this.setState({ date })
this.props.reminderProps(this.state.date)
}

    onOutsideclick() {
        this.setState({
          open: false
        })
      }
      render(  )
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
                        <DatePicker
                        onChange={this.onChange}
          value={this.state.date}
                        
                        
                        
                        />


                      
                        
                        
                        
                        

                        </Paper>
                </Popper>
                </Card>
                </div>
  


              )
          }
    
  }
  export default Reminder