// var firebase=require('../firebase')
import database from '../firebase'
import {
    reject,
    promised
} from 'q';
import {
    resolve
} from 'url';





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


export function arraynotes(title, description, isPin, isArchived, isTrash, reminder, colaborator) {
    var notes = {
        Title: title,
        Description: description,
        Pinned: isPin,
        Archived: isArchived,
        Trashed: isTrash,
        Reminder: reminder,
        Colaborator: colaborator,
        userid: localStorage.getItem('userKey'),


    }
    database.database.ref('/notes').push(notes);


}
export function retriveData() {
    const arrayvalue =  new Promise(async function(resolve, reject)  {

      await  database.database.ref('notes').orderByChild("userid").equalTo(localStorage.getItem('userKey')).on('value', snap => {
            var value = [];
            snap.forEach(function (snap) {

                value.push(snap.val());


                var key = snap.key;

                resolve(value);

            });

        });
    })


    var a = arrayvalue.then((value) => {
       // console.log("final ---", value);
        return value;
    })
console.log('a--',a)
   console.log('value of a', arrayvalue)
    return a;


}

export var add =  function () {
    return new Promise(async function (resolve, reject) {
        try {
            var value = await retriveData();
           // console.log('in add--', value);
            resolve(value);
        } catch (error) {
            reject(error)
        }
    })

}