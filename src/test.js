import database from '../../fundoonotes/src/firebase'
import firebase from'./firebase'


    export default function getData(username) {

        database.database.ref('users').orderByChild("email").equalTo(username).on('value', snap => {
            console.log('user', snap.val());
            snap.forEach(function (snap) {
                var value = snap.val();
                // console.log(value);
                var key = snap.key;
                console.log("key", key);
            })
        })
    }


