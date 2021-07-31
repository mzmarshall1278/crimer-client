import Cookies from "js-cookie";

export const state = () => ({
  error: null,
  loading: false,
  token: null
})

export const mutations = {
  setError(state, pl){
    state.error = pl;
  },

  setLoading(state, pl){
    state.loading = pl;
  },
  setToken(state, pl){
    state.token = pl;
  }
}

export const actions = {
  async nuxtServerInit({commit}){
   const token =  Cookies.get('token');
   console.log('its',token);
  //  commit('setToken', token)
  }
}