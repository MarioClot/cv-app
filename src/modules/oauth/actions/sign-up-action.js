import Services from "../../../services/container"

export const signUpAction = ({service}) => (email, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error('Passwords not match');
    }
    console.log(service);
    return service.signUp(email, password);
};

const inject = {
    service: Services.firebase
};

export default signUpAction(inject);
