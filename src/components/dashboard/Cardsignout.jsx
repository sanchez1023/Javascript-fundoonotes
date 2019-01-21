import React, {
    Component
  } from 'react';
import { Divider, Avatar,createMuiTheme,MuiThemeProvider } from '@material-ui/core';

const theme=createMuiTheme({
    overrides:{
      MuiAvatar:{
        
        colorDefault: {
                          color: "#fafafa",
                       backgroundColor: "tomato",
                       height:'80px',
                       width:'80px'
                       
                       
      }
  
    }
    }
  })

  class Signoutcard extends Component{

    constructor()
    {
        super();
        this.state={

        }
    }

render()
{
    var b=localStorage.getItem('email')
    var ava=b.substring(0,1)
    var c=ava.toLocaleUpperCase();
    return(
<div>  
<div className='logoandname'> 
<MuiThemeProvider theme={
    theme}> 
<Avatar>{c}</Avatar>
</MuiThemeProvider>

<div>
<div>
<h1  style={{ fontSize:'17px' }}>{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</h1>
</div>

  <h>{localStorage.getItem('email')}</h>

  </div>
        </div>
        <Divider/>
            <div>
            Number of notes:{localStorage.getItem('Notes')}
            </div>
                <div>
                Number of Archived Notes:{localStorage.getItem('Archived')}
                </div>
                    <div>
                    Number of Pinned Notes:{localStorage.getItem('Pinned')}
                    </div>
                          <div>
                          Number of notes with reminder:{localStorage.getItem('Reminder')}

                          </div>

                          <div>
                          Number of notes with labeled:{localStorage.getItem('Label')}

                          </div>
                        
                          </div>
              


    )
}


  }
  export default Signoutcard