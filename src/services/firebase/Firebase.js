import IFirebase from "./IFirebase";
import firebase from "firebase";
import {injectable} from "inversify";
import 'reflect-metadata';

@injectable()
class Firebase extends IFirebase {
    firebaseInstance;
    constructor(firebaseInstance = firebase) {
        super(firebaseInstance);
        this.firebaseInstance = firebaseInstance;
    }
}

Firebase.prototype = Object.create(IFirebase.prototype, {
    'constructor': Firebase
});

Firebase.prototype.login = function(email, password) {
    return this.prototype.firebaseInstance.auth().signInWithEmailAndPassword(email, password).then((result, error) => {
        if (error) {
            throw new Error('Firebase error');
        }
        return result;
    });
};

Firebase.prototype.signUp = function(email, password) {
    console.log(this);
    return this.firebaseInstance.auth().createUserWithEmailAndPassword(email, password).then((result) => {
        return result;
    }, (error) => {
        throw new Error('Firebase error: '+error )
    });
};

export default Firebase;
