// // // let tempPinnedNotesArray = this.state.notes.map( (option, index) => {
// // //     if(option.Pinned === true && option.Trashed === false && option.Archived === false )
// // //     {
// // //       return(
    
// // //         <div>   
// // //         <h>pinned</h>
// // //         <Card className='cardnotes'>
     
// // //       <div>
// // //       <InputBase
// // //       defaultValue={option.Title}
// // //       >
      
      
// // //       </InputBase>
// // //       </div>
// // //       <div>
// // //       <InputBase
// // //       defaultValue={option.Description}
      
// // //       >
        
// // //       </InputBase>
// // //       </div>
// // //       <toolbar>
// // //       < IconButton
// // //       onClick={event => this.handleReminder(event)}>
      
    
      
// // //       <img src = {
// // //         require('../../assets/reminderalarm.svg')
// // //       }
// // //       /> 
// // //        </IconButton>


// // //       < IconButton
// // //       onClick={event => this.addAccount(event)}> 
     
// // //       <
// // //       img src = {
// // //         require('../../assets/addaccount.svg')
// // //       }
// // //       /> 
// // //        </IconButton>

// // //       <IconButton 
// // //       onClick={event => this.handleColor(event)}>
      
      
      
// // //       <img src = {
// // //         require('../../assets/colorplate.svg')
// // //       }
// // //       />
// // //       </IconButton>


// // //       <IconButton 
// // //       onClick={event => this.handleImage(event)}>
      
// // //       <img src = {
// // //         require('../../assets/image.svg')
// // //       }
// // //       /> 
// // //       </IconButton>


// // //       <IconButton
// // //       onClick={event => this.handleArchive(event)}>
      
      
     
// // //       <img src = {
// // //         require('../../assets/archive.svg')
// // //       }

// // //       /> 
// // //       </IconButton>


// // //       <IconButton
// // //       onClick={event =>this.openMore(event)} >
      
      
// // //       <img src = {
// // //         require('../../assets/more.svg')
// // //       }
// // //       /> 
      
// // //        </IconButton > <IconButton style = {
// // //         {
// // //           marginLeft: '100px'
// // //         }
// // //       } >
      
      
// // //       </IconButton>
  
// // //       </toolbar>
// // //       <More openmenu={this.state.more}/>
     
      
// // //       </Card>
// // //       </div>
// // // )
// // //     }
// // //   })


// // //   / <Popper   open={open }  anchorEl={anchorEl} placement={placement}>

// // // // {({ TransitionProps }) => (
// // // //   <Fade {...TransitionProps} timeout={3500}>
// // // //     <Paper>
// // // //     <div>
// // // //     <Card>
// // // //   <Menu>
// // // //   <MenuItem>sgasas</MenuItem>
// // // //   <MenuItem>sgasas</MenuItem>
// // // //   </Menu>
// // // //   </C
// // // //   </div>
// // // //     </Paper>
// // // //   </Fade>
// // // // )}
// // // // // </Popper></Popper>

// // // <Menu open={open} anchorEl={anchorEl}>

// // // <MenuItem>delete note </MenuItem>
// // // <MenuItem>Add Label</MenuItem>


// // // </Menu>

// // // <Dialog open={this.state.open}></Dialog>
        

// // import React, {
// //     Component
// //   } from 'react';
// // import { Popper,ClickAwayListener,  Paper, Card, Fab, Divider, Avatar, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

// // import firebase from '../../firebase'
// // import Signoutcard from './Cardsignout';

// // const theme=createMuiTheme({
// //   overrides:{
// //     MuiAvatar:{
      
// //       colorDefault: {
// //                         color: "#fafafa",
// //                      backgroundColor: "tomato",
// //     }

// //   }
// //   }
// // })



// // var userctr=require('../../controller/usercontroller')


// //   class Sign extends Component{

// //     constructor()
// //     {
// //         super()
// //        this.state={
// //         notes:[],
      
// //         anchorEl: null,
// //         open: false,
// //         initial:"",
// //        }
// //     }
// //     handleClick=event=>{
// //                 console.log('in popper handle click')
// //                 var b=localStorage.getItem('email')
// //                 var ava=b.substring(0,1)
// //                 var c=ava.toLocaleUpperCase();
                
                
             
// //                         const { currentTarget } = event;
// //                           this.setState ({
// //                             anchorEl: currentTarget,
// //                             open: !this.state.open,
// //                             initial:c,
// //                           });
// //                 console.log('state',this.state.open)
// //                 console.log('anchor el',this.state.anchorEl)
// //     };
// // handleSignout=event=>{
// // {
// //             event.preventDefault();
// //           console.log("insignout")
// //           firebase.firebase.auth().signOut()
// //           localStorage.clear();
// //           window.location='http://localhost:3000/login'
// //           }
// // }
// // onOutsideclick()
// // {
// //   this.setState({
// //     open: false
// //   })
// // }
// //    async componentDidMount()
// // {
// //  await userctr. getNote(arrayNotes=>{
// //     console.log('arraynotes',arrayNotes)
// //     this.setState(
// //       {
// //         notes:arrayNotes,
// //       }
// //     )
// //   });
 

// //         var pinnedNotes=0;
// //         console.log('pinned',pinnedNotes)
// //         Object.keys(this.state.notes).map( (note) => {
// //           var key=note;
// //           var data=this.state.notes[key]
// //           console.log('data in sign',data)
// //           if(data.Pinned === true  )
// //           {
// //             pinnedNotes=pinnedNotes+1;
// //            // console.log('index--',index)
          
// //       }
// // localStorage.setItem('Pinned',pinnedNotes)
// // console.log('sign out pinned',pinnedNotes);
// //   });
// //                     var archivedNotes=0;
// //                     Object.keys(this.state.notes).map( (note) => {
// //                       var key=note;
// //            var data=this.state.notes[key]
// //                       if(data.Archived === true )
// //                       {
// //                         archivedNotes=archivedNotes+1;
// //                   }
// //                  console.log('sign out archive--',archivedNotes);
// //                   localStorage.setItem('Archived',archivedNotes)
// //                     });
// //                           var Notes=0;
// //                           Object.keys(this.state.notes).map( (note) => {
// //                             var key=note;
// //            var data=this.state.notes[key]
// //                             if((data.Trashed !== true && data.Archived !== true && data.Pinned !==true ))
// //                             {
// //                             Notes=Notes+1;
// //                         }
// //                         localStorage.setItem('Notes',Notes)
// //                       console.log('sign out notes--',Notes);
// //                          });

// //                                         var reminder=0;
// //                                         Object.keys(this.state.notes).map( (note) => {
// //                                           var key=note;
// //            var data=this.state.notes[key]
// //                                           if(data.Reminder !=='' )
// //                                           {
// //                                           reminder=reminder+1;
// //                                       }
// //                                       localStorage.setItem('Reminder',reminder)
// //                                      console.log('sign out Rnotes--',reminder);
// //                                         });

                                 
// //                                         var labeled=0;
// //                                         Object.keys(this.state.notes).map( (note) => {
// //                                           var key=note;
// //            var data=this.state.notes[key]


// //                                           if(data.Label !=='' )
// //                                           {
// //                                           labeled=labeled+1;
// //                                       }
// //                                       localStorage.setItem('Label',labeled)
// //                                       console.log('sign out Rnotes--l',labeled);
// //                                         });

// // }


// //     render()
// //     {
// //       var b=localStorage.getItem('email')
// //       var ava=b.substring(0,1)
// //       var c=ava.toLocaleUpperCase();
      

     
     
// //         return(
        
// //           <div className =''>
        
        
      
// //   <MuiThemeProvider theme={
// //         theme
// //       }>
// //         <Avatar className='avatar'
// //         onClick={(event)=>this.handleClick(event)}
         
// //         > {c} 
         
// //          </Avatar>
// //          </MuiThemeProvider>
                   
// //                   <Popper  open={this.state.open }  anchorEl={this.state.anchorEl}>
// //                         <Paper className='paper'>
                        
// //                             <Signoutcard />
// //                                                 <Divider/>
// //                                                   <div className='signoutbutton'>
// //                                                   <div>                                                          <button variant='extended'

// //                                                           onClick={event=>this.handleSignout(event)}

// //                                                           >

// //                                                           Sign Out

// //                                                        </button>
// //                                                        </div>

// //                                                   </div>
                                                  
// //                           </Paper>

// //                   </Popper>

         

// // </div>



// //         )
// //     }
// //   }
// //   export default Sign












// {this.props.note?
//     (<div>
//         <Tooltip title={option.colorName}>
//         <IconButton style ={{backgroundColor:option.colorCode,
//             borderColor:darkBlack
        
        
//         }}
//         value={option.colorCode}
//         onClick={(event)=>this.handlecolor(event)}
        
//         >
        
//         </IconButton>
//         </Tooltip>
    
//     </div>)

// :(
//     <Tooltip title={option.colorName}>
//     <IconButton style ={{backgroundColor:option.colorCode,
//         borderColor:darkBlack
    
    
//     }}
//     value={option.colorCode}
//     onClick={(event)=>this.handlecolor(event)}
    
//     >
    
//     </IconButton>
//     </Tooltip>)

// })