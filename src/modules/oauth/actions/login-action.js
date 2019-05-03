import Services from '../../../services/container';

export const loginAction = ({service}) => (email, password) => {
    return service.login(email, password);
};

const inject = {
    service: Services.firebase
};

export default loginAction(inject);
