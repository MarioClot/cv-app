import Services from '../../../services/container';

export const loginWithGoogleAction = ({service}) => () => {
    return service.loginWithGoogle();
};

const inject = {
    service: Services.firebase
};

export default loginWithGoogleAction(inject);
