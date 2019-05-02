export const oauth = {
    namespaced: true,
    state: {
        token: ''
    },
    mutations: {
        saveToken: (state, payload) => {
            state.token = payload.token;
            console.log('saveToken');
        }
    },
    actions: {
        login: (context) => {
            context.commit('saveToken', {token: "token"});
            console.log('login action');
        }
    },
    getters: {}
};
