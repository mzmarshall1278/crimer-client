export const state = () => ({
  addSuspects: [
  ],
  suspects: [
    {
      id: 1,
      fullName: 'zakzaky',
      dob: '12/09/1961',
      gender: 'male',
      identificationType: 'BVN',
      IdentificationNumber: '12345678900',
      crimes: []
  
  },{
      id: 2,
      fullName: 'shekau', 
      dob: '05/06/1961',
      gender: 'Shemale',
      identificationType: 'BVN',
      IdentificationNumber: '23456789012',
      crimes: []
    },
    {
      id: 3,
      fullName: 'AbdulJabbar',
      dob: '01/11/1966',
      gender: 'male',
      identificationType: 'NIN',
      IdentificationNumber: '09876543210',
      crimes: []
  }
  ]
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