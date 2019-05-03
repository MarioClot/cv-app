import {injectable} from "inversify";
import 'reflect-metadata';

@injectable()
class IFirebase {

}

IFirebase.prototype.login = () => {
    throw new Error('Cannot call an interface method');
};

IFirebase.prototype.signUp = () => {
    throw new Error('Cannot call an interface method');
};

IFirebase.prototype.loginWithGoogle = () => {
    throw new Error('Cannot call an interface method');
};

export default IFirebase;
