import React, {
    Component
  } from 'react';
import { Card, Fab,ClickAwayListener } from '@material-ui/core';
import database from '../../firebase'
import firebase from '../../firebase'

  class Sign extends Component{

    constructor()
    {
        super()
       this.state={

        open:false,
       }
    }
handleSignout()
{
console.log("insignout")
firebase.firebase.auth().signOut()
localStorage.clear();
this.props.dashprops.history.push('/login')

}
onOutsideclick()
{
  this.setState({
    open: false
  })
}

    render()
    {
     
        return(
          !this.state.open ?
          <div className =''>
          < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
          <div className='meudiv' >
          <Card className='menudiv'
          
open={this.props.accountProps}

>

userId = {localStorage.getItem('email')}
<button

onClick={event=>this.handleSignout(event)}

>

Sign Out

</button>

</Card>
</div>
</ ClickAwayListener>

</div>

:
<card>
</card>

        )
    }
  }
  export default Sign