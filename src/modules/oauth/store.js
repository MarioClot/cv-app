import signUpAction from "./actions/sign-up-action";

export const oauth = {
    namespaced: true,
    state: {
        token: '',
        error: {}
    },
    mutations: {
        saveToken: (state, payload) => {
            state.token = payload.token;
            console.log('saveToken');
        },
        saveError: (state, payload) => {
            state.error = payload.error;
        }
    },
    actions: {
        login: (context) => {
            context.commit('saveToken', {token: "token"});
            console.log('login action');
        },
        signUp: async (context, data) => {
            const result = await signUpAction(data.email, data.password, data.repeatPassword).catch((error) => {
                context.commit('saveError', {error: error})
            });
            console.log(result);
        }
    },
    getters: {}
};
