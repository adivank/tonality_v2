export const state = () => ({
  user: {
    name: null,
    surname: null,
    username: null
  }
})

export const actions = {
  setUser({ commit }, user) {
    commit('SET_USER', user);
  }
}

export const mutations = {
  SET_USER(state, value) {
    state.user.name = value.name;
    state.user.surname = value.surname;
    state.user.username = value.username;
  }
}
