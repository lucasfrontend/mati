export const state = () => ({
    leads: []  
  })
  
export const mutations = {
  SET_LEADS(state, value) {
    state.leads = value;
  },
  RESET_LEADS(state) {
    state.leads = '';
  }
}
  