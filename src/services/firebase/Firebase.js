import IFirebase from "./IFirebase";
import firebase from "firebase";
import {injectable} from "inversify";
import 'reflect-metadata';
import {User} from "../../modules/oauth/entity/user";

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
    return this.firebaseInstance.auth().signInWithEmailAndPassword(email, password).then((result) => {
        return new User(result.user.uid, result.user.email);
    }, (error) => {
        throw new Error( error.code );
    });
};

Firebase.prototype.signUp = function(email, password) {
    return this.firebaseInstance.auth().createUserWithEmailAndPassword(email, password).then((result) => {
        return new User(result.user.uid, result.user.email);
    }, (error) => {
        throw new Error( error.code );
    });
};

Firebase.prototype.loginWithGoogle = function() {
    return this.firebaseInstance.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
        return new User(result.user.uid, result.user.email, result.user.displayName);
    }, (error) => {
        throw new Error( error.code );
    });
};

export default Firebase;
