
export const state = () => ({
  error: null,
  loading: false
})

export const mutations = {
  setError(state, pl){
    state.error = pl;
  },

  setLoading(state, pl){
    state.loading = pl;
  }
}