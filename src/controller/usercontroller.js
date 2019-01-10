// var firebase=require('../firebase')
import database from '../firebase'





export function getData(username, abc) {


    database.database.ref('users').orderByChild("email").equalTo(username).on('value', snap => {
        //  console.log('user', snap.val());

     snap.forEach(function (snap) {
            var value = snap.val();
            //var a=snap.toJSON();
            console.log(value);
            var key = snap.key;
            var email = snap.child("email").val(); 
            var firstname=snap.child('firstname').val();
            var lastname=snap.child('lastname').val();
            
            localStorage.setItem('email',email)
           localStorage.setItem('firstname',firstname)
            localStorage.setItem('userKey', key)
             
           localStorage.setItem('lastname',lastname)

        });
    });



}


export function arraycards(firstname, lastname, email, password, contact) {
    var array = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        contact: contact
    }
    return array;
}