export const state = () => ({
    searchMovie: ''  
  })
  
export const mutations = {
  SET_SEARCH_MOVIE(state, value) {
    state.searchMovie = value;
  },
  RESET_SEARCH_MOVIE(state) {
    state.searchMovie = '';
  }
}
  