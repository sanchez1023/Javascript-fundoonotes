import React, {
    Component
  } from 'react';
import { Card, Fab } from '@material-ui/core';

  class Sign extends Component{

    constructor()
    {
        super()
       this.state={

        open:false,
       }
    }
    render()
    {
        return(
            <Card>
            <Fab variant='extended'>
            signout
            </Fab>
            
            </Card>


        )
    }
  }
  export default Sign