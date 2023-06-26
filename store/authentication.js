export const state = () => ({
  isAuthenticated: false,
  newUserName: null

})

export const mutations = {
  SET_AUTHENTICATED(state, value) {
    state.isAuthenticated = value;
  },
  SET_NEW_USER(state, value) {
    state.newUserName = value;
  },
  logout(state) {
    state.isAuthenticated = false;
    state.newUserName = null;
  }
}
