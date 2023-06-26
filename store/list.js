export const state = () => ({
    listNewUser: [],
    authenticatedList: []
})


/// cambiar por value borrar done?
export const mutations = {
    ADD_PELI_NEW_USER(state, movie) {
        state.listNewUser.push({ content: movie })
    },
    REMOVE_PELI_NEW_USER(state, movie) {
        state.listNewUser.splice(state.listNewUser.indexOf(movie), 1);
    },
    ADD_PELI_AUTHENTICATED(state, movie) {
        state.authenticatedList.push({ content: movie })
    },
    REMOVE_PELI_AUTHENTICATED(state, movie) {
        state.authenticatedList.splice(state.authenticatedList.indexOf(movie), 1);
    }
}