// var firebase=require('../firebase')
import database from '../firebase'
import {
    reject,
    promised
} from 'q';
import {
    resolve
} from 'url';

export function registerUser(fname, lname, email, password, contact, token) {
    var data = {
        firstname: fname,
        lastname: lname,
        email: email,
        password: password,
        contact: contact,
        userid: token,
    }
    database.database.ref('/users').push(data); //pushing data in firebase
}



export function getData(username, abc) {


    database.database.ref('users').orderByChild("email").equalTo(username).on('value', snap => {

        snap.forEach(function (snap) {
            var value = snap.val();

            // console.log(value);
            var key = snap.key;
            var email = snap.child("email").val();
            var firstname = snap.child('firstname').val();
            var lastname = snap.child('lastname').val();

            localStorage.setItem('email', email)
            localStorage.setItem('firstname', firstname)
            localStorage.setItem('userKey', key)

            localStorage.setItem('lastname', lastname)

        });
    });



}


export async function arraynotes(title, description, isPin, isArchived, isTrash, reminder, colaborator, color, label) {
    var labelarray = [];
    labelarray.push(label)
    console.log('in constroller', color)
    var notes = {
        Title: title,
        Description: description,
        Pinned: isPin,
        Archived: isArchived,
        Trashed: isTrash,
        Reminder: reminder,
        Colaborator: colaborator,
        userid: localStorage.getItem('userKey'),
        Color: color,
        Label: label


    }


    console.log('array', notes.Color);
    if (label != null) {
        labelarray.map(async (option, index) => {
            var labelDa = {
                name: option,
                user: notes.userid
            }
            var resp = await database.database.ref('/labels').push(labelDa);
            var key = await resp.child("/labels").push().getKey();
            notes.label = key;
        })

    }
    await database.database.ref('/notes').push(notes);
}

var tryvalue = async function (value) {
    await value.forEach(function (value) {
        console.log('data: ' + value);
    })
}





export function retriveData() {
    var arrayvalue = new Promise(async function (resolve, reject) {

                await database.database.ref('notes').orderByChild("userid").equalTo(localStorage.getItem('userKey')).once('value', snap => {
                    // console.log('response of data:'+snap);    
                    var value = []
                    snap.forEach(function (snap) {


                        value.push(snap.val())




                        var key = snap.key;
                        console.log('key--', key)
                        tryvalue(value);
                        resolve(value);

                    });


                });


               

              
                })
               
                var a = arrayvalue.then((vale) => {
                    console.log("final ---", vale);
                    return vale;})



                console.log('a--', a)
                console.log('value of a', arrayvalue)
                return a;

        
        }
           
        

            export var add = function () {
                return new Promise(async function (resolve, reject) {
                    try {
                        var value = await retriveData();
                        console.log('in add--', value);


                        resolve(value);
                    } catch (error) {
                        reject(error)
                    }
                })

            }

            export function getLabel() {
                const arrayva = new Promise(async function (resolve, reject) {
                    await database.database.ref('/labels').orderByChild("user").equalTo(localStorage.getItem('userKey')).once('value', snap => {
                        console.log('response of data:', snap);
                        var value = [];
                        snap.forEach(function (snap) {

                            value.push(snap.val());

                            var key = snap.key;

                            resolve(value);
                            console.log('value--', key)

                        })
                    })
                })
                console.log('array value of albels--', arrayva)
                var a = arrayva.then(async (value) => {
                    console.log("final ---", value);
                    await value;
                })
                console.log('value of a--', a);
                return arrayva;

            }

            export var giveLabels = function () {
                return new Promise(async function (resolve, reject) {
                    try {
                        var value = await getLabel();
                        console.log('in add--', value);

                        resolve(value);
                    } catch (error) {
                        reject(error)
                    }
                })

            }
            
            export function getNotes() {
                var c=new Promise(async function (resolve, reject) {
                await database.database.ref('notes').on("value", snap => {
                   var array=[]
                    snap.forEach(function (snap) {
                        var value = snap.key;
                        array.push(snap.value)
                        console.log('valave--', value)
                        resolve( array);
                    });
                  //  console.log('bbc==',bbc)

                })
                console.log('c-',c)
                return c;
            })
        }