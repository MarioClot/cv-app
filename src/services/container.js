import {Container} from "inversify";
import TYPES from "./types";
import Firebase from "./firebase/Firebase";
import 'reflect-metadata';

const container = new Container();

container.bind(TYPES.IFirebase).to(Firebase).inSingletonScope();

class Services {
    firebase = container.get(TYPES.IFirebase);
}

export default new Services();
