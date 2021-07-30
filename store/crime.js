export const state = () => ({
  crimes: []
}) 

export const mutations = {
  setCrimes(state, pl){
    console.log(state.crimes);
   state.crimes = pl
  }
}