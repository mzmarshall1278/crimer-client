export const state = () => ({
  crimes: []
}) 

export const mutations = {
  setCrimes(state, pl){
   state.crimes = pl
  }
}