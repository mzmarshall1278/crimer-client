export const state = () => ({
  addSuspects: [
  ],
  suspects: []
})

export const mutations = {
  setAddSuspects(state, payload){
    state.addSuspects.push(payload)
  },
  removeASuspect(state, payload){
    let id = state.addSuspects.findIndex(sus => sus.id === payload);
    state.addSuspects.splice(id,1);
  },

}

export const actions = {

}