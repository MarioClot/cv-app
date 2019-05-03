export class User {
    email;
    displayName;
    uid;
    constructor(uid, email, displayName) {
        this.displayName = displayName || '';
        this.uid = uid;
        this.email = email;
    }
}
