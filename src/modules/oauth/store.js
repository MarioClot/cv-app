import signUpAction from "./actions/sign-up-action";
import loginAction from "./actions/login-action";
import router from "../../router";
import loginWithGoogleAction from "./actions/login-with-google-action";

export const oauth = {
    namespaced: true,
    state: {
        error: Error,
        user: {}
    },
    mutations: {
        saveError: (state, payload) => {
            state.error = Object.assign({}, state.error, payload.error);
        },
        saveUser: (state, payload) => {
            state.user = Object.assign({}, state.user, payload);
        }
    },
    actions: {
        login: async (context, data) => {
            const result = await loginAction(data.email, data.password).catch((error) => {
                context.commit('saveError', {error: error});
            });
            if (result) {
                context.commit('saveUser', result);
                router.push('home')
            }
            console.log(result);
        },
        signUp: async (context, data) => {
            const result = await signUpAction(data.email, data.password, data.repeatPassword).catch((error) => {
                context.commit('saveError', {error: error});
            });
            if (result) {
                context.commit('saveUser', result);
                router.push('home')
            }
            console.log(result);
        },
        loginWithGoogle: async (context) => {
            const result = await loginWithGoogleAction().catch((error) => {
                context.commit('saveError', {error: error});
            });
            if (result) {
                context.commit('saveUser', result);
                router.push('home')
            }
            console.log(result);
        }
    },
    getters: {}
};
